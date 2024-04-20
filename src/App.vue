<template>
  <div>
    <HeadetComponent class="position-absolute" @searchTitle="getSearch" />

    <MainComponent class="position-absolute" />

    <div id="modul" :class="{ 'd-none': !this.store.openModalChange }">
      <div id="info">
        <div id="close">
          <button id="closed" class="btn btn-outline-danger rounded-circle"
            @click="this.store.openModalChange = !this.store.openModalChange">
            X
          </button>
        </div>
        <div id="cardInfo">
          <!-- image of the movie on modul -->
          <div id="imgs">

            <img class="img-fluid w-100 h-100" :src="this.store.activeArray.backdrop_path
              ? this.store.imgUrl + this.store.activeArray.backdrop_path
              : this.store.imageNotFound16_9" :alt="this.store.activeArray.title">

          </div>
          <div id="card" class="d-flex flex-column">
            <h5>Titolo:</h5>
            <h4>{{ this.store.activeArray.title || this.store.activeArray.name }}</h4>
            <br> <!--********** space **********-->
            <h5>Titolo Originale:</h5>
            <h4>{{ this.store.activeArray.original_title || this.store.activeArray.original_name }}</h4>
            <br> <!--********** space **********-->
            <h5>Lingua Originale:</h5>
            <p>
              <img id="flag" class="img-fluid" :src="`/images/flag/${this.store.activeArray.original_language}.png`"
                :alt="this.store.activeArray.original_language">
            </p>
            <br> <!--********** space **********-->
            <h5>Punteggio:</h5>
            <p>{{ this.store.activeArray.vote_average }}</p>
            <div class="stars">
              <i v-for="n in 5" :class="{ 'fa-solid': n <= pointStars, 'fa-regular': n > pointStars }"
                class="fa-star"></i>
            </div>
            <br> <!--********** space **********-->
            <h5>Trama:</h5>
            <div id="overview">
              <p>{{ this.store.activeArray.overview }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { store } from "./store";
  import HeadetComponent from "./components/HeaderComponent.vue";
  import MainComponent from "./components/MainComponent.vue";

  export default {
    name: "App",
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
      this.getPopularTV();
      this.getPopular();
    },
    computed: {
      pointStars() {
        return Math.ceil(this.store.activeArray.vote_average / 2);
      },
    },
  };
</script>

<style lang="scss" scoped>
#imgs{
  margin-bottom: 30px;

  img{
    border-radius: 10px;
    
   
  }
}
  .stars {
    color: gold;
  }

  #modul {
    height: 100%;
    width: 100%;
    background-color: rgba(33, 33, 33, 0.587);
    position: fixed;
    z-index: 3001;
    display: flex;
    justify-content: center;
    align-items: center;

    #info {
      height: 900px;
      width: 40%;
      background-color: black;
      color: white;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px red;
      position: relative;
      



      #close {
        height: 35px;
        width: 35px;
        margin-left: auto;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;

        #closed {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;

        }
      }

      #cardInfo {
        height: 100%;
        width: 100%;
        padding: 10px;




        #card {
          overflow: hidden;
          overflow-y: scroll;
          height: 53%;

          #flag {
            height: 40px;
          }

          #overview {
            height: 100%;
            width: 100%;


          }
        }
      }
    }
  }
</style>
