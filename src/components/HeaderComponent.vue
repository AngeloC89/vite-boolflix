<template>
    <header class="bg-black">
        <nav class="navbar navbar-light bg-light justify-content-between bg-black" >
            <div id="logo">
                <img class="img-fluid" src="/images/BoolFlix.png" alt="Logo BoolFlix">
            </div>
            <form class="form-inline d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" @keyup="$emit('searchTitle')" v-model="store.searchFilter">
                <button class="btn btn-outline-warning my-2 my-sm-0" @click="$emit('searchTitle')">Search</button>
            </form>
        </nav>
    </header>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'HeaderComponent',
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