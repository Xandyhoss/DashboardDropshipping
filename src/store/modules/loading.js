const SET_LOADING = 'SET_LOADING';

export { SET_LOADING };

const state = {
  loading: false,
};

const mutations = {
  [SET_LOADING]: (state, loading) => {
    state.loading = loading;
  },
};
const actions = {};
const getters = { getLoading: (state) => state.loading };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
