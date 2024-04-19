<template>
    <header class="bg-black ">
        <nav class="navbar navbar-light bg-light justify-content-between bg-black" >
            <div id="logo">
                <img class="img-fluid" src="/images/BoolFlix.png" alt="Logo BoolFlix">
            </div>    
            <div class="d-flex">     
                <input class="form-control mr-sm-2" type="text" placeholder="Cerca un titolo..." aria-label="Search" @keyup.enter="$emit('searchTitle')" v-model.trim="store.searchFilter">
                <button class="btn btn-outline-danger me-2 my-2 my-sm-0" @click="$emit('searchTitle')"><i class="fa-solid fa-magnifying-glass"></i></button>
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
}

#logo{
    width: 300px;
}
</style>