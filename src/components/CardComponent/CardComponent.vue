<template>
    <div class="flip-card">
        <div class="flip-card-inner">

            <div id="card-front">
                <img id="img" class="img-fluid" :src="image" :alt="title">
            </div>
            <div id="card-back">
                <div id="card" class="h-100 d-flex flex-column justify-content-center">

                    <h5>Titolo:</h5>
                    <h4>
                        {{ title }}
                    </h4>
                    <h5>Titolo Originale:</h5>

                    <h4>
                        {{ originalTitle }}
                    </h4>
                    <h5>Lingua Originale:</h5>
                    <p>
                        <img class="img-fluid w-25" :src="`/images/flag/${language}.png`" :alt="language">
                    </p>
                    <h5>Punteggio:</h5>
                    <p>
                        {{ vote }}
                    </p>
                    <div class="stars">
                        <i v-for="n in 5"
                            :class="{ 'fa-solid': n <= pointStars, 'fa-regular': n > pointStars }" class="fa-star"></i>
                    </div>

                </div>
            </div>


        </div>
    </div>


</template>

<script>

    export default {
        name: 'CardComponent',
        props: [
            'image',
            'title',
            'originalTitle',
            'language',
            'vote',

        ],

        computed: {
            pointStars() {
                return Math.ceil(`${this.vote}` / 2);
            }
        }
    };
</script>


<style lang="scss" scoped>

    .stars {
        color: gold;
    }

    .flip-card {
        background-color: transparent;
        min-width: 300px;
        min-height: 470px;
        perspective: 1000px;
        margin: 10px 0px;


    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }


    #card-back {
        background-color: black;
        color: white;
        transform: rotateY(180deg);
        min-height: 470px;
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
        min-height: 470px;

    }

</style>