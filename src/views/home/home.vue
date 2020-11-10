<template>
  <div class="home">
    <nav-bar class="nav_class">
      <div slot="center">购物街</div>
    </nav-bar>
    <recommend-view :recommends="recommends" />
    <feature />
    <tabControl :titles="['流行', '新款', '精品']" />
  </div>
</template>

 
<script>
import navBar from "components/common/navbar/navBar";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    navBar,
    RecommendView,
    Feature,
    TabControl,
  },
  data() {
    return {
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  methods: {
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
      });
    },
  },
};
</script>


<style scoped>
.nav_class {
  background-color: #ff8e96;
  position: absolute;
  top: 0;
  left: 0;
}
</style>