<template>
    <div class="flip-card" @click="this.store.openModalChange = !this.store.openModalChange, console.log(this.store.openModalChange)">
        <div class="flip-card-inner">

            <div id="card-front">
                <img id="img" class="img-fluid" :src="item.poster_path
                ? this.store.imgUrl + item.poster_path
                : this.store.imageNotFound" :alt="item.title">
            </div>
            <div id="card-back">
                <div id="card" class="h-100 d-flex flex-column justify-content-center">

                    <h5>Titolo:</h5>
                    <h4>
                        {{ item.name || item.title }}
                    </h4>
                    <h5>Titolo Originale:</h5>

                    <h4>
                        {{ item.original_name || item.original_title }}
                    </h4>
                    <h5>Lingua Originale:</h5>
                    <p>
                        <img class="img-fluid w-25" :src="`/images/flag/${item.original_language}.png`" :alt="item.original_language">
                    </p>
                    <h5>Punteggio:</h5>
                    <p>
                        {{ item.vote_average }}
                    </p>
                    <div class="stars">
                        <i v-for="n in 5" :class="{ 'fa-solid': n <= pointStars, 'fa-regular': n > pointStars }"
                            class="fa-star"></i>
                    </div>

                </div>
            </div>


        </div>
    </div>

    


</template>

<script>
import { store } from '../../store';

    export default {
        name: 'CardComponent',
        props: {
            item: Object,

        },
        methods: {

        },

        computed: {
            pointStars() {
                return Math.ceil(`${this.item.vote}` / 2);
            },

        },
        data() {
            return {
                store
            }
        },
    };
</script>


<style lang="scss" scoped>

    .stars {
        color: gold;
    }

    .flip-card {
        background-color: transparent;
        width: 150px;
        aspect-ratio: 1 / 1.5;
        perspective: 1000px;
        margin: 10px 0px;
        transition: 0.5s transforms;
    }

    .flip-card:hover .flip-card-inner {
        transform: translate(0px, -30px);
        position: relative;
        z-index: 100;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        opacity: 0.8;



    }

    .flip-card:hover .flip-card-inner {
        //transform: rotateY(180deg);
        opacity: 1;
    }


    #card-back {
        background-color: black;
        color: white;
        transform: rotateY(180deg);

    }

    #card-front,
    #card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

    }

    #img {
        height: 100%;

    }

</style>