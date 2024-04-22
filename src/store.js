import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
    popular: 'movie/popular',
    popularTv: 'tv/popular'
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
  popular: [],//popular
  popularTV: [],//popular series
  imgUrl: "https://image.tmdb.org/t/p/w500",//image base url
  imageNotFound: "/images/image-not-found.jpg",// sostitutive image for card
  imageNotFound16_9: "/images/image-not-found-16-9.jpg",
  activeId: null,
  activeArray: 'popular',


  

  //variable flag
  openModalChange: false,
  activeSplash: true,
  loader: false,
  cardList: true,

});


