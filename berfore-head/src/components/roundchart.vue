<template>
  <div>
    <dv-border-box-9 class="title">浙江省人员分布</dv-border-box-9>
    <dv-active-ring-chart :config="config" class="roundModel" />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import module from "../base/module";
import axios from "axios";
export default {
  name: "roundchart",
  data() {
    return {
      config: {
        radius: "40%",
        activeRadius: "45%",
        data: [],
        digitalFlopStyle: {
          fontSize: 20
        },
        showOriginValue: true
      }
    };
  },
  computed: {
    ...mapGetters(["showRoundChart", "zIndex"])
  },
  mounted() {
    // this.echartsInit();
    this.get_fenbu_all();
  },
  methods: {
    ...mapMutations(["SET_SHOWROUNDCHART", "SET_ZINDEX"]),
    close() {
      this.SET_SHOWROUNDCHART(false);
    },
    // upModal() {
    //   let zIndex = this.zIndex;
    //   let newZIndex = ++zIndex;
    //   this.roundModel.zIndex = newZIndex;
    //   this.SET_ZINDEX();
    // },
    echartsInit() {
      let Chart = this.$refs.myCharts;
      if (Chart) {
        // let myChart = this.$echarts.init(Chart);
        let myChart = this.$echarts.init(Chart);
        myChart.setOption(this.option);
      }
    },
    get_fenbu_all() {
      let url = "http://localhost/tree/index.php/Home/Index/fenbu_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let info = JSON.parse(res.data);
        let one = [];
        info.forEach(item => {
          one.push({
            name: item.place,
            value: Number(item.percent)
          });
        });
        let config = {
          radius: "40%",
          activeRadius: "45%",
          data: one,
          digitalFlopStyle: {
            fontSize: 20
          },
          showOriginValue: true
        };
        this.config = config;
      });
    }
  },
  components: { module }
};
</script>
<style lang="stylus" scoped>
.roundModel {
  position: absolute;
  top: 0%;
  right: 10%;
  z-index: 200;
  transform: translate(6%, -15%);
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  position: absolute;
  top: 1%;
  right: 26%;
  width: 189px;
  height: 35px;
  z-index: 100;
  text-align: center;
  margin: 0 auto;
  transform: translate(0, 100%);
  color: white;
  font-size: 20px;
}

.chart {
  width: 800px;
  height: 700px;
  z-index: 100;
  text-align: center;
  line-height: 700px;
  color: black;
}

.icon {
  position: absolute;
  right: 0;
  margin-left: 80px;
  font-size: 24px;
  cursor: pointer;
  z-index: 200;

  .iconfont {
    font-size: 24px;
  }
}
</style>
