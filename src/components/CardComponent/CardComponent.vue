<template>
    <div class="flip-card">
        <div class="flip-card-inner">

            <div id="card-front">
                <img id="img" class="img-fluid" :src="image" :alt="title">
            </div>


            <div id="card-back">
                <div id="card" class="h-100 d-flex flex-column justify-content-center">

                    <h5>
                        {{ title }}
                    </h5>
                    <h6>
                        {{ originalTitle }}
                    </h6>
                    <p v-if="!img">
                        <img class="img-fluid w-25" :src="`/images/flag/${language}.png`" alt="">
                    </p>
                    <p v-else>
                        <span>{{ language }}</span>
                    </p>
                    <p>
                        {{ vote }}
                    </p>

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

        ]
    }
</script>


<style lang="scss" scoped>




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