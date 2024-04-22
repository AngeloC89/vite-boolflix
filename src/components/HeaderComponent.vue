<template>
    <header class="bg-black ">
        <nav class="navbar navbar-light bg-light justify-content-between bg-black" >
            <div id="logo">
                <img id="big-logo" class="img-fluid" src="/images/BoolFlix.png" alt="Logo BoolFlix">
                <img id="small-logo" class="img-fluid" src="/images/Logo-B.png" alt="Logo ">
            </div>    
            <div id="search" class="d-flex">     
                <input class="form-control mr-sm-2" type="text" placeholder="Search a title..." aria-label="Search" @keyup.enter="$emit('searchTitle')" v-model.trim="store.searchFilter">
                <button class="btn btn-outline-danger me-2 my-sm-0" @click="$emit('searchTitle')"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'HeaderComponent',
        emits: ['searchTitle'],
        data() {
            return {
                store
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
header{
    position: fixed;
    z-index: 3000;
    height: 100px;
    width: 100%;

    #small-logo{
        display: none;
    }


}

#logo{
    width: 300px;
}

@media screen and (max-width: 576px){
    header{
        position: fixed;
        z-index: 3000;
        height: 100px;
        width: 100%;

        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;

                #small-logo{
                    display: block;
                }

                #big-logo{
                    display: none;
                }


            #search{
                width: 60%;
                
            }
        }
    }

    
    #logo{
        width: 80px;
    }
}
</style>