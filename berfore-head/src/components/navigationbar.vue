<template>
  <div class="navition">
    <div class="icon">
      <i class="el-icon-arrow-left"></i>
    </div>
    <vue-scroll>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#04316F"
            opacity="0.7"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- 食堂 -->
            <el-submenu v-for="(first,index) in out" :key="index" :index="''+index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{first.firstname}}</span>
              </template>
              <el-menu-item-group
                v-for="(second,index) in first.build"
                :key="index"
                :index="'食堂'+index"
              >
                <template slot="title">{{second.secondname}}</template>
                <el-menu-item
                  v-for="(third,index) in second.list"
                  :key="index"
                  :index="''+second.secondname+index"
                  @click.native="move(second.location[index])"
                >{{third}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
           
          </el-menu>
        </el-col>
      </el-row>
    </vue-scroll>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "navigationbar",
  data() {
    return {
      //食堂数据
      out: [
        {
          firstname: "食堂",
          build: [
            {
              secondname: "东湖",
              list: ["东湖食堂", "集贤食堂", "西径食堂", "1958餐厅"],
              location: [
                [119.72407, 30.25808],
                [119.7258281708, 30.25949812211],
                [119.7213757038, 30.259470321],
                [119.7227007151, 30.2593266815]
              ]
            }
          ]
        },
        {
          firstname: "教学区",
          build: [
            {
              secondname: "学院楼",
              list: [
                "学院楼1&2&3——动物科技学院",
                "农业与食品科学学院",
                "理学院",
                "艺术设计学院、人文·茶文化学院",
                "学院楼4&5风景园林与建筑学院",
                "学院楼6———林业与生物技术学院",
                "学院楼7———环境与资源学院",
                "学院楼8&9——工程学院",
                "学院楼10&11——信息工程学院"
              ],
              location: [
                [119.737043, 30.259027],
                [119.734597, 30.265395],
                [119.734673, 30.265188],
                [119.738827, 30.260242],
                [119.738136, 30.260238],
                [119.738247, 30.260909],
                [119.73886, 30.260748],
                [119.738166, 30.262321],
                [119.737809, 30.262402]
              ]
            },
            {
              secondname: "教学楼",
              list: [
                "教学楼1号",
                "教学楼2号",
                "教学楼3号",
                "教学楼4号",
                "教学楼5号"
              ],
              location: [
                [119.735573, 30.264062],
                [119.734334, 30.263768],
                [119.736421, 30.263899],
                [119.734217, 30.264293],
                [119.734952, 30.264474]
              ]
            }
          ]
        },
        {
          firstname: "宿舍区",
          build: [
            {
              secondname: "A区",
              list: ["A1-A4", "A5-A7", "A8", "A11"],
              location: [
                [119.733106, 30.263321],
                [119.731645, 30.262838],
                [119.730065, 30.263812],
                [119.72853, 30.264421]
              ]
            },
            {
              secondname: "B区",
              list: ["B1-B10"],
              location: [[119.73243, 30.267836]]
            },
            {
              secondname: "C区",
              list: ["C1-C12"],
              location: [[119.727872, 30.26685]]
            }
          ]
        },
        {
          firstname: "东湖园",
          build: [
            {
              secondname: "东湖园",
              list: ["翠竹园", "山茶园", "农作园", "木兰园", "松柏园"],
              location:[
                [119.738,30.265],
                [119.728669,30.265951],
                [119.728241,30.267139],
                [119.735868,30.258486],
                [119.735868,30.258173]
              ]
            }
          ]
        }
      ],

      westlake: { poi: [119.72407, 30.25808] }
    };
  },

  computed: { ...mapGetters(["zIndex", "architectureMarker"]) },
  methods: {
    ...mapMutations(["SET_ARCHITECTURE", "SET_ZINDEX"]),
    upModal() {
      let zIndex = this.zIndex;
      let newZIndex = ++zIndex;
      // this.setModel.zIndex = newZIndex;
      this.SET_ZINDEX();
    },
    move(location) {
      this.SET_ARCHITECTURE(location);
      console.log(location);
    }
  }
};
</script>
<style lang="stylus" >
.navition {
  position: absolute;
  z-index: 1000;
  width: 16%;
  height: 70%;
  top: 10%;
  right: -16%;
  transform: translateX(0%);
  transition: all 0.8s;

  &:hover {
    transform: translateX(-100%);
    transition: all 0.8s;
  }

  .icon {
    position: absolute;
    left: -10%;
    top: 40%;
    color: black;
    font-size: 24px;
    cursor: pointer;
    border: 1px solid black;
  }

  .tac {
    opacity: 0.7;
  }
}
</style>
