<template>
  <div class="home">
    <nav-bar class="nav_class">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <recommend-view :recommends="recommends" />
      <feature />
      <tabControl :titles="['流行', '新款', '精品']" @tabClick="tabClick" />
      <goods-item class="goodsItem" :goods="showGoods" />
    </scroll>

    <com-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

 
<script>
import navBar from "components/common/navbar/navBar";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsItem from "./goods/GoodsItem";
import Scroll from "components/common/scroll/Scroll";
import ComTop from "components/content/ComTop/ComTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    navBar,
    RecommendView,
    Feature,
    TabControl,
    GoodsItem,
    Scroll,
    ComTop,
  },
  data() {
    return {
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    //监听item中图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll.refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关方法
     * */
    tabClick(index) {
      // console.log(index);
      this.currentType = Object.keys(this.goods)[index];
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      //this.$refs.scroll.scroll.scrollTo(0,0)
      // console.log(this.$refs.scroll);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 500;
    },
    loadMore(){
     this.getHomeGoods(this.currentType) 
    },
    
    /**
     * 网络请求方法
     */

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>


<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.nav_class {
  background-color: #ff8e96;
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
}
.goodsItem {
  width: 100vw;
}
</style>