<template>
    <div class="cont ">
        <div id="loader"      class="position-absolute"></div>
        <div id="loader-two"  class="position-absolute"></div>
        <div id="loader-tree" class="position-absolute"></div>
        <div id="loader-four" class="position-absolute"></div>
        <div id="loader-five" class="position-absolute"></div>
    </div>
</template>

<script>
    import { store } from '../store';
    export default {
        name: 'LoaderComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.cont{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 3100;
    display: flex;
    justify-content: center;
    align-items: center;

    
   
    
}


    #loader {
        width: 470px;
        height: 470px;
        border-top: 5px solid #f00;
        border-bottom: 5px solid #f00;
        border-radius: 50%;
        animation: load 2s linear infinite;
      
    };

    #loader-two {
        width: 430px;
        height: 430px;
        border-radius: 50%;
        border-left: 5px solid rgb(0, 0, 0);
        border-right: 5px solid rgb(0, 0, 0);
        animation: load-two 2s linear infinite;
    };

    #loader-tree {
        width: 380px;
        height: 380px;
        border-radius: 50%;
        border-top: 5px solid rgb(255, 255, 255);
        border-bottom: 5px solid rgb(255, 255, 255);
        animation: load-tree 2s linear infinite;
    };

    #loader-four {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: 5px solid rgb(0, 0, 0);
     ;
        animation: load-four 2s linear infinite;
    };

    #loader-five {
        width: 320px;
        height: 320px;
        border-radius: 50%;
        border: 5px solid rgb(255, 0, 0);     
        animation: load-five 2s linear infinite;
    };

    @keyframes load {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(-180deg);
        }

        100% {
            transform: rotate(-360deg);
        }
    };


    @keyframes load-two {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }

        100% {
            transform: rotate(360deg);
        }
    };


    @keyframes load-tree {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(-180deg);
        }

        100% {
            transform: rotate(-360deg);
        }
    };


    @keyframes load-four {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotateY(180deg);
        }

        100% {
            transform: rotateY(360deg);
        }
    };


    @keyframes load-five {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotateX(180deg);
        }

        100% {
            transform: rotateX(360deg);
        }
    };




</style>