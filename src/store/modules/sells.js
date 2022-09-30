const SET_SELLS = 'SET_SELLS';

export { SET_SELLS };

const state = {
  sells: [],
};

const mutations = {
  [SET_SELLS]: (state, sells) => {
    state.sells = sells;
  },
};
const actions = {};
const getters = { getSells: (state) => state.sells };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
