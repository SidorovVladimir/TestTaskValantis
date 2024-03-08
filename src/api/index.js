/* eslint-disable no-param-reassign */

import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'https://api.valantis.store:41000';
const password = 'Valantis';

const currentDate = new Date();

const day = `0${currentDate.getUTCDate()}`.slice(-2);
const month = `0${currentDate.getUTCMonth() + 1}`.slice(-2);
const year = currentDate.getUTCFullYear();

const auth = md5(`${password}_${year}${month}${day}`);

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(
  (config) => {
    config.headers['X-Auth'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
