<template>
  <div id="splash" v-if="store.activeSplash">
    <video src="/video/splash.mp4" autoplay muted class="boolFlix"></video>
  </div>

  <div v-if="!store.activeSplash">
    <LoaderComponent v-if="store.loader" class="loader" />

    <!-- @searchTitle="getSearch" è collegato con headerComponent con un keyup, ad ogni pressione del tasto si attiva la funzione getSearch e in contemporanea si riempie la variabile in store.js searchFilter -->
    <HeadetComponent class="position-absolute" @searchTitle="getSearch" />

    <MainComponent class="position-absolute" />

   
  </div>
</template>

<script>
  import axios from "axios";
  import { store } from "./store";
  import HeadetComponent from "./components/HeaderComponent.vue";
  import MainComponent from "./components/MainComponent.vue";
  import LoaderComponent from "./components/LoaderComponent.vue";

  export default {
    name: "App",
    components: {
      HeadetComponent,
      MainComponent,
      LoaderComponent,
    },

    data() {
      return {
        store,
      };
    },
    methods: {
      getSearch() {
        this.store.cardList = false,
          this.store.loader = true;
        if (this.store.searchFilter) {
          this.store.options.params.query = this.store.searchFilter;
        } else {
          this.store.options.params.query = "";
        }
        Promise.all([this.getMovies(), this.getSeries(), this.getPopular(), this.getPopularTV(),]).then((res) => {
          this.store.movies = res[0].data.results;
          this.store.series = res[1].data.results;
          this.store.popular = res[2].data.results;
          this.store.popularTV = res[3].data.results;

        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          this.store.cardList = true;
          this.store.loader = false;
        });
      },

      getInitial() {
        this.store.loader = true;
        Promise.all([
          this.getPopular(),
          this.getPopularTV(),
        ]).then((res) => {
          this.store.popular = res[0].data.results;
          this.store.popularTV = res[1].data.results;
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          this.store.loader = false;
        });
      },
      //function for calling axios
      getMovies() {
        return axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
      },
      getSeries() {
        return axios.get(this.store.apiUrl + this.store.endPoint.series, this.store.options)
      },
      getPopular() {
        return axios.get(this.store.apiUrl + this.store.endPoint.popular, this.store.options)
      },
      getPopularTV() {
        return axios.get(this.store.apiUrl + this.store.endPoint.popularTv, this.store.options)
      },
    },


    created() {
      setTimeout(() => {
        this.store.activeSplash = false;
        this.getInitial();
      }, 10000);

    },

  };
</script>

<style lang="scss" scoped>

  .loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  //video Initial
  #splash {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;


  }

  @media screen and (max-width: 576px) {
    video {
      width: 500px;
     
      transform: scale(2);
   
      /* Riduce lo spazio sotto */
      transition: all 0.3s ease;
    }

  }




</style>
