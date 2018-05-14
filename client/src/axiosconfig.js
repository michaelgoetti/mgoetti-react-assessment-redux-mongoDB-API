import axios from 'axios';
import store from './storeconfig';

// configure base url
const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// intercept requests and add authorization token
// instance.interceptors.request.use((config) => {
//   const token = store.getState().auth.token;
//   if (token) {
//     config.headers.authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default instance;