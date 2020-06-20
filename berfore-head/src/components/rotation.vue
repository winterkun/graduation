<template>
  <div>
    <div @mousedown="upModal" class="container">
      <module :setModel="roundModel1">
        <dv-border-box-9 class="title">重点疫区人数</dv-border-box-9>
        <dv-scroll-board :config="config1" style="width:400px;height:200px;color:white" />
      </module>
    </div>
    <div @mousedown="upModal">
      <module :setModel="roundModel2">
        <dv-border-box-9 class="title">实时填报</dv-border-box-9>
        <dv-scroll-board :config="config2" style="width:400px;height:200px;color:white" />
      </module>
    </div>
    <div @mousedown="upModal">
      <module :setModel="roundModel3">
        <dv-border-box-9 class="title">重点防控人员</dv-border-box-9>
        <dv-scroll-board :config="config3" style="width:400px;height:200px;color:white" />
      </module>
    </div>
    <div @mousedown="upModal">
      <module :setModel="roundModel4">
        <dv-border-box-9 class="title">进校动态</dv-border-box-9>
        <dv-scroll-board :config="config4" style="width:400px;height:200px;color:white" />
      </module>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";
import module from "../base/module";
export default {
  name: "rotation",
  data() {
    return {
      final1: [],
      haha: "",
      config: {
        headerBGC: "transparent",
        columnWidth: [180, 100, 100, 100],
        rowNum: 4,
        header: ["地区名称", "学生人数", "教师人数", "合计"],
        data: [
          ["内蒙古自治区", "0", "0", "0"],
          ["广东省广州市", "0", "0", "0"],
          ["广东省深圳市", "10", "0", "10"],
          ["广东省揭阳市", "11", "1", "12"],
          ["广东省自治区", "0", "0", "0"],
          ["上海", "0", "0", "0"],
          ["浙江杭州市", "0", "0", "0"],
          ["浙江省温州市", "0", "0", "0"],
          ["浙江省绍兴市", "8", "2", "10"],
          ["湖北省", "3", "1", "4"]
        ],
        carousel: "single",
        oddRowBGC: "#06234C",
        evenRowBGC: "#072F6B"
      },
      config1: {},
      config2: {},
      config3: {},
      config4: {},
      roundModel1: {
        position: "absolute",
        top: "35%",
        left: "13%",
        zIndex: "100",
        opacity: "0.7"
      },
      roundModel2: {
        position: "absolute",
        top: "65%",
        left: "13%",
        zIndex: "100",
        opacity: "0.7"
      },
      roundModel3: {
        position: "absolute",
        top: "35%",
        right: "13%",
        zIndex: "100",
        opacity: "0.7"
      },
      roundModel4: {
        position: "absolute",
        top: "65%",
        right: "13%",
        zIndex: "100",
        opacity: "0.7"
      }
    };
  },
  created() {
    // this.get_yiqu_all();
    // this.get_shishi_all();
    // this.get_fangkong_all();
    // this.get_jinxiao_all();
  },
  mounted() {
    this.get_yiqu_all();
    this.get_shishi_all();
    this.get_fangkong_all();
    this.get_jinxiao_all();
  },
  computed: { ...mapGetters(["rotation", "zIndex"]) },
  methods: {
    ...mapMutations(["SET_ROTATION", "SET_ZINDEX"]),
    close() {
      this.SET_ROTATION(false);
    },
    get_yiqu_all() {
      let url = "http://localhost/tree/index.php/Home/Index/yiqu_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let final = [];
        let info = JSON.parse(res.data);
        info.forEach(item => {
          let one = [];
          one.push(item.place, item.stunum, item.teanum, item.allnum);
          // one.push(item[0], item[1], item[2], item[3]);
          final.push(one);
        });
        let config1 = {
          headerBGC: "transparent",
          columnWidth: [180, 100, 100, 100],
          rowNum: 4,
          data: final,
          header: ["地区名称", "学生人数", "教师人数", "总和"],
          carousel: "single",
          oddRowBGC: "#06234C",
          evenRowBGC: "#072F6B"
        };
        this.config1 = config1;
        console.log(this.config1.data);
      });
    },
    get_shishi_all() {
      let url = "http://localhost/tree/index.php/Home/Index/shishi_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let final = [];
        let info = JSON.parse(res.data);
        info.forEach((item, index) => {
          let one = [];
          one.push(item.time, item.name, item.college, item.health);
          final.push(one);
          let config2 = {
            headerBGC: "transparent",
            columnWidth: [180, 140, 180, 100],
            rowNum: 4,
            data: final,
            header: ["上报时间", "姓名", "部门/学院", "健康状况"],
            carousel: "single",
            oddRowBGC: "#06234C",
            evenRowBGC: "#072F6B"
          };
          this.config2 = config2;
        });
      });
    },
    get_fangkong_all() {
      let url = "http://localhost/tree/index.php/Home/Index/fangkong_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let final = [];
        let info = JSON.parse(res.data);
        info.forEach(item => {
          let one = [];
          one.push(item.name, item.college, item.place);
          // one.push(item[0], item[1], item[2], item[3]);
          final.push(one);
        });
        let config3 = {
          headerBGC: "transparent",
          columnWidth: [140, 140, 100],
          rowNum: 4,
          data: final,
          header: ["姓名", "部门/学院", "地区"],
          carousel: "single",
          oddRowBGC: "#06234C",
          evenRowBGC: "#072F6B"
        };
        this.config3 = config3;
      });
    },
    get_jinxiao_all() {
      let url = "http://localhost/tree/index.php/Home/Index/jinxiao_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let final = [];
        let info = JSON.parse(res.data);
        info.forEach(item => {
          let one = [];
          one.push(item.time, item.name, item.college, item.in);
          // one.push(item[0], item[1], item[2], item[3]);
          final.push(one);
        });
        let config4 = {
          headerBGC: "transparent",
          columnWidth: [140, 100, 100, 100],
          rowNum: 4,
          data: final,
          header: ["进校时间", "姓名", "部门/学院", "入门"],
          carousel: "single",
          oddRowBGC: "#06234C",
          evenRowBGC: "#072F6B"
        };
        this.config4 = config4;
      });
    },
    upModal() {
      let zIndex = this.zIndex;
      let newZIndex = ++zIndex;
      this.roundModel.zIndex = newZIndex;
      this.SET_ZINDEX();
    }
  },
  components: { module }
};
</script>
<style lang="stylus" scoped>
.title {
  padding: 10px 0;
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 30px;
}
</style>
