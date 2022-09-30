const SET_CLIENTS = 'SET_CLIENTS';

export { SET_CLIENTS };

const state = {
  clients: [],
};

const mutations = {
  [SET_CLIENTS]: (state, clients) => {
    state.clients = clients;
  },
};
const actions = {};
const getters = { getClients: (state) => state.clients };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
