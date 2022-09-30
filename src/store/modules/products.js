const SET_PRODUCTS = 'SET_PRODUCTS';

export { SET_PRODUCTS };

const state = {
  products: [],
};

const mutations = {
  [SET_PRODUCTS]: (state, products) => {
    state.products = products;
  },
};
const actions = {};
const getters = { getProducts: (state) => state.products };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
