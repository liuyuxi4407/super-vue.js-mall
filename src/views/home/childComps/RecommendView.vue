<template>
    <div class="recommend">
      <div class="recommend_item" v-for="item in recommends">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend{
        width:100vw;
        display: flex;
        text-align: center;
        font-size: 12px;
        border-bottom: 10px solid #eee; 
    }
    .recommend_item{
        flex:1
    }
    .recommend_item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>