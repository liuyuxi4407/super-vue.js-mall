<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" @click="itemClick(index)">
      <span :class="{ active: currentIndex === index }">
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
      itemClick(index){
          this.currentIndex = index
      }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tab-control {
  width: 100%;
  height: 50px;
  display: flex;
}
.tab-control div {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.tab-control span {
    padding:5px 10px
}
.active {
  color: #ff8e96;
  border-bottom: 3px solid #ff8e96;
}
</style>