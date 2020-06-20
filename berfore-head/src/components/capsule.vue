<template>
  <div>
    <module :setModel="setModel1">
      <div class="container">
        <div class="title">教师填报率（%）</div>
        <dv-scroll-ranking-board
          :config="config2"
          class="capsule"
          style="width:190px;height:800px;padding:5px"
        />
      </div>
    </module>
    <module :setModel="setModel2">
      <div class="container">
        <div class="title">学生填报率（%）</div>
        <dv-scroll-ranking-board
          :config="config1"
          class="capsule"
          style="width:190px;height:800px;padding:5px"
        />
      </div>
    </module>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import module from "../base/module";
import axios from "axios";
export default {
  name: "capsule",
  data() {
    return {
      rowNum: 10,
      config1: {},
      config2: {},
      setModel1: {
        width: "220px",
        position: "absolute",
        top: "11%",
        height: "80%",
        right: "1%",
        zIndex: "200",
        opacity: "1",
        padding: "10px"
      },
      setModel2: {
        width: "220px",
        position: "absolute",
        top: "11%",
        height: "80%",
        left: "1%",
        zIndex: "200",
        opacity: "1",
        padding: "10px"
      }
    };
  },
  computed: { ...mapGetters(["showCapsule"]) },
  components: {
    module
  },
  beforeMount() {
    // this.config.data.sort((a, b) => {
    //   return b.value - a.value;
    // });
  },
  mounted() {
    this.get_tianbao_all();
    this.get_teatianbao_all();
  },
  updated() {},
  methods: {
    ...mapMutations(["SET_SHOWCAPSULE"]),
    close() {
      this.SET_SHOWCAPSULE(false);
    },
    valcompare(property) {
      return function(a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
      };
    },
    get_tianbao_all() {
      let url = "http://localhost/tree/index.php/Home/Index/tianbao_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let info = JSON.parse(res.data);
        let one = [];
        info.forEach(item => {
          one.push({
            name: item.college,
            value: Number(item.percent)
          });
        });
        let config = {
          rowNum: 10,
          unit: "%",
          data: one,
          carousel: "page"
        };
        this.config1 = config;
      });
    },
    get_teatianbao_all() {
      let url = "http://localhost/tree/index.php/Home/Index/teatianbao_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let info = JSON.parse(res.data);

        let one = [];
        info.forEach(item => {
          one.push({
            name: item.college,
            value: Number(item.percent)
          });
        });
        let config = {
          rowNum: 10,
          unit: "%",
          data: one,
          carousel: "page"
        };
        this.config2 = config;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
// 学生省份比例样式
.container {
}

.title {
  position: relative;
  left: 4%;
  top: 0%;
  z-index: 100;
  margin-left: 2%;
  color: white;
  font-size: 20px;

  .iconguanbi {
    font-size: 24px;
    position: absolute;
    left: 200px;
    top: 1%;
    cursor: pointer;
    z-index: 20;
  }
}

// 左上角胶囊柱图
.capsule {
  zIndex: 10;
  opacity: 1;
  z-index: 100;
  color: #1677b3;
  color: white;
}
</style>
