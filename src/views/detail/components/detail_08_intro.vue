<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';
const props = defineProps({
  detailIntro: {
    type: Object
  }
})
</script>
<template>
  <detailSection>
    <div class="intro">
      <div class="title">{{ detailIntro.title }}</div>
      <span class="text">{{ detailIntro.introduction }}</span>
    </div>
  </detailSection>
  
</template>


<style scoped lang='less'>
.title {
  margin: 10px 0;
  font-weight: 600;
}
.text {
  font-size: 12px;
  color: #666;
}
</style>