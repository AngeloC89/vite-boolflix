<template>
    <main>
             <CardList :list="store.movies" :title="'Movies'"/>
             <CardList :list="store.series" :title="'Series'"/>
             <CardList :list="store.popular" :title="'Popular'"/>
             <CardList :list="store.popularTV" :title="'Popular Series'"/>
    </main>
</template>

<script>
    import CardList from './CardComponent/CardList.vue';
    import {store} from '../store';

    export default {
        name: 'MainComponent',
        components: {
            CardList
        },
        data(){
            return{
            store,
        }
    },

    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    main {
        background-color: $backgroundcolor;
        background-image: url(../images/BBBB.png);
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 150px;
        padding: 20px;
        height: 100vh;     
        width: 100%;
        padding-top: 150px; 
        overflow-y: auto;
        

    }

    

</style>