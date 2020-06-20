const state = {
  rotation: true
};
const getters = {
  rotation: state => state.rotation
};
const mutations = {
  SET_ROTATION: (state, data) => {
    state.rotation = data;
  }
};

export default {
  getters,
  state,
  mutations
};
