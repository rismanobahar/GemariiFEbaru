import axios from 'axios'

const api = axios.create(
    {
        baseURL: " http://13.251.197.120:1338"
    });

    export default api;