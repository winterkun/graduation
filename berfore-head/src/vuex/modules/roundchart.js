const state = {
  showRoundChart: true
};
const getters = {
  showRoundChart: state => state.showRoundChart
};
const mutations = {
  SET_SHOWROUNDCHART: (state, data) => (state.showRoundChart = data)
};

export default {
  getters,
  state,
  mutations
};
