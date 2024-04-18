<template>
    <div id="movieId" class="container p-0">
        <div v-if="store.series.length > 0">
            <h2>Film</h2>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies">
                <CardComponent :image="store.imgUrl + movie.poster_path" :title="movie.title" :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average"/>
            </div>
        </div>
    </div>
    <div id="seriesId" class="container p-0">
        <div v-if="store.series.length > 0">
            <h2>{Series}</h2>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.series">
                <CardComponent :image="store.imgUrl + movie.poster_path" :title="movie.name" :originalTitle="movie.original_name" :language="movie.original_language" :vote="movie.vote_average" />
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../../store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
            };
        }
    }
</script>


<style lang="scss" scoped>
h2{
    color: red;
    font-size: 4em;
    text-shadow: 10px 4px 10px black;
}

#movieId, #seriesId{
    margin-bottom: 100px;
}



</style>