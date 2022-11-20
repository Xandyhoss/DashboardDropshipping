import axios from '@/utils/axios.js';
import Cookies from 'js-cookie';
import router from '@/router';
import { useToast } from 'vue-toastification';
import store from '@/store';

const toast = useToast();

const loginService = async (username, password) => {
  try {
    const { data } = await axios.post('/auth/', { username, password });
    Cookies.set('auth-token', data.token);
    router.push('/dashboard');
  } catch ({ response }) {
    const getMessage = response.data.errors[0].message.split(':');
    toast.error(getMessage[1], { timeout: 2000 });
  }
};

const isLoggedIn = async () => {
  try {
    const { data } = await axios.post('/auth/isLogged');
    return data;
  } catch ({ response }) {
    console.log(response);
  }
};

const logoutService = async () => {
  try {
    store.commit('loading/SET_LOADING', true, { root: true });
    await axios.delete('/auth/');
    Cookies.remove('auth-token');
    router.go();
  } catch ({ response }) {
    console.log(response);
  }
};

export { loginService, isLoggedIn, logoutService };
