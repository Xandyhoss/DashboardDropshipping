import axios from 'axios';
import Cookies from 'js-cookie';

const customAxios = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

const requestHandler = (request) => {
  request.headers.Authorization = `bearer ${Cookies.get('auth-token')}`;
  return request;
};

customAxios.interceptors.request.use((request) => requestHandler(request));

export default customAxios;
