<script setup lang='ts'>
import { computed, ref } from 'vue';
import useCityStore from '@/stores/modules/city';
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_date';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter()
const cityStore = useCityStore()
const homeStore = useHomeStore()
homeStore.fetchHotSuggestCity()
const {hotSuggestCity} = storeToRefs(homeStore)
const {currentCity} = storeToRefs(cityStore)
const location = () => {
  router.push('/city')
}
const mainStore = useMainStore()
const {startDay, endDay} = storeToRefs(mainStore)
const startDayStr = computed(() => formatMonthDay(startDay.value))
const endDayStr = computed(() => formatMonthDay(endDay.value))
// 入住时间范围
const TimePeriod = ref('共2天')
const show = ref(false)
const formatDay = (date) => {
  return date/(1000*60*60*24)
}
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (values) => {
  const [start, end] = values;
  mainStore.startDay = start
  mainStore.endDay = end
  TimePeriod.value = `共${formatDay(end) - formatDay(start)}天`
  show.value = false
};
</script>

<template>
  <!-- 位置信息 -->
  <div class="location item">
    <div class="city" @click="location">{{currentCity.cityName}}</div>
    <div class="position">
      <div class="text">我的位置</div>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
  <!-- 入住日期范围选择 -->
  <div class="date-range item" @click="show = true">
    <div class="start d-r">
      <div class="tip">入住</div>
      <div class="date">{{ startDayStr }}</div>
    </div>
    <div class="stay">
      <span>{{TimePeriod}}</span>
    </div>
    <div class="end d-r">
      <div class="tip">离店</div>
      <div class="date">{{ endDayStr }}</div>
    </div>
  </div>
  <van-calendar v-model:show="show"  type="range" @confirm="onConfirm" color="#ff9854"/>
  <!-- 价格 人数 关键字 -->
  <div class="item price_counter">
    <div class="left">价格不限</div>
    <div class="right">人数不限</div>
  </div>
  <div class="item key_word">关键字/位置/民宿名</div>
  <!-- 热门城市推荐 -->
  <div class="hotSuggestCity">
    <template v-for="(city, key, index) in hotSuggestCity" :key="index">
      <div class="city">{{ city.tagText.text }}</div>
    </template>
  </div>
  <!-- 搜索按钮 -->
  <div class="search_btn">
    <button class="btn">开始搜索</button>
  </div>
</template>


<style scoped lang='less'>
.item {
  display: flex;
  justify-content: space-between;
}
.location {
  margin: 10px 15px 0 15px;
  .city {
    font-size: 16px;  
  }
  .position {
      width: 75px;
      display: flex;
      .text {
        position: relative;
        top: 1px;
        font-size: 12px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 6px;
      }
    }
}
.date-range {
  width: 320px;
  height: 40px;
  margin: 10px auto 0;
  font-size: 12px;
  // border-bottom: 1px solid #f11;
  .d-r {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .tip {
      color: #606060;
    }
  }
  .stay {
    color: #606060;
    align-items: center;
    display: flex;
  }
}
.price_counter,.key_word {
  width: 320px;
  height: 40px;
  margin: 10px auto 0;
  line-height: 40px;
  color: #606060;
}
.hotSuggestCity {
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  width: 320px;
  .city {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .06);
    margin: 0px 10px 10px 0px;
    padding: 5px;
    text-align: center;
    

  }
}
.search_btn {
  width: 342px;
  height: 38px;
  margin: 0 auto;
  .btn {
    background-color: var(--primary-color);
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 16px;
  }
}
</style>