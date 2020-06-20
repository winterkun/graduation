import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";
import roundChart from "./modules/roundchart";
import rotation from "./modules/rotation";
import capsule from "./modules/capsule";
import createPersisted from "vuex-persistedstate";
import schedule from "./modules/schedule";
import cameraList from "./modules/cameraList";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    common,
    roundChart,
    rotation,
    capsule,
    schedule,
    cameraList
  },
  plugins: [
    createPersisted({
      key: "vuex",
      paths: []
    })
  ]
});

export default store;
