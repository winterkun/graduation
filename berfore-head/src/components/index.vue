<template>
  <dv-full-screen-container>
    <div class="Outermost">
      <dv-loading>Loading...</dv-loading>
      <div class="centertitle">
        <dv-decoration-3 style="width:800px;height:30px;" />
        <div class="top-title">基于Datav的大屏数据展示系统</div>
        <dv-decoration-5 style="width:500px;height:40px;" class="decro" />
        <dv-decoration-3 style="width:800px;height:30px;" />
      </div>
      <!-- 时间天气 -->
      <div class="weather">
        <dv-decoration-11
          :reverse="true"
          style="width:300px;height:60px;"
        >{{weatherData.city}}&nbsp;&nbsp;{{weatherData.wea}}&nbsp;&nbsp;{{weatherData.tem2}}℃~{{weatherData.tem1}}℃</dv-decoration-11>
      </div>
      <div class="data">
        <dv-decoration-11
          style="width:500px;height:60px;"
        >{{ date }}&nbsp;&nbsp;{{ week }}&nbsp;&nbsp;{{ time }}</dv-decoration-11>
      </div>
      <!-- 导航栏 -->
      <navigationbar></navigationbar>
      <!-- 填报率模块 -->
      <div v-if="this.showCapsule">
        <capsule></capsule>
      </div>
      <!-- 在杭在临人数模块 -->
      <div v-if="this.showCapsule">
        <huanzhuang></huanzhuang>
      </div>
      <!-- 浙江省人员分布模块 -->
      <div v-if="this.showRoundChart">
        <roundchart></roundchart>
      </div>
      <!-- 重点疫区，实时填报，重点防控，进校动态表模块 -->
      <div v-if="this.rotation">
        <rotation></rotation>
      </div>
      <!-- 校园摄像头信息模块 -->
      <div v-if="this.showCameraList">
        <cameraList></cameraList>
      </div>
      <!-- 按钮导航 -->
      <div class="btn-list">
        <el-row class="btn-list-ul">
          <el-col class="btn-list-ul-li" @click.native="capsuleAppear">
            <img src="../assets/all_info.png" alt />
            <span>综合信息</span>
          </el-col>
          <!-- <el-col class="btn-list-ul-li" @click.native="classAppear">
            <img src="../assets/class_info.png" alt />
            <span>学生课程表</span>
          </el-col>-->
          <el-col class="btn-list-ul-li" @click.native="cameraAppear">
            <img src="../assets/camera.png" alt />
            <span>校园摄像头</span>
          </el-col>
          <el-col class="btn-list-ul-li" @click.native="wheelAppear">
            <img src="../assets/scenery.png" alt />
            <span>校园风光</span>
          </el-col>
        </el-row>
      </div>
      <!-- 地图 -->
      <el-amap
        id="amapContainer"
        expandZoomRange="true"
        class="amap-demo"
        vid="amapDemo"
        ref="map"
        :events="mapEvents"
        :center="mapCenter"
        :keyboardEnable="true"
        :zoom="zoom"
      >
        <el-amap-marker :key="2" :events="this.show_window" :position="architectureMarker"></el-amap-marker>
      </el-amap>
    </div>
  </dv-full-screen-container>
</template>

