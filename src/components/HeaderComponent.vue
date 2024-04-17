<template>
    <header class="bg-black">
        <nav class="navbar navbar-light bg-light justify-content-between bg-black" >
            <div id="logo">
                <img class="img-fluid" src="/images/BoolFlix.png" alt="Logo BoolFlix">
            </div>    
            <div class="d-flex">     
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" @keyup.enter="$emit('searchTitle')" v-model="store.searchFilter">
                <button class="btn btn-outline-warning my-2 my-sm-0" @click="$emit('searchTitle')">Search</button>
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
    }
</script>

<style lang="scss" scoped>
#logo{
    width: 300px;
}
</style>