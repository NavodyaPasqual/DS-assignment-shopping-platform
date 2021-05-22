import axios from 'axios';

/**
 * create API using axios
 * @type {AxiosInstance}
 */
const API = axios.create({ baseURL: 'http://localhost:5000' });

/**
 * user data get from local storage
 */
API.interceptors.request.use((req) => {
    if (localStorage.getItem('UserProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('UserProfile')).token}`;
    }

    return req;
});


export const insertDeliveryData = (newDelivery) => API.post('/delivery', newDelivery);
