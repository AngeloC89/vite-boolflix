<template>
<div class="flip-card">
        <div class="flip-card-inner">

            <div id="card-front" class="card" >
                <img :src="image" class="card-img-top" :alt="title">
            </div>


            <div id="card-back" class="card">
                <div id="card" class="card-body d-flex flex-column justify-content-end align-items-center">
                    <h5>{{ title }}</h5>
                    <h6>{{ originalTitle }}</h6>
                    <p>{{ language }}</p>
                    <p>{{ vote }}</p>
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
            'orignalTitle',
            'language',
            'description',
            'vote',

        ]
    }
</script>


<style lang="scss" scoped>

 


    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 300px;
        perspective: 1000px;
        margin-bottom: 190px;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      }
      
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      

    #card-back {
        color: black;
        transform: rotateY(180deg);
        min-height: 470px;
    }

    #card-front, #card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      img{
        min-height: 470px;
      }

</style>