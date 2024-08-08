<script setup >
import detailSwipe from './components/detail_01_swipe.vue';
import detailInfo from './components/detail_02_info.vue'
import detailFacilitys from './components/detail_03_facilitys.vue'
import detailLandlord from './components/detail_04_landlord.vue'
import detailComment from './components/detail_05_comment.vue'
import detailRule from './components/detail_06_rule.vue'
import detailPosition from './components/detail_07_position.vue'
import detailIntro from './components/detail_08_intro.vue'
import { getDetailInfos } from '@/service/modules/detail';
import useScroll from '@/hooks/useScroll';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';
const route = useRoute()
const router = useRouter()
const houseId = route.params.id
const DetailInfos = ref({})

getDetailInfos(houseId).then((res) => {
  console.log(res.data)
  DetailInfos.value = res.data
})

const mainPart = computed(() => DetailInfos.value.mainPart)

const onClickLeft = () => {
  router.back()
}

const active = ref(0);

const sectionEl = []
const sectionRef = (value) => {
  if(!value) return 
  sectionEl.push(value.$el)
}

const onClickTab = (item) => {
  // console.log(sectionEl)
  window.scrollTo({
    top: sectionEl[item.name].offsetTop - 44,
    behavior: "smooth"
  })
}
const detailRef = ref()
const {scrollTop} = useScroll()
const showTabControl = computed(() => {
  // console.log(scrollTop.value)
  return scrollTop.value >= 300
})
// console.log(sectionRef)
</script>
<template>
  <div class="detail" :ref="detailRef">   
    <van-tabs v-model:active="active" @click-tab="onClickTab"
    v-if="showTabControl" class="van_tabs">
      <van-tab title="房屋设施"></van-tab>
      <van-tab title="房东介绍"></van-tab>
      <van-tab title="热门评论"></van-tab>
      <van-tab title="预定须知"></van-tab>
      <van-tab title="位置周边"></van-tab>
    </van-tabs>
    <van-nav-bar title="标题" left-text="返回" left-arrow
    @click-left="onClickLeft" />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipeData="mainPart.topModule?.housePicture.housePics">
      </detail-swipe>
      <detail-info :detailInfos="mainPart.topModule"></detail-info>
      <detail-facilitys :detailFacilitys="mainPart.dynamicModule.facilityModule.houseFacility" :ref="sectionRef"></detail-facilitys>
      <detail-landlord :detailLandlord="mainPart.dynamicModule.landlordModule
      " :ref="sectionRef"></detail-landlord>
      <detail-comment :detailComment="mainPart.dynamicModule.commentModule" :ref="sectionRef"></detail-comment>
      <detail-rule :detailRule="mainPart.dynamicModule.rulesModule" :ref="sectionRef"></detail-rule>
      <detail-position :detailPosition="mainPart.dynamicModule.positionModule"
      :ref="sectionRef">
      </detail-position>
      <detail-intro :detailIntro="mainPart.introductionModule"></detail-intro>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">旅途之家, 永无止境!</div>
    </div>
  </div>
</template>


<style scoped >
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    
  }
  .footer {
    text-align: center;
    margin: 20px auto;
      img {
        width: 120px;
      }
      .text {
        color: #666;
        font-size: 12px;
        margin-top: 10px;
      }
  }
  .van_tabs {
    position: fixed;
    z-index: 2;
    width: 100%;
  }
</style>