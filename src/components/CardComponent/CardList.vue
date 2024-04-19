<template>     <!--***************************** Popolari *******************************+-->
    <div v-if="list.length > 0">
        <h2>{{ title }}</h2>

        <div class="d-flex justify-content-between align-items-center">
            <div id="left" @click="goLeft" class="btn btn-outline-secondary rounded-circle">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div id="seriesId" class="d-flex p-4">
                <div class="mx-2" v-for="(movie) in list">
                    <CardComponent :key="movie.id" :item="movie" 
                          
                       />
                </div>
            </div>
            <div id="right" class="btn btn-outline-secondary rounded-circle">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>

</template>

<script>
    import { store } from "../../store";
    import CardComponent from "./CardComponent.vue";
    export default {
        name: "CardList",
        components: {
            CardComponent,
        },
        props: {
           
            title: String,
            list:Array,
           
        },
    

       }


 

</script>

<style lang="scss" scoped>

    h2 {
        color: red;
        font-size: 4em;
        text-shadow: 10px 4px 10px black;
    }

    #movieId,
    #seriesId {
        overflow-y: hidden;
        overflow-x: auto;
        cursor: pointer;
        


    }

    #movieId::-webkit-scrollbar,
    #seriesId::-webkit-scrollbar {
        display: none;
    }

    #right,
    #left {
        height: 100px;
        aspect-ratio: 1 / 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 4rem;
        position: absolute;
        z-index: 10;
    }

    #right {
        right: 0;


    }

    #left {
        left: 0;
    }
</style>
