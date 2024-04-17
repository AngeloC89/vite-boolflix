<template>
</template>

<script>
import axios from 'axios';
import { store } from './store';

export default {
name: 'App',
data() {
  return {
    store,
  };
},
methods: {
  getMovies() {
    axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSeries() {
    axios.get(this.store.apiUrl + this.store.endPoint.series, this.store.options)
      .then((res) => {
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
