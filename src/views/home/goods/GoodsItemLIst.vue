<template>
  <div class="goods-item-list" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad"/>
    <div class="list_bottom">
      <p>{{ goodsItem.title }}</p>
      <span>{{ goodsItem.price }}</span>
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItemList",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
      // console.log(this.$bus);
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
};
</script>
<style>
.goods-item-list{
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 40%;
}
 
.goods-item-list img{
width: 100%;

}
.list_bottom {
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list_bottom p {
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>