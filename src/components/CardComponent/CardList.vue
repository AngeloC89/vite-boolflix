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
        font-size: 4em;
        text-shadow: 10px 4px 10px black;
    }

    h4{
        color: black;
        font-size: 2em;
        text-shadow: 0px 0px 10px black;
    }

    #itemId {
        overflow-y: hidden;
        overflow-x: auto;




    }


    #itemId::-webkit-scrollbar {
        display: none;
    }

    #right,
    #left {
        height: 230px;
        width: 50px;
        justify-content: center;
        align-items: center;
     
        cursor: pointer;
        font-size: 6rem;
        position: absolute;
        z-index: 500;

    }

    #right {
        right: 0;
      


    }

    #left {
        left: 0;
        
    }


    @media screen and (max-width: 576px) {

        h2{
            color: red;
            font-size: 2em;
            text-shadow: 5px 2px 5px black;
        }


        
    }
</style>
