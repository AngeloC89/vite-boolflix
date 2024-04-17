<template>
  <HeadetComponent />
  <MainComponent />
</template>

<script>
  import axios from 'axios';
  import { store } from './store';
  import HeadetComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';

  export default {
    name: 'App',
    components: {
      HeadetComponent,
      MainComponent,
    },
    data() {
      return {
        store,
      };
    },
    methods: {
      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
          .then((res) => {
            this.store.movies = res.data.results;

            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.series, this.store.options)
          .then((res) => {
            this.store.series = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },




    },
    created() {
      this.getMovies();
      this.getSeries();
    },
  };
</script>

<style lang="scss" scoped>
  /* Your styles here */
</style>
