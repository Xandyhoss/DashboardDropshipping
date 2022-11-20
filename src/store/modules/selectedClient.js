const SET_SELECTED_CLIENT = 'SET_SELECTED_CLIENT';
const RESET_STATE = 'RESET_STATE';

export { SET_SELECTED_CLIENT, RESET_STATE };

const getDefaultState = () => {
  return {};
};

const state = getDefaultState();

const mutations = {
  [SET_SELECTED_CLIENT]: (state, selectedClient) => {
    state.selectedClient = selectedClient;
  },
  [RESET_STATE]: (state) => {
    Object.assign(state, getDefaultState());
  },
};
const actions = {};
const getters = { getSelectedClient: (state) => state.selectedClient };

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
