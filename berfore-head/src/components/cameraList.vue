<template>
  <div @mousedown="upModal">
    <module :setModel="cameraModel">
      <div class="icon">
        <i class="iconfont iconguanbi" style="color:white" @click="close"></i>
      </div>
      <vue-scroll>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="东湖校区" name="1">
            <div
              v-for="(item,index) in donghuCameraList"
              :index="index"
              :key="index"
              style="width:310px"
              @click="move(donghuCameraList[index])"
            >
              <dv-border-box-8 class="item" style="width:310px">
                <p>{{item.id}}</p>
                <p>{{item.location}}</p>
                <p>{{item.status}}</p>
              </dv-border-box-8>
            </div>
          </el-collapse-item>
          <el-collapse-item title="衣锦校区" name="2">
            <div
              style="width:310px"
              v-for="(item,index) in yijingCameraList"
              :index="index"
              :key="index"
              @click="move(yijingCameraList[index])"
            >
              <dv-border-box-8 class="item" style="width:310px">
                <p>{{item.id}}</p>
                <p>{{item.location}}</p>
                <p>{{item.status}}</p>
              </dv-border-box-8>
            </div>
          </el-collapse-item>
        </el-collapse>
      </vue-scroll>
    </module>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import module from "../base/module";
export default {
  name: "cameraList",
  data() {
    return {
      activeNames: ["1"],
      cameraModel: {
        padding: "20px",
        position: "absolute",
        height: "68%",
        width: "20%",
        top: "9%",
        right: "18%",
        zIndex: 20,
        overflow: "hidden",
        borderRadius: "20px",
        opacity: 0.7
      },
      ops: {
        scrollPanel: { scrollingX: false }
      },
      donghuCameraList: [
        //东湖摄像头数据
        {
          id: "摄像头ID:1",
          location: "摄像头位置:C9 菜鸟驿站门口",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.730965, 30.238896]
        },
        {
          id: "摄像头ID:2",
          location: "摄像头位置:薄利吉祥豹电动车",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.7217029333, 30.2609530387]
        },
        {
          id: "摄像头ID:3",
          location: "摄像头位置:星火书店",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.7259569168, 30.2603831218]
        },
        {
          id: "摄像头ID:4",
          location: "摄像头位置:星火书店",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.7257584333, 30.2600773113]
        }
      ],
      yijingCameraList: [
        //衣锦摄像头数据
        {
          id: "摄像头ID:10",
          location: "摄像头位置:建联食堂门口",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.728669, 30.236929]
        },
        {
          id: "摄像头ID:11",
          location: "摄像头位置:临安图书馆",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.7272229195, 30.2342467897]
        },
        {
          id: "摄像头ID:12",
          location: "摄像头位置:念慈楼",
          status: "摄像头状态:良好",
          longtitude_attitude: [119.7288483381, 30.2359291783]
        }
      ]
    };
  },
  components: {
    module
  },
  computed: {
    ...mapGetters(["zIndex", "showCameraList", "architectureMarker"])
  },
  methods: {
    ...mapMutations(["SET_ARCHITECTURE", "SET_ZINDEX", "SET_SHOWCAMERALIST"]),

    upModal() {
      let zIndex = this.zIndex;
      let newZIndex = ++zIndex;
      this.cameraModel.zIndex = newZIndex;
      this.SET_ZINDEX();
    },
    close() {
      this.SET_SHOWCAMERALIST(false);
    },
    move(data) {
      this.SET_ARCHITECTURE(data.longtitude_attitude);
    }
  }
};
</script>

<style lang="stylus" scoped>
.out {
  background-color: transparent;
}

.el-collapse-item__wrap {
  background-color: transparent;
}

.item {
  widhth: 90%;
  cursor: pointer;
  background-color: #04316F;
  margin-bottom: 5px;
  border-radius: 15px;
  padding: 5px 5px 5px 40px;
}

.icon {
  position: relative;
  font-size: 24px;
  left: 90%;
  top: -10px;
  cursor: pointer;
  z-index: 20;

  .iconfont {
    font-size: 24px;
  }
}
</style>
