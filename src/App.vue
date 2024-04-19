<template>
  <div >
    <HeadetComponent class="position-absolute" @searchTitle="getSearch" />
  
    <MainComponent class="position-absolute" />
    
    <div id="modul" :class="{'d-none' : !this.store.openModalChange}" >
      <div id="info">
        <button id="close" class="btn btn-outline-light rounded-circle "  @click="this.store.openModalChange = !this.store.openModalChange">x</button>
      </div>
    </div>
  </div>
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
      getSearch() {
        if (this.store.searchFilter) {
          this.store.options.params.query = this.store.searchFilter;
        } else {
          this.store.options.params.query = "";
        }
        this.getMovies();
        this.getSeries();


        console.log(this.store.options.params.query);
      },
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
      getPopular(){
        axios.get(this.store.apiUrl + this.store.endPoint.popular, this.store.options)
          .then((res) => {
            this.store.popular = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPopularTV(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularTv, this.store.options)
          .then((res) => {
            this.store.popularTV = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    },
    created() {

      this.getPopularTV();
      this.getPopular();

    },
  };
</script>

<style lang="scss" scoped>
  #modul {
    height: 100%;
    width: 100%;
    background-color: rgba(33, 33, 33, 0.587);
    position: fixed;
    z-index: 3001;
    display: flex;
    justify-content: center;
    align-items: center;
  
    

    #info{
      height: 900px;
      width: 40%;
      background-color: black;
      color: white;
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px red;
     

      #close{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;

      }
    }
  }

 
</style>
