<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';
const props = defineProps({
  detailFacilitys: {
    type: Object
  }
})

</script>
<template>
  <detailSection title="房屋设施" text="全部设施">
    <div class="facility">
      <template v-for="(item, index) in detailFacilitys.houseFacilitys" :key="index">
        <div class="item" v-if="detailFacilitys.facilitySort.includes(item.groupId)">
          <div class="left">
            <div class="icon">
              <img :src="item.icon" alt="">
            </div>
            <div class="text">{{ item.groupName }}</div>
          </div>
          <div class="right">
            <template v-for="(value, index) in item.facilitys.slice(0, 4)" :key="index">
              <div class="name" >
                <div class="t">{{ value.name }}</div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </detailSection>
</template>


<style scoped lang='less'>
.facility {
  background-color: rgba(0, 0, 0, .05);
  margin-top: 5px;
  padding: 15px;
  .item {
    display: flex;

    padding: 10px;
    .left {
      width: 100px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      .name {
        width: 100px;
        
      }
    }
  }

}
</style>