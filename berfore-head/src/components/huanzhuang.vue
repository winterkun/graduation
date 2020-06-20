<template>
  <div class="setModel">
    <div class="one">
      <dv-border-box-9 class="title">在临人员</dv-border-box-9>
      <dv-active-ring-chart :config="config1" style="width:250px;height:250px" />
    </div>
    <div>
      <dv-border-box-9 class="title">在杭人员</dv-border-box-9>
      <dv-active-ring-chart :config="config2" style="width:250px;height:250px" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import module from "../base/module";
import axios from "axios";
export default {
  name: "huanzhuang",
  data() {
    return {
      config1: {},
      config2: {}
    };
  },
  computed: { ...mapGetters(["showCapsule"]) },
  components: {
    module
  },
  beforeMount() {},
  mounted() {
    this.get_renshu_all();
  },
  updated() {},
  methods: {
    ...mapMutations(["SET_SHOWCAPSULE"]),
    close() {
      this.SET_SHOWCAPSULE(false);
    },
    get_renshu_all() {
      let url = "http://localhost/tree/index.php/Home/Index/renshu_all";
      axios(url, {
        method: "GET"
      }).then(res => {
        let info = JSON.parse(res.data);
        let config1 = {
          data: [
            {
              name: "教师",
              value: Number(info[0].stunum)
            },
            {
              name: "学生",
              value: Number(info[0].teanum)
            }
          ],
          lineWidth: 10,
          color: ["#24FEB4", "#DCF804"]
        };
        let config2 = {
          data: [
            {
              name: "教师",
              value: Number(info[1].stunum)
            },
            {
              name: "学生",
              value: Number(info[1].teanum)
            }
          ],
          lineWidth: 10,
          color: ["#24FEB4", "#DCF804"]
        };
        this.config1 = config1;
        this.config2 = config2;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
// 学生省份比例样式
.setModel {
  position: absolute;
  top: 9%;
  left: 12%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .one {
    transform: translate(0%, 0);
  }

  .two {
    transform: translate(-50%, 0);
  }

  .title {
    width: 150px;
    text-align: center;
    margin: 0 auto;
    transform: translate(0, 100%);
    color: white;
    font-size: 30px;
  }
}
</style>
