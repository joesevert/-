<script setup lang='ts'>
import { computed, ref } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <div class="house-item-v3">
    <div class="house-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{itemData?.location}}</span>
        </div>
        <div class="houseName">{{ itemData?.houseName }}</div>
        <div class="summaryText">{{ itemData?.summaryText }}</div>
        <div class="price-tip">
          <div class="finalPrice">￥{{ itemData?.finalPrice }}</div>
          <div class="productPrice">￥{{ itemData?.productPrice}}</div>
          <div class="badge">{{ itemData?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='less'>
.house-item-v3 {
  width: 50%;
  .cover {
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    margin: 0 10px;
    .location {
      font-size: 12px;
      color: #666;
      img {
        width: 12px;
        height: 12px;
        margin-right: 3px;
      }
    }
    .houseName {
      margin-top: 8px;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .summaryText {
      margin-top: 8px;
      font-size: 12px;
      color: #666;
    }
    .price-tip {
      display: flex;
      flex-direction: 0;
      margin-top: 8px;
      .finalPrice {
        color: #ff9854;
      }
      .productPrice {
        color: #666;
        font-size: 12px;
        text-decoration: line-through;
        margin: 0 3px;
      }
      .badge {
        font-size: 13px;
        padding: 0 10px;
        border-radius: 8px;
        background-image: linear-gradient(270deg,#f66,#ff9f9f);
        color: #fff;
      }
    }
  }
}
</style>