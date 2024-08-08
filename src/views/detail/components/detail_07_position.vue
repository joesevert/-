<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';
import { onMounted, ref } from 'vue'
const props = defineProps({
  detailPosition: {
    type: Object
  }
})

const mapRef = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);
  const point = new BMapGL.Point(props.detailPosition.longitude, props.detailPosition.latitude);
  map.centerAndZoom(point, 15); 
  const marker = new BMapGL.Marker(point)
  map.addOverlay(marker)
})
// console.log(props.detailPosition)
</script>
<template>
  <detailSection title="位置周边" text="更多周边信息">
    <div class="position">
      <div class="baidu" ref="mapRef">百度地图</div>
    </div>
  </detailSection>
  
</template>


<style scoped lang='less'>
.baidu {
  height: 250px;
}
</style>