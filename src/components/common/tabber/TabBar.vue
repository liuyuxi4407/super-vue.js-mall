<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  height: 49px;
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
  background: #f5f5f4;
}

</style>