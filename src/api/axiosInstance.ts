import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.75.134:8081/api',
    withCredentials: true,
})

export default instance;
