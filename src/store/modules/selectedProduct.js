const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
const RESET_STATE = 'RESET_STATE';

export { SET_SELECTED_PRODUCT, RESET_STATE };

const getDefaultState = () => {
  return {};
};

const state = getDefaultState();

const mutations = {
  [SET_SELECTED_PRODUCT]: (state, selectedProduct) => {
    state.selectedProduct = selectedProduct;
  },
  [RESET_STATE]: (state) => {
    Object.assign(state, getDefaultState());
  },
};
const actions = {};
const getters = { getSelectedProduct: (state) => state.selectedProduct };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
