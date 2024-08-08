<script setup lang='ts'>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
homeStore.fetchCategoriesData()
const {Categories} = storeToRefs(homeStore)
// console.log(Categories)
</script>
<template>
  <div class="categories">
    <template v-for="(value, index, key) in Categories" :key="index">
      <div class="item">
        <img :src="value.pictureUrl" alt="">
        <div class="text">{{ value.title }}</div>
      </div>
    </template>
    
  </div>
</template>


<style scoped lang='less'>
.categories {
  display: flex;
  margin: 15px 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  .item {
    width: 60px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    img {
      width: 40px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>