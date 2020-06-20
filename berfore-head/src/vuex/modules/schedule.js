const state = {
  showclass: false,
  showclassdetail: false,
  firstindex: "",
  secondindex: "",
  thirdindex: ""
};
const getters = {
  showclass: state => state.showclass,
  showclassdetail: state => state.showclassdetail,
  firstindex: state => state.firstindex,
  secondindex: state => state.secondindex,
  thirdindex: state => state.thirdindex,
};
const mutations = {
  SET_SHOWCLASS: (state, data) => (state.showclass = data),
  SET_SHOWCLASSDETAIL: (state, data) => (state.showclassdetail = data),
  SET_FIRSTINDEX: (state, data) => (state.firstindex = data),
  SET_SECONDINDEX: (state, data) => (state.secondindex = data),
  SET_THIREDINDEX: (state, data) => (state.thirdindex = data)
};

export default {
  getters,
  state,
  mutations
};
