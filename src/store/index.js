import { createStore } from 'vuex';
import clients from './modules/clients';
import loading from './modules/loading';
import products from './modules/products';
import sells from './modules/sells';

export default createStore({
  modules: { clients, loading, products, sells },
});
