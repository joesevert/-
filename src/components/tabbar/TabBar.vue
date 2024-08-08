<script setup lang='ts'>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import tabBarData from '@/assets/data/tabBarData';
import { getAssetURL } from '@/utils/load_assets';

const route = useRoute()
const currentIndex = ref(0)

watch(route, (newroute) => {
  const index = tabBarData.findIndex(item => item.path === newroute.path)
  if(index === -1) return 
  currentIndex.value = index

})
// console.log(getAssetURL(tabBarData[0].image_active))

// function getImageURL(image) {
//   const path = `../../assets/img/${image}`
//   console.log(import.meta.url)
//   console.log(new URL(path, import.meta.url).href)
//   return new URL(path, import.meta.url).href
// }
</script>
<template>
  <div class="tabBar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item :to="item.path">{{item.text}}
          <template #icon>
            <img v-if="currentIndex == index" :src="getAssetURL(item.image_active)">
            <img v-else :src="getAssetURL(item.image)">
          </template>
          
        </van-tabbar-item>
      </template>
      <!-- <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/message">消息</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>


<style scoped>

</style>