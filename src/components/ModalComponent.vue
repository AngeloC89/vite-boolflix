<template>
    <div>
        <div id="modal" :class="{ 'd-none': !this.store.openModalChange }">
            <div id="info">
                <div id="close">
                    <button id="closed" class="btn btn-outline-danger rounded-circle"
                        @click="this.store.openModalChange = !this.store.openModalChange">
                        X
                    </button>
                </div>
                <div id="cardInfo">
                    <!-- image of the movie on modul -->
                    <div id="big-div-image">
                        <div id="imgs">

                            <img class="img-fluid w-100 h-100" :src="this.store.activeArray.backdrop_path
                                ? this.store.imgUrl + this.store.activeArray.backdrop_path
                                : this.store.imageNotFound16_9" :alt="this.store.activeArray.title">

                        </div>
                    </div>
                    <div id="card" class="d-flex flex-column p-2 ">
                        <h5>Titolo:</h5>
                        <h4>{{ this.store.activeArray.title || this.store.activeArray.name }}</h4>
                        <br> <!--********** space **********-->
                        <h5>Titolo Originale:</h5>
                        <h4>{{ this.store.activeArray.original_title || this.store.activeArray.original_name }}</h4>
                        <br> <!--********** space **********-->
                        <h5>Lingua Originale:</h5>
                        <p>
                            <img id="flag" class="img-fluid"
                                :src="`/images/flag/${this.store.activeArray.original_language}.png`"
                                :alt="this.store.activeArray.original_language">
                        </p>
                        <br> <!--********** space **********-->
                        <h5>Punteggio:</h5>
                        <p>{{ this.store.activeArray.vote_average }}</p>
                        <div class="stars">
                            <i v-for="n in 5" :class="{ 'fa-solid': n <= pointStars, 'fa-regular': n > pointStars }"
                                class="fa-star"></i>
                        </div>
                        <br> <!--********** space **********-->
                        <h5>Trama:</h5>
                        <div id="overview">
                            <p>{{ this.store.activeArray.overview }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    export default {
        name: 'ModalComponent',
        data() {
            return {
                store
            }
        },
        computed: {
            pointStars() {
                return Math.ceil(this.store.activeArray.vote_average / 2);
            },
        },

    }
</script>

<style lang="scss" scoped>

    //stars of the vote
    .stars {
        color: gold;
    }

    //modal component
    #modal {
        height: 100%;
        width: 100%;
        background-color: rgba(33, 33, 33, 0.587);
        position: fixed;
        z-index: 3001;
        display: flex;
        justify-content: center;





        #info {
            height: 600px;
            width: 80%;
            background-color: black;
            color: white;
            position: relative;
            top: 50px;
            animation: modal-comparsa 0.5s ease-in-out forwards;




            //div container for close button
            #close {
                height: 35px;
                width: 35px;
                margin-left: auto;
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 10px;
                z-index: 2000;

                //close button
                #closed {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 30px;
                }
            }

            //the image and the info to movie or serie
            #cardInfo {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: row-reverse;
                position: relative;

                //image of the modal
                #big-div-image {
                    height: 100%;
                    width: 80%;
                    position: absolute;
                    right: 0;

                    #imgs {
                        position: relative;
                        height: 100%;
                        width: 100%;





                        &::after {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            content: "";
                            display: block;
                            height: 100%;
                            background: linear-gradient(to left, rgba(255, 255, 255, 0) 53%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%);
                            box-shadow: inset 0px 0px 150px 0px black;
                        }
                    }
                }

                #card {
                    overflow: hidden;
                    overflow-y: scroll;
                    height: 100%;
                    width: 45%;
                    position: absolute;
                    left: 0;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    #flag {
                        height: 40px;
                    }

                    #overview {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }

    @keyframes modal-comparsa {
        from {
            opacity: 0;
            transform: scale(0.5);
            /* Riduce il modale all'inizio dell'animazione */
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

</style>