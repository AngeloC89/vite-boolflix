<template>
  <div id="splash" v-if="store.activeSplash">
    <video src="/video/splash.mp4" autoplay muted class="BoolFlix"></video>
  </div>

  <div v-if="!store.activeSplash">

    <HeadetComponent class="position-absolute" @searchTitle="getSearch" />

    <MainComponent class="position-absolute" />

    <ModalComponent />
  </div>
</template>

<script>
  import axios from "axios";
  import { store } from "./store";
  import HeadetComponent from "./components/HeaderComponent.vue";
  import MainComponent from "./components/MainComponent.vue";
  import ModalComponent from "./components/ModalComponent.vue";

  export default {
    name: "App",
    components: {
      HeadetComponent,
      MainComponent,
      ModalComponent,
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
        axios
          .get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
          .then((res) => {
            this.store.movies = res.data.results;

            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getSeries() {
        axios
          .get(this.store.apiUrl + this.store.endPoint.series, this.store.options)
          .then((res) => {
            this.store.series = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPopular() {
        axios
          .get(this.store.apiUrl + this.store.endPoint.popular, this.store.options)
          .then((res) => {
            this.store.popular = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPopularTV() {
        axios
          .get(this.store.apiUrl + this.store.endPoint.popularTv, this.store.options)
          .then((res) => {
            this.store.popularTV = res.data.results;
            console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      setTimeout(() => {
        this.store.activeSplash = false;
        this.getPopular();
        this.getPopularTV();
      }, 10000);

    },

  };
</script>

<style lang="scss" scoped>

  //video Initial
  #splash {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    video {
      width: 100%;
      height: 100%;


    }
  }




</style>
