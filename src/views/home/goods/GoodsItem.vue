<template>
  <div class="goods-item">
    <goods-item-list class="itemDiv" v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsItemList from "./GoodsItemLIst";
export default {
  name: "GoodsItem",
  components: {
    GoodsItemList,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.goods-item {
    padding-bottom: 50px;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.itemDiv {
  width: 45%;
}
</style>


