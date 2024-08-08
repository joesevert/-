<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';

const props = defineProps({
  detailLandlord: {
    type: Object
  }
})
// console.log(props.detailLandlord)
</script>
<template>
  <detailSection title="房东介绍" text="房东主页">
    <div class="landlord" >
      <img :src="detailLandlord.topScroll"></img>
      <div class="landlord_info">
        <div class="logo">
          <img :src="detailLandlord.hotelLogo" alt="">
        </div>
        <div class="hotel_N_T">
          <div class="hotelName">{{ detailLandlord.hotelName }}</div>
          <div class="hotelTag" >
            <template v-for="(item, index) in detailLandlord.hotelTags" :key="index">
              <div class="text" :style="{color:item.tagText.color}">{{ item.tagText.text }}</div>
              <div class="line" v-if="index < detailLandlord.hotelTags.length-1"
              :style="{color:item.tagText.color}">|</div>
            </template>         
          </div>
        </div>       
        <div class="contact">联系房东</div>
      </div>
      <div class="hotelSummary">
        <template v-for="(item, index) in detailLandlord.hotelSummary" :key="index">
          <div class="item">
            <div class="title _c">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip _c">{{ item.tip }}</div>
          </div>         
        </template>
      </div>
    </div>
  </detailSection>
  
</template>


<style scoped lang='less'>
.landlord {
  img {
    width: 100%;
  }
  .landlord_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
      width: 40px;
    }
    .hotel_N_T {
      display: flex;
      flex-direction: column;
      .hotelName {
        font-weight: 600;
      }
      .hotelTag {
        font-size: 12px;
        display: flex;
        .line {
          margin: 0 3px;
        }
      }
    }
    .contact {
      position: absolute;
      right: 15px;
      padding: 5px 8px;
      background-color: #ff9854;
      color: #fff;
      border-radius: 5px;
      font-size: 12px;
    }
  }
  .hotelSummary {
    padding: 50px 0 20px 0;
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      flex-direction: column;
      ._c {
        color: #333;
      }
      .introduction {
        font-weight: 600;
        font-size: 16px;
        margin: 5px 0;
      }
    }
  }
}
</style>