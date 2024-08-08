<script setup lang='ts'>
import NavBar from './components/NavBar.vue';
import location_search from './components/location_search.vue';
import categories from './components/categories.vue';
import homelist from './components/homelist.vue';
import searchBar from '@/components/searchBar/search-bar.vue';
import useScroll from '@/hooks/useScroll'
import useHomeStore from '@/stores/modules/home';
import { computed, watch } from 'vue';
const {scrollTop, isReachBottom} = useScroll()
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 400
})
const HomeStore = useHomeStore()

watch(isReachBottom, (newValue) => {
  if(newValue) {
    HomeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

</script>
<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="banner-img">
      <img src="@/assets/img/home/banner.webp" alt="" >
    </div>
    <location_search></location_search>
    <categories></categories>
    <div class="search-bar" v-if="isShowSearchBar">
      <searchBar></searchBar>
    </div>
    
    <homelist></homelist>
  </div>
</template>


<style scoped lang='less'>
.home {
  .banner-img {
    img {
      width: 100%;
      height: 160px;
    }
 }
 .search-bar {
  position: fixed;
  padding: 14px 16px 14px;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  background-color: #fff;
  z-index: 1;
 }
}
</style>