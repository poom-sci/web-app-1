import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://web-app-1-f4f1d.firebaseio.com/'
});

export default instance;