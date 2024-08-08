<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';
const props = defineProps({
  detailRule: {
    type: Object
  }
})
// console.log(props.detailRule)
</script>
<template>
  <detailSection title="预定须知">
    <div class="Rule">
      <div class="orderRules">
        <template v-for="(item, index) in detailRule.orderRules" :key="index">
          <div class="item">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
          </div>
        </template>
      </div>
    </div>
  </detailSection>
  
</template>


<style scoped lang='less'>
.Rule {
  padding: 10px 0;
  font-size: 13px;
  .item {
    display: flex;
    margin-top: 13px;
    .title {
      width: 60px;
      margin-right: 10px;
      color: #666;
    }
  }
}
</style>