const state = {
  showCameraList: false
};
const getters = {
  showCameraList: state => state.showCameraList
};
const mutations = {
  SET_SHOWCAMERALIST: (state, data) => {
    state.showCameraList = data;
  }
};

export default {
  getters,
  state,
  mutations
};
