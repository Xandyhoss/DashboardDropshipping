import { createStore } from 'vuex';
import clients from './modules/clients';
import loading from './modules/loading';
import products from './modules/products';
import sells from './modules/sells';
import selectedClient from './modules/selectedClient';

export default createStore({
  modules: { clients, loading, products, sells, selectedClient },
});
