<template>
  <div @mousedown="upModal">
    <module :setModel="roundModel">
      <div class="block">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item,index) in picts" :key="index">
            <viewer :images="picts">
              <img class="pic" :src="item.path" alt />
            </viewer>
          </el-carousel-item>
        </el-carousel>
      </div>
    </module>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import module from "../base/module";

export default {
  name: "wheel",
  data() {
    return {
      picts: [
        { path: require("../assets/1.jpg") },
        { path: require("../assets/2.jpg") },
        { path: require("../assets/3.jpg") },
        { path: require("../assets/4.jpg") }
      ],
      roundModel: {
        position: "absolute",
        top: "30%",
        left: "33%",
        zIndex: "100",
        opacity: "0.7"
      }
    };
  },
  computed: { ...mapGetters(["rotation", "zIndex"]) },
  methods: {
    ...mapMutations(["SET_ROTATION", "SET_ZINDEX"]),
    close() {
      this.SET_ROTATION(false);
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
.block {
  width: 500px;

  .pic {
    width: 100%;
    height: 100%;
  }
}
</style>
