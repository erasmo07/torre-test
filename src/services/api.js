import axios from 'axios';
import { baseURL } from './apiUrls';

const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default api; 