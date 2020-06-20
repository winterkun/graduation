const state = {
  showCapsule: true
};
const getters = {
  showCapsule: state => state.showCapsule
};
const mutations = {
  SET_SHOWCAPSULE: (state, data) => {
    state.showCapsule = data;
  }
};

export default {
  getters,
  state,
  mutations
};
