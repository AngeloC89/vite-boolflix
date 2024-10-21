<template>
    <div v-if="store.cardList">
        <div v-if="list.length > 0">
            <h2>{{ title }}</h2>

            <div class="d-flex justify-content-between align-items-center">
                <!-- button left -->
                <div id="left"  class="btn d-none d-lg-flex" @click="goScroll(-1000)">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>

                <div id="itemId" class="d-flex" ref="item">
                    <div class="mx-2" v-for="(movie) in list">
                        <CardComponent :key="movie.id" :item="movie" />
                    </div>
                </div>
                <!-- button right -->
                <div id="right" class="btn d-none d-lg-flex" @click="goScroll(1000)">
                    <i class="fa-solid fa-chevron-right" ></i>
                </div>
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
            list: Array,
        },
        data() {
            return {
                store,
            };
        },
        methods: {
            goScroll(px) {

                this.$refs.item.scrollBy({
                    left: px,
                    behavior: "smooth",
                });
            },


        },
    }




</script>

<style lang="scss" scoped>

    h2{
        color: red;
        font-size: 3em;
        text-shadow: 10px 4px 10px black;
        font-family: "Playfair Display", serif;
    }

    h4{
        color: black;
        font-size: 2em;
        text-shadow: 0px 0px 10px black;
    }

    #itemId {
        overflow-y: hidden;
        overflow-x: auto;
        margin: 30px;

        &::-webkit-scrollbar {
            display: none;
        }

    }


    #right,
    #left {
        height: 230px;
        width: 20px;
        justify-content: center;
        align-items: center;
     
        cursor: pointer;
        font-size: 4rem;
        position: absolute;
        z-index: 500;

    }

    #right {
        right: 8px;
      


    }

    #left {
        left: 8px;
        
    }


    @media screen and (max-width: 576px) {

        h2{
            color: red;
            font-size: 2rem;
            text-shadow: 3px 1px 3px black;
            margin: 10px 0px;
            
        }

        #itemId {
            overflow-y: hidden;
            overflow-x: auto;
            margin: 10px;
    
            &::-webkit-scrollbar {
                display: none;
            }
    
        }
    


        
    }
</style>
