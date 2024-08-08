<script setup lang='ts'>
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter()
const homeStore = useHomeStore()
homeStore.fetchHouseListData()
const {houselist} = storeToRefs(homeStore)
const itemCLick = (item) => {
  router.push('/detail/' + item.houseId)
}
</script>
<template>
  <div class="homelist">
    <h2 class="hot-select">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="index">
        <houseItemV3 v-if= "item.discoveryContentType == 3"
        :itemData="item?.data"
        @click="itemCLick(item.data)"></houseItemV3>
        <houseItemV9 v-if= "item.discoveryContentType == 9" 
        :itemData="item?.data"
        @click="itemCLick(item.data)"
        ></houseItemV9>
      </template>
    </div>
  </div>
</template>


<style scoped lang='less'>
.homelist {
  padding: 10px 8px 45px 8px;
  
  .hot-select {
  margin-bottom: 10px;
  margin-left: 8px;
  }

  .list {
  display: flex;
  flex-wrap: wrap;
  }
}


</style>