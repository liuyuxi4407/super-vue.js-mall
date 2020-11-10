<template>
  <div id="tab-bar-item" @click="ItemClink">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- <div :class="{active: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      path: String,
      default: 'red'
    }
   },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    ItemClink() {
       this.$router.replace(this.path)
    }
  }
};
</script>

<style>
#tab-bar-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  /* 取消图片下默认的3px */
}
</style>