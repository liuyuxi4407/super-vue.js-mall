<template>
  <div id="APP">
    <keep-alive>
      <router-view />
    </keep-alive>

    <tab-bar>
      <tab-bar-item path="/home" actionColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home-o.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" actionColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category-o.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart" actionColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/cart-o.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" actionColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/my.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/my-o.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabber/TabBar";
import TabBarItem from "components/common/tabber/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>

