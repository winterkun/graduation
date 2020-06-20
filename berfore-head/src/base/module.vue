<template>
  <div v-drag draggable="false" :style="setModel" class="module">
    <dv-border-box-7 style="backgroundColor:transparent;padding: 10px 10px 10px 10px;">
      <slot></slot>
    </dv-border-box-7>
  </div>
</template>
<script>
export default {
  name: "module",
  props: {
    setModel: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  directives: {
    drag(el) {
      let oDiv = el; //当前元素
      oDiv.onmousedown = function(e) {
        //鼠标按下，计算当前元素距离可视区的距离
        let disX = e.clientX - oDiv.offsetLeft - oDiv.clientLeft;
        let disY = e.clientY - oDiv.offsetTop - oDiv.clientTop;
        oDiv.style["cursor"] = "pointer";
        document.onmousemove = function(e) {
          oDiv.style["cursor"] = "pointer";
          /*           oDiv.style.cursor = "move"; */
          //通过事件委托，计算移动的距离
          let l = e.clientX - disX;
          let t = e.clientY - disY;
          //移动当前元素
          oDiv.style.left = l + "px";
          oDiv.style.top = t + "px";
        };
        document.onmouseup = function(e) {
          oDiv.style["cursor"] = "default";
          /*           oDiv.style.cursor = "default"; */
          document.onmousemove = null;
          document.onmouseup = null;
        };
        //return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
        return false;
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
@keyframes bounceIn {
  0% {
    transform: scale(0.7);
  }

  60% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.header {
  background-color: transparent;
}

.module {
  display: flex;
  justify-content: center;
  z-index: 100;
  animation: bounceIn 0.5s;
}
</style>
