import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie:'search/movie',
        series: 'search/tv',
    },
    options: {
        params: {
            api_key: '467cf83af1d6571088192352fc6d870a',
            query: 'a',
        },
    },
    
})