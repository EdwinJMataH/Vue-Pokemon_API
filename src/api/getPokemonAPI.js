import axios from 'axios';

const request = axios.create( {
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default request;