<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCity} = storeToRefs(cityStore)
// console.log(allCity)

const router = useRouter()
const value = ref('');
const active = ref(0)
// console.log(active)
const onSearch = (val) => searchVal(val);
const onCancel = () => routerback();
const routerback = () => {
  router.back()
}
const searchVal = (val) => {

}
// console.log(allCity)

// const indexList = computed((allCity) => {
//   let list = allCity.active.value.map((item) => item.group)
//   list.unshift('#')
//   return list
// })

// const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>
<template>
  <div class="city">
    <!-- 搜索栏和tab栏 -->
    <div class="top">
      <van-search
        v-model="value"
        shape="round"
        background="#ff9854"
        placeholder="城市/区域/位置"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    <!-- tab选择 -->
      <van-tabs v-model:active="active" sticky >
        <template v-for="(value, key, index) in allCity" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
      
    <!-- 城市数据 -->
    <tempalte v-for="(cityCategory, key, index) in allCity" :key='index'>
      <div class="content" v-show="active == key">      
        <van-index-bar :index-list="indexList">
          <van-index-anchor index="热门">
            <div class="text">热门</div>
            <div class="hotlist">
              <template v-for="(hotCity, _key, _index) in cityCategory.hotCities" :key="_index">
                <div class="city" @click="cityClick(hotCity)">
                  {{ hotCity.cityName }}</div>
              </template>
            </div>        
          </van-index-anchor>
          <template v-for="(citygroup, key_, index_) in cityCategory.cities" :key="index_">
            <van-index-anchor :index="citygroup.group" />
            <template v-for="(city, key, index) in citygroup.cities">
              <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
            </template>
          </template>
        </van-index-bar>
      </div>
    </tempalte>  
  </div>  
</template>


<style scoped lang='less'>

:deep(.van-tabs_line) {
  background-color: #ff9854;
}
.hotlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .city {
    line-height: 28px;
    text-align: center;
    width: 74px;
    height: 28px;
    margin: 6px 0;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    font-weight: 500;
    background-color: #fff4ec;
  }
}
</style>