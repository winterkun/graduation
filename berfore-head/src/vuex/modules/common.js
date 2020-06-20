const state = {
  zIndex: 20,
  if_visible: false,
  architectureMarker: [119.729, 30.2565]

};
const getters = {
  zIndex: state => state.zIndex,
  if_visible: state => state.if_visible,
  architectureMarker: state => state.architectureMarker,
};
const mutations = {
  SET_ZINDEX: state => {
    state.zIndex++;
  },
  SET_ARCHITECTURE: (state, data) => {
    state.architectureMarker = data;
  },
};

export default {
  getters,
  state,
  mutations
};
