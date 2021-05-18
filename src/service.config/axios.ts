import axios from 'axios';
import authService from './auth';

// Default config options
const defaultOptions = {
  baseURL: 'https://voomsway.com',
  headers: {
    'x-api-key': 'Voomsway-key',
  },
};

// Update instance
const instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = authService.getUserSession();
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),

);
// Add a response interceptor
instance.interceptors.response.use(
  (response) =>
    // Do something with response data
    response.data,
  (error) =>
    // Do something with response error
    Promise.reject(error.response),

);
export default instance;

export const createApiRequest = (config: any) => instance(config);
