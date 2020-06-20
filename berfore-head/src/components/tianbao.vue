<template>
  <module :setModel="setModel">
    <div>
      <div class="title" style="color:white">学生填报率（%）</div>
      <dv-scroll-ranking-board :config="config" style="width:190px;height:800px;padding:5px" />
    </div>
  </module>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import module from "../base/module";
export default {
  name: "tianbao",
  data() {
    return {
      config: {
        rowNum: 10,
        unit: "%",
        data: [
          {
            name: "马克思学院 ",
            value: 100.0
          },
          {
            name: "艺术学院",
            value: 100.0
          },
          {
            name: "理学院",
            value: 100.0
          },
          {
            name: "舞蹈学院",
            value: 100.0
          },
          {
            name: "农学院",
            value: 99.94
          },
          {
            name: "环资学院",
            value: 99.92
          },
          {
            name: "义法学院",
            value: 99.92
          },
          {
            name: "信息学院",
            value: 99.92
          },
          {
            name: "园林学院",
            value: 99.87
          },
          {
            name: "工程学院",
            value: 99.82
          },
          {
            name: "经管学院",
            value: 99.8
          },
          {
            name: "林学院",
            value: 99.76
          },
          {
            name: "动科院",
            value: 99.36
          }
        ],
        carousel: "page"
      },
      setModel: {
        position: "absolute",
        top: "11%",
        height: "80%",
        right: "1%",
        zIndex: "100",
        opacity: "1"
      }
    };
  },
  computed: { ...mapGetters(["showCapsule"]) },
  components: {
    module
  },
  beforeMount() {
    this.config.data.sort((a, b) => {
      return b.value - a.value;
    });
  },
  mounted() {
    this.get_tianbao_all();
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
    
  }
};
</script>
<style lang="stylus" scoped>
// 学生省份比例样式
.title {
  position: relative;
  left: 4%;
  top: 0%;
  z-index: 100;
  margin-left: 2%;
  color: #5d3131;
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
  margin-top: 1%;
  z-index: 100;
  width: 300px;
  height: 200px;
  color: #1677b3;
  color: white;
}
</style>
