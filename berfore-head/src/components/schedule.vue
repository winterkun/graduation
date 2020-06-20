<template>
  <div>
    <!-- 选择专业 -->
    <div @mousedown="upModal">
      <module :setModel="left" v-if="this.showclass">
        <div class="icon">
          <i class="iconfont iconguanbi" @click="close"></i>
        </div>
        <vue-scroll>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#06234C"
                text-color="#fff"
                font-weight="20px"
                active-text-color="white"
              >
                <el-submenu
                  v-for="(first,firstindex) in academy"
                  :key="firstindex"
                  :index="''+first.firstname+firstindex"
                >
                  <template slot="title">
                    <i class="el-icon-news"></i>
                    <span>{{first.firstname}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-submenu
                      v-for="(second,secondindex) in first.list"
                      :key="secondindex"
                      :index="''+second.secondname+secondindex"
                    >
                      <span slot="title">
                        <i class="el-icon-bell"></i>
                        <span>{{second.secondname}}</span>
                      </span>
                      <el-menu-item-group :index="''+second.secondname+secondindex">
                        <el-menu-item
                          v-for="(third,thirdindex) in second.list"
                          :key="thirdindex"
                          :index="''+second.secondname+thirdindex"
                          @click.native="showshowcladetail(firstindex,secondindex,thirdindex)"
                        >
                          <i class="el-icon-tickets"></i>
                          {{third}}
                        </el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu-item-group>
                </el-submenu>
                <!--
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>农业与食品科学学院</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="1-1">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>食品科学与工程</span>
                    </span>
                    <el-menu-item-group index="1-1">
                      <el-menu-item index="1-1-1" @click.native="showshowcladetail">食品科学161</el-menu-item>
                      <el-menu-item index="1-1-2" @click.native="showshowcladetail">食品科学162</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="1-2">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>食品科学</span>
                    </span>
                    <el-menu-item-group index="20">
                      <el-menu-item index="1-2-1">食品161000</el-menu-item>
                      <el-menu-item index="1-2-2">食品162000</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu-item-group>
                </el-submenu>-->
                <!-- <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>信息工程</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="2-1">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>种子科学与工程</span>
                    </span>
                    <el-menu-item-group index="2-1">
                      <el-menu-item index="2-1">种子科学161</el-menu-item>
                      <el-menu-item index="2-2">种子科学162</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="122">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>科学科学</span>
                    </span>
                    <el-menu-item-group index="20">
                      <el-menu-item index="2-3">食品161000</el-menu-item>
                      <el-menu-item index="2-4">食品162000</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>信息工程</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="33">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>种子科学与工程</span>
                    </span>
                    <el-menu-item-group index="10">
                      <el-menu-item index="3-1">种子科学161</el-menu-item>
                      <el-menu-item index="3-2">种子科学162</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="122">
                    <span slot="title">
                      <i class="el-icon-location"></i>
                      <span>科学科学</span>
                    </span>
                    <el-menu-item-group index="20">
                      <el-menu-item index="3-3">食品161000</el-menu-item>
                      <el-menu-item index="3-4">食品162000</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu-item-group>
                </el-submenu>-->
              </el-menu>
            </el-col>
          </el-row>
        </vue-scroll>
      </module>
    </div>
    <!-- 选择专业 -->
    <!-- 显示对应课表 -->
    <div v-if="this.showclassdetail">
      <clalist></clalist>
    </div>
    <!-- 显示对应课表 -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import module from "../base/module";
import clalist from "../base/clalist";
export default {
  name: "schedule",
  data() {
    return {
      left: {
        //选择专业模块样式
        position: "absolute",
        height: "70%",
        width: "23%",
        top: "8%",
        left: "10%",
        zIndex: 20,
        overflow: "hidden",
        borderRadius: "20px",
        
        opacity: 0.7
      },
      //传递选择专业的index给课表模块，渲染对应数据
      firstindex: 0,
      secondindex: 0,
      thirdindex: 0,
      //传递选择专业的index给课表模块，渲染对应数据
      academy: [
        /* {
          firstname: "农业与食品科学学院",
          list: [
            {
              secondname: "食品科学与工程",
              list: ["食品科学161", "食品科学162"]
            },
            {
              secondname: "信息科学与工程",
              list: ["信息科学161", "信息科学162"]
            }
          ]
        }, */
        {
          firstname: "农业与食品科学学院",
          list: [
            {
              secondname: "食品科学与工程",
              list: ["食品科学与工程161", "食品科学与工程162"]
            },
            {
              secondname: "	园艺",
              list: ["园艺161", "园艺162"]
            },
            {
              secondname: "	植物保护",
              list: ["植物保护161", "植物保护162"]
            },
            {
              secondname: "	农学",
              list: ["农学161", "农学162162"]
            },
            {
              secondname: "食品质量与安全",
              list: ["食品质量与安全161", "食品质量与安全162"]
            },
            {
              secondname: "种子科学与工程",
              list: ["种子科学与工程161", "种子科学与工程162"]
            },
            {
              secondname: "茶学",
              list: ["茶学161", "茶学162"]
            }
          ]
        },
        {
          firstname: "动物科技学院",
          list: [
            {
              secondname: "动物科学",
              list: ["动物科学161", "动物科学162"]
            },
            {
              secondname: "动物医学",
              list: ["动物医学161", "动物医学162"]
            }
          ]
        },
        {
          firstname: "林业与生物技术学院",
          list: [
            {
              secondname: "林学",
              list: ["林学161", "林学162"]
            },
            {
              secondname: "生物技术",
              list: ["生物技术161", "生物技术162"]
            },
            {
              secondname: "中药学",
              list: ["中药学161", "中药学162"]
            },
            {
              secondname: "生物科学",
              list: ["生物科学161", "生物科学162"]
            },
            {
              secondname: "生态学",
              list: ["生态学161", "生态学162"]
            },
            {
              secondname: "	森林保护",
              list: ["	森林保护161", "	森林保护162"]
            }
          ]
        },
        {
          firstname: "环境与资源学院",
          list: [
            {
              secondname: "环境工程",
              list: ["环境工程161", "环境工程162"]
            },
            {
              secondname: "	环境科学",
              list: ["环境科学161", "环境科学162"]
            },
            {
              secondname: "	农业资源与环境",
              list: ["农业资源与环境161", "农业资源与环境162"]
            },
            {
              secondname: "测绘工程",
              list: ["测绘工程161", "测绘工程162"]
            },
            {
              secondname: "人文地理与城乡规划",
              list: ["人文地理与城乡规划161", "人文地理与城乡规划162"]
            },
            {
              secondname: "		地理信息科学",
              list: ["	地理信息科学161", "	地理信息科学162"]
            }
          ]
        },
        {
          firstname: "工程学院",
          list: [
            {
              secondname: "木材科学与工程",
              list: ["木材科学与工程161", "木材科学与工程162"]
            },
            {
              secondname: "	工业设计",
              list: ["工业设计161", "工业设计162"]
            },
            {
              secondname: "	机械设计制造及其自动化",
              list: ["机械设计制造及其自动化61", "机械设计制造及其自动化162"]
            },
            {
              secondname: "	交通运输",
              list: ["	交通运输161", "	交通运输162"]
            },
            {
              secondname: "农业机械化及其自动化",
              list: ["农业机械化及其自动化161", "农业机械化及其自动化162"]
            },
            {
              secondname: "高分子材料与工程",
              list: ["高分子材料与工程161", "高分子材料与工程162"]
            },
            {
              secondname: "产品设计",
              list: ["产品设计161", "产品设计162"]
            }
          ]
        },
        {
          firstname: "风景园林与建筑学院、旅游与健康学院",
          list: [
            {
              secondname: "园林",
              list: ["园林161", "园林162"]
            },
            {
              secondname: "	旅游管理",
              list: ["旅游管理161", "旅游管理162"]
            },
            {
              secondname: "	土木工程",
              list: ["土木工程61", "土木工程162"]
            },
            {
              secondname: "	建筑学",
              list: ["建筑学161", "	建筑学162"]
            },
            {
              secondname: "风景园林",
              list: ["风景园林161", "风景园林162"]
            },
            {
              secondname: "公共事业管理",
              list: ["公共事业管理161", "公共事业管理162"]
            },
            {
              secondname: "环境设计",
              list: ["环境设计161", "环境设计162"]
            }
          ]
        },
        {
          firstname: "信息工程学院",
          list: [
            {
              secondname: "	计算机科学与技术",
              list: ["计算机科学与技术161", "	计算机科学与技术162"]
            },
            {
              secondname: "	信息管理与信息系统",
              list: ["信息管理与信息系统161", "信息管理与信息系统162"]
            },
            {
              secondname: "		电子信息工程",
              list: ["	电子信息工程161", "	电子信息工程162"]
            },
            {
              secondname: "	物联网工程",
              list: ["物联网工程161", "物联网工程162"]
            }
          ]
        },
        {
          firstname: "理学院",
          list: [
            {
              secondname: "	信息与计算科学",
              list: ["信息与计算科学161", "	信息与计算科学162"]
            },
            {
              secondname: "	应用化学",
              list: ["应用化学161", "应用化学162"]
            },
            {
              secondname: "		应用统计学",
              list: ["	应用统计学161", "	应用统计学162"]
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  components: {
    module,
    clalist
  },
  computed: { ...mapGetters(["zIndex", "showclass", "showclassdetail"]) },
  methods: {
    ...mapMutations([
      "SET_SHOWCLASS",
      "SET_ZINDEX",
      "SET_SHOWCLASSDETAIL",
      "SET_FIRSTINDEX",
      "SET_SECONDINDEX",
      "SET_THIREDINDEX"
    ]),
    move() {
      this.SET_ARCHITECTURE([119.72407, 30.25808]);
    },
    upModal() {
      let zIndex = this.zIndex;
      let newZIndex = ++zIndex;
      this.left.zIndex = newZIndex;
      this.SET_ZINDEX();
    },
    showshowcladetail(firstindex, secondindex, thirdindex) {
      if (
        //如果点同一个班级或者第一次选择班级或者专业窗口已关闭，执行逻辑
        (this.firstindex === firstindex &&
          this.secondindex === secondindex &&
          this.thirdindex === thirdindex) ||
        (this.firstindex === "" &&
          this.secondindex === "" &&
          this.thirdindex === "") ||
        this.showclassdetail === false
      ) {
        this.SET_SHOWCLASSDETAIL(!this.showclassdetail);
      }
      this.firstindex = firstindex;
      this.secondindex = secondindex;
      this.thirdindex = thirdindex;
      this.SET_FIRSTINDEX(firstindex);
      this.SET_SECONDINDEX(secondindex);
      this.SET_THIREDINDEX(thirdindex);
    },
    close() {
      this.SET_SHOWCLASS(false);
    }
  }
};
</script>

<style lang="stylus" scoped>
.tac {
  overflow: hidden;
  padding-top: 10px;
}

.icon {
  position: relative;
  top: 12px;
  left: 86%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 20;

  .iconfont {
    font-size: 24px;
  }
}
</style>
