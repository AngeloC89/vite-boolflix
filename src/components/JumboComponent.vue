<template>
    <div id="jumbo">
        <div id="info">
            <h5>Titolo:</h5>
            <h4>{{ this.store.activeArray.title || this.store.activeArray.name }}</h4>
            <br> <!--********** space **********-->
            <h5 class="d-none d-lg-block">Titolo Originale:</h5>
            <h4 class="d-none d-lg-block">{{ this.store.activeArray.original_title ||
                this.store.activeArray.original_name }}</h4>
            <br class="d-none d-lg-block"> <!--********** space **********-->
            <h5 class="d-none d-lg-block">Lingua Originale:</h5>
            <p class="d-none d-lg-block">
                <img id="flag" class="img-fluid" :src="`/images/flag/${this.store.activeArray.original_language}.png`"
                    :alt="this.store.activeArray.original_language">
            </p>

            <h5>Punteggio:</h5>
            <div class="stars">
                <i v-for="n in 5" :class="{ 'fa-solid': n <= pointStars, 'fa-regular': n > pointStars }"
                    class="fa-star"></i>
            </div>
            <br class="d-none d-lg-block"> <!--********** space **********-->
            <h5>Trama:</h5>
            <div id="overview">
                <p>{{ this.store.activeArray.overview }} </p>
            </div>

        </div>
        <div id="img">
            <img class="img-fluid w-100" :src="this.store.activeArray.backdrop_path
                ? 'https://image.tmdb.org/t/p/original' + this.store.activeArray.backdrop_path
                : this.store.imageNotFound16_9
                " :alt="this.store.activeArray.title" />
            <div id="shadow"></div>
        </div>
    </div>
</template>

<script>
    import { store } from "../store";
    export default {
        name: "JumboComponent",

        data() {
            return {
                store,
            };
        },
        computed: {
            pointStars() {
                return Math.ceil(this.store.activeArray.vote_average / 2);
            },
        },
        //il watcher serve per risolvere un problema di sincronicità con con il riempimento dell'array `popular`
        watch: {
            'store.popular'(newVal) {
                // Quando `popular` viene popolato, prendi il primo elemento e mostralo nel jumbo (invece di avere un jumbo vuoto)
                if (newVal.length > 0) {
                    this.store.activeArray = newVal[0];  // Imposta il primo elemento su `activeArray`
                }
            }
        },

    };
</script>

<style lang="scss" scoped>
    #jumbo {
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        overflow: hidden;
        position: relative;
        background-color: black;

        #info {
            position: absolute;
            width: 600px;
            height: 600px;
            left: 0;
            overflow: hidden;

            &::-webkit-scrollbar {
                display: none;
            }

            #flag {
                height: 40px;
            }

            .stars {
                color: gold;
            }


            #overview {
                position: absolute;
                z-index: 1001;
                height: 210px;
                width: 100%;
                overflow-y: scroll;

                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }

        #img {
            height: 750px;
            width: 1200px;
            position: relative;
            right: -263px;
            z-index: 1000;

            img {
                width: 100%;
                object-fit: contain;
                position: absolute;
                z-index: 100;

            }

            #shadow {
                position: absolute;
                height: 100%;
                width: 100%;
                box-shadow: inset 102px 0px 250px 0px black;
                z-index: 200;
            }

        }
    }


    @media screen and (max-width: 768px) {

        #jumbo {
            height: 300px;
            width: 100%;
            color: white;
            overflow: hidden;
            position: relative;
            background-color: black;
            box-shadow: 0px 0px 10px black;

            #info {
                position: absolute;
                width: 400px;
                height: 300px;
                left: 0;
                overflow: hidden;
                z-index: 250;
                padding: 5px;

                &::-webkit-scrollbar {
                    display: none;
                }

                #flag {
                    height: 30px;
                }

                .stars {
                    color: gold;
                }


                #overview {
                    position: absolute;
                    z-index: 1001;
                    height: 122px;
                    width: 99%;
                    overflow-y: scroll;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }

            #img {
                height: 320px;
                width: 100%;
                position: relative;
                right: 0px;
                z-index: 205;

                img {
                    width: 100%;
                    object-fit: contain;
                    position: absolute;
                    z-index: 100;

                }

                #shadow {
                    display: none;
                }

            }
        }

    }
</style>
