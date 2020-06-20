// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vuescroll from "vuescroll";
import App from "./App";
import store from "./vuex";
import router from "./router";
import axios from "axios";
import dataV from "@jiaminghi/data-view";
import ElementUI, {
  Calendar
} from "element-ui";
import VueAMap from "vue-amap";
import "@/stylus/index.styl";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import echarts from "echarts";
import VueRouter from 'vue-router'


Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 2000,
      background: "transparent"
    }
  }
});
Vue.use(Viewer)
// Vue.use(echarts);//Echarts组件
Vue.prototype.$echarts = echarts;
Vue.use(dataV); //dataV组件
Vue.use(VueAMap); //VueAMAP组件
Vue.use(ElementUI); //饿了么组件
Vue.config.productionTip = false;
VueAMap.initAMapApiLoader({
  key: "2173a809338b518f833fbca7be46a8e9", //这就是你申请的key码需要填写的地方
  plugin: [
    //按照你的需要，引入地图的哪些功能，不需要下面这么多
    // "AMap.Autocomplete", //输入提示插件
    // "AMap.PlaceSearch", //POI搜索插件
    // "AMap.Scale", //右下角缩略图插件 比例尺
    // "AMap.OverView", //地图鹰眼插件
    // "AMap.ToolBar", //地图工具条
    // "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    // "AMap.PolyEditor", //编辑 折线多，边形
    // "AMap.CircleEditor", //圆形编辑器插件
    // "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  uiVersion: "1.0", // ui库版本，不配置不加载
  v: "1.4.4"
});
Vue.config.productionTip = false; //阻止启动生产消息，常用作指令

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