<script>
import { FullCalendar } from "vue-fullcalendar";
import axios from "axios";
import { mapMutations, mapGetters } from "vuex";
import { AMapManager } from "vue-amap";
//页面组件
import navigationbar from "./navigationbar";
import cameraList from "./cameraList";
import roundchart from "./roundchart";
import tianbao from "./tianbao";
import rotation from "./rotation";
import module from "../base/module";
import capsule from "./capsule";
import schedule from "./schedule";
import wheel from "./wheel";
import huanzhuang from "./huanzhuang";
let amapManager = new AMapManager();
export default {
  name: "HelloWorld",
  data() {
    let self = this;
    return {
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/97c9a9f38a294fdf957614e482b5866c"); //自定义的高德地图的样式，我选的是马卡龙
        }
      },
      currentWindow: {
        position: [119.72407, 30.25808],
        content: "123",
        events: "",
        visible: false
      },
      marker: [
        {
          position: [119.72407, 30.25808],
          events: this.show_window
        },
        {
          position: [119.72407, 30.25808],
          events: this.show_window
        }
      ],
      date: "",
      week: "",
      time: "",
      showWheel: false,
      weatherData: "",
      Shownavigationbar: false,
      localshowRoundChart: false,
      localshowcamera: false,
      foodsrc: require("../assets/food.png"),
      mapCenter: [119.729, 30.25], //地图初始化中心点，东湖校区
      zoom: 20, //最大放大倍数
      plugins: [
        {
          position: "RB",
          pName: "ToolBar",
          events: {
            init(instance) {}
          }
        }
      ],
      pitch: 66,
      food: require("../assets/food.png")
    };
  },
  created() {
    this.getWeather();
    window.addEventListener("beforeunload", e => this.beforeunloadFn(e));
  }, //加载时清空VUEX数据
  computed: {
    ...mapGetters([
      "if_visible",
      "architectureMarker",
      "showRoundChart",
      "rotation",
      "showCapsule",
      "showclass",
      "showCameraList",
      "showclassdetail"
    ])
  },

  mounted() {
  
   /*  var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("HelloWorld");
      }, 1000);
    }).catch(err => {
      reject();
    }); */

    this.getCurrentTime();
  },
  updated() {
    this.echartsInit();
  },
  components: {
    navigationbar,
    module,
    capsule,
    roundchart,
    rotation,
    schedule,
    cameraList,
    wheel,
    tianbao,
    huanzhuang
  },
  methods: {
    ...mapMutations([
      "SET_SHOWROUNDCHART", //男女比例圆饼图
      "SET_ROTATION", //动态信息
      "SET_SHOWCAPSULE", //胶囊柱状图
      "SET_SHOWCAMERALIST", //摄像头列表
      "SET_SHOWCLASS", //专业列表
      "SET_SHOWCLASSDETAIL", //课程表
      "SET_ARCHITECTURE" //建筑导航标注点
    ]),
    echartsInit() {
      let Chart = this.$refs.myCharts;
      if (Chart) {
        // let myChart = this.$echarts.init(Chart);
        let myChart = this.$echarts.init(Chart);
        myChart.setOption({
          title: { text: "在Vue中使用echarts" },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
      }
    },
    wheelAppear() {
      this.showWheel = !this.showWheel;
    },
    show_window() {
      this.currentWindow.visible = true;
    },
    getWeather() {
      //请求天气情况
      let url =
        "https://www.tianqiapi.com/api/?version=v6&appid=81792855&appsecret=yTNW56lT&vue=1";
      axios(url, {
        method: "GET"
      })
        .then(res => {
          console.log(res)
          this.weatherData = res.data;
        })
        .catch(err => {
          this.$notify.info({
            title: "消息",
            message: "回调数据错误"
          });
          reject(err);
        });
    },
    getCurrentTime() {
      //时间初始化
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth();
      let day = now.getDate();
      let weekday = now.getDay();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      let week = weeks[weekday];
      hours = this.check(hours);
      minutes = this.check(minutes);
      seconds = this.check(seconds);
      this.date = `${year}年${month}月${day}日`;
      this.week = week;
      this.time = `${hours}:${minutes}:${seconds}`;
      this.setCurrentTimeout = setTimeout(this.getCurrentTime, 1000);
      if (this.time === "00:00:01") {
        //当到第二天时，从新获取天气
        this.getWeather();
      }
    },
    check(i) {
      //使个位数的时分秒前面带个0
      let num;
      i < 10 ? (num = "0" + i) : (num = i);
      return num;
    },
    beforeunloadFn() {
      //清空VUEX数据
      localStorage.setItem("vuex", {});
    },
    buildAppear() {
      this.Shownavigationbar = !this.Shownavigationbar;
    },
    capsuleAppear() {
      if (this.rotation || this.showRoundChart || this.showCapsule === true) {
        this.SET_ROTATION(false);
        this.SET_SHOWROUNDCHART(false);
        this.SET_SHOWCAPSULE(false);
      } else {
        this.SET_ROTATION(true);
        this.SET_SHOWROUNDCHART(true);
        this.SET_SHOWCAPSULE(true);
      }
    },
    roundchartAppear() {
      this.SET_SHOWROUNDCHART(!this.localshowRoundChart);
    },
    classAppear() {
      if (this.showclass === false) {
        this.SET_SHOWCLASSDETAIL(false);
      }
      this.SET_SHOWCLASS(!this.showclass);
    },
    cameraAppear() {
      this.SET_SHOWCAMERALIST(!this.showCameraList);
    },
    changeCen() {
      this.mapCenter = this.architectureMarker;
    }
  },

  watch: {
    architectureMarker: {
      handler: "changeCen",
      immediate: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@keyframes soft {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  70% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.Outermost {
  .title-dec {
    poisition: asolute;
    top: 2%;
    left: 0;
    width: 250px;
    height: 30px;
    z-index: 200;
  }

  .centertitle {
    z-index: 200;
    position: absolute;
    font-size: 30px;
    color: white;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100px;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .decro {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, 0);
    }

    .top-title {
      text-align: center;
      line-height: auto;
      width: 500px;
      height: 100px;
    }
  }

  .title {
    font-size: 30px;
    background-color: red;
    width: 300px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .build {
    animation: bounceIn 1s;
  }

  .chart {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 30%;
    height: 30%;
    z-index: 100;
    color: black;
  }

  .data {
    position: absolute;
    left: 1%;
    top: 4%;
    color: black;
    font-size: 24px;
    z-index: 100;
    color: white;
  }

  .weather {
    position: absolute;
    right: 1%;
    top: 4%;
    color: black;
    font-size: 24px;
    z-index: 100;
    color: white;
  }

  .btn-list {
    z-index: 100;
    position: fixed;
    text-align: center;
    height: 10%;
    width: 30%;
    left: 35%;
    bottom: 1%;
    transform: translateY(0%);
    transition: all 0.8s;

    &:hover {
      transform: translateY(-100%);
      transition: all 0.8s;
    }

    .btn-list-ul {
      position: relative;
      z-index: 20;
      display: flex;
      margin: 0 auto;
      padding-left: 0;

      .btn-list-ul-li {
        padding-left: 3%;
        padding-right: 3%;
        list-style-type: none;
        background-size: contain;
        background-repeat: no-repeat;
        text-align: center;
        cursor: pointer;
        position: relative;
        color: white;

        span {
          padding: 1px 6px 2px;
          display: block;
          position: relative;
          top: 1px;
          color: white;
          font-size: 25px;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  .amap-demo {
    // 地图样式
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
}
</style>
