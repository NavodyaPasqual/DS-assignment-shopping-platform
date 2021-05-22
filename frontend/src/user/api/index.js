import axios from 'axios';

/**
 * create API using axios
 * @type {AxiosInstance}
 */
const API = axios.create({ baseURL: 'http://localhost:5000' });

/**
 * API for sign in and sign up
 */
API.interceptors.request.use((req) => {
    if (localStorage.getItem('UserProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('UserProfile')).token}`;
    }

    return req;
});

/**
 * export user API
 * @param formData
 * @returns {Promise<AxiosResponse<any>>}
 */
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);
