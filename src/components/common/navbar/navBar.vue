<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar",
};
</script>



<style scopen>
.nav-bar {
  width: 100%;
  height: 44px;
  display: flex;
  z-index: 10;
}
.left {
  width: 60px;
}
.center {
  flex: 1;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.right {
  width: 60px;
}
</style>