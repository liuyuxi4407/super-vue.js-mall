<template>
  <div class="detail-nav-bar">
     <div class="left">
         
     </div>
     <div class="content" >
         <span v-for="item in titles">{{item}}</span>
     </div>
  </div>
</template>
<style scoped>
    .detail-nav-bar{
        width: 100vw;
        height:49px;
        background-color: red;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
    }
    .detail-nav-bar .left{
        flex: 2
    }
    .detail-nav-bar .content{
        flex: 8;
        background: chartreuse;
    }

</style>
 
<script>

export default {
  name: "DetailNavBar",
  data() {
      return {
          iid: null,
          titles: ['商品', '参数', '评论', '推荐']
      }
  },
  created() {
      //保存iid
      this.iid = this.$route.params.iid
  }

}
</script>

