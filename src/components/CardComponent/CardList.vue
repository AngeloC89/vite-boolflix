<template>
    <div class="container p-0">
        <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies" >
            <CardComponent :image="store.imgUrl + movie.poster_path" :title="movie.original_title" />
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

</style>