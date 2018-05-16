import axios from 'axios';

// configure base url
const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default instance;