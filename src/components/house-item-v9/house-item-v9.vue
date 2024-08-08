<script setup lang='ts'>
import { computed, ref } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const value = ref(Number(props.itemData.commentScore))
// const commentScore = computed(() => {
//   return Number(props.itemData.commentScore)
// })

</script>
<template>
  <div class="house-item-v9">
    <div class="house-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="summaryText">{{ itemData?.summaryText }}</div>
        <div class="houseName">{{ itemData?.houseName }}</div>
        <div class="rate-price">
          <van-rate v-model="value"  
          readonly allow-half color="#fff" size="16"/>
          <div class="price">￥{{ itemData?.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='less'>
.house-item-v9 {
  width: 50%;
  .house-inner {
    margin: 5px;
    position: relative;
    .cover {
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 8px;
      margin: 0 10px;
      color: #fff;
      font-size: 12px;
      .summaryText {

      }
      .houseName {
        font-size: 14px;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: 5px;
      }
      .rate-price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .price {
          font-size: 14px;

        }
      }
    }
  }
}
</style>