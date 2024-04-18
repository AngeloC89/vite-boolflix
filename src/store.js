import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
  },
  options: {
    params: {
      api_key: "467cf83af1d6571088192352fc6d870a",
      query: "",
    },
  },
  searchFilter: "",
  movies: [],
  series: [],
  imgUrl: "https://image.tmdb.org/t/p/w500",
  imageNotFound: "/images/image-not-found.jpg",
});


//:image="store.imgUrl + movie.poster_path" serve per stampare le immagini.
