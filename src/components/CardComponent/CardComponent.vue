<template>
    <div class="flip-card" @click="this.store.openModalChange = !this.store.openModalChange, currentArray()">
        <div class="flip-card-inner">

            <div id="card-front">
                <img id="img" class="img-fluid" :src="item.poster_path
                    ? this.store.imgUrl + item.poster_path
                    : this.store.imageNotFound" :alt="item.title">
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

        data() {
            return {
                store
            }
        },
       methods: {
            currentArray() {
                return this.store.activeId = this.item.id,
                    this.store.activeArray = this.item
            },

        }
    }


</script>


<style lang="scss" scoped>


  

    .flip-card {
        width: 150px;
        aspect-ratio: 1 / 1.5;
        margin: 10px 0px;
        position: relative;
        cursor: pointer;
        
    }

    .flip-card:hover .flip-card-inner {
        box-shadow: 0px 0px 20px 0px black;
        transform: scale(1.2);
        position: relative;
        opacity: 1;
        z-index: 100;
    }

    .flip-card-inner {
        transition: 0.4s ;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;  
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        opacity: 0.8;

    }

    #card-front {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

    }

    #img {
        height: 100%;

    }


    @media screen and (max-width: 576px) {
        .flip-card {
            width: 110px;
            aspect-ratio: 1 / 1.5;
         
            cursor: pointer;
            
        }

        .flip-card:hover .flip-card-inner {
            box-shadow: 0px 0px 10px 0px black;
            transform: scale(1);
            position: relative;
            opacity: 1;
            z-index: 100;
        }
    
        .flip-card-inner {
            transition: 0.2s ;
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;  
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            opacity: 0.8;
    
        }
    
        #card-front {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    
        }
        
    }

</style>