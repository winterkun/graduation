 <template>
  <div  @mousedown="upModal">
    <module :setModel="classModel">
      <!-- <i class="el-icon-arrow-left" @click="back"></i> -->
      <div class="iconclose">
        <i class="iconfont iconguanbi" @click="close"></i>
      </div>
      <el-table
        :data="this.class[firstindex]?this.class[firstindex][secondindex]?this.class[firstindex][secondindex][thirdindex]?this.class[firstindex][secondindex][thirdindex]:this.blank:this.blank:this.blank"
        style="width: 100%;height:100%"
      >
        <el-table-column :index="0" prop="date" label="日期"></el-table-column>
        <el-table-column :index="1" prop="firstday" label="星期一"></el-table-column>
        <el-table-column :index="2" prop="secondday" label="星期二"></el-table-column>
        <el-table-column :index="3" prop="thirdday" label="星期三"></el-table-column>
        <el-table-column :index="4" prop="forthday" label="星期四"></el-table-column>
        <el-table-column :index="5" prop="fifthday" label="星期五"></el-table-column>
        <el-table-column :index="6" prop="sxithday" label="星期六"></el-table-column>
        <el-table-column :index="7" prop="seventhday" label="星期天"></el-table-column>
        <el-table-column :index="8" prop="seventhday" label="星期天"></el-table-column>
      </el-table>
    </module>
  </div>
</template>


<script >
import { mapGetters, mapMutations } from "vuex";
import module from "../base/module";
export default {
  name: "clalist",
  data() {
    return {
      classModel: {
        position: "absolute",
        width: "50%",
        padding: "3%",
        top: "10%",
        left: "40%",
        zIndex: 20,
        overflow: "hidden",
        opacity: 0.7
      },
      blank: [{ date: "缺少对应课表数据" }],
      class: [
        //第一层，学院,信工
        [
          //第二层，专业，计算机
          [
            //第三层 计算机班级细分课表

            //计算机1班课表
            [
              {
                date: "1",
                firstday: "食品科学与工程161",
                secondday: "科学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "2",
                firstday: "数学",
                secondday: "英语",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "3",
                firstday: "体育",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "4",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "5",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "6",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "7",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "8",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "9",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              }
            ],

            //计算机2班课表
            [
              {
                date: "1",
                firstday: "食品科学与工程162",
                secondday: "科学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "2",
                firstday: "数学",
                secondday: "英语",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "3",
                firstday: "体育",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "4",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "5",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "6",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "7",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "8",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "9",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              }
            ]
          ]
        ],
        //第一层，学院。园林
        [
          //第二层，专业，园艺
          [
            //第三层 园艺班级细分课表

            //园艺1班课表
            [
              {
                date: "1",
                firstday: "园艺161",
                secondday: "科学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "2",
                firstday: "数学",
                secondday: "英语",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "3",
                firstday: "体育",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "4",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "5",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "6",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "7",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "8",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "9",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              }
            ],

            //园艺2班课表
            [
              {
                date: "1",
                firstday: "园艺162",
                secondday: "科学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "2",
                firstday: "数学",
                secondday: "英语",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "3",
                firstday: "体育",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "4",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "5",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "6",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "7",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "8",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              },
              {
                date: "9",
                firstday: "数学",
                secondday: "数学",
                thirdday: "数学",
                forthday: "数学",
                fifthday: "数学",
                sxithday: "数学",
                seventhday: "数学"
              }
            ]
          ]
        ]
      ]
    };
  },
  computed: {
    ...mapGetters([
      "zIndex",
      "showclass",
      "firstindex",
      "secondindex",
      "thirdindex"
    ])
  },
  components: {
    module
  },
  mounted() {
    // console.log(this.class[5][5][5]?this.class[5][5][5]:this.blank);
  },
  methods: {
    ...mapMutations(["SET_SHOWCLASS", "SET_ZINDEX", "SET_SHOWCLASSDETAIL"]),
    upModal() {
      console.log(2);
      let zIndex = this.zIndex;
      let newZIndex = ++zIndex;
      this.classModel.zIndex = newZIndex;
      this.SET_ZINDEX();
    },
    back() {
      this.SET_SHOWCLASSDETAIL(false);
    },
    close() {
      this.SET_SHOWCLASSDETAIL(false);
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-icon-arrow-left {
  position: absolute;
  top: 20px;
  left: 6%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.iconclose {
  position: relative;
  left: 97%;
  top: -20px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 20;

  .iconfont {
    font-size: 24px;
  }
}
</style>
