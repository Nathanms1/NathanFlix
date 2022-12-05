import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=bb90364087bbc9d5638f22f87ef9c437&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;