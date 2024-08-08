<script setup>
import { computed } from 'vue';
const props = defineProps({
  swipeData: {
    type: Array,
    default:() => []
  }
})

// // 给图片分组，将某一组的图片放到一个数组
const swipeGroup = {}
const swipeLength = props.swipeData.length
let Arrays = []

for(let i =0; i < swipeLength; i++) {
  if(props.swipeData[i]?.enumPictureCategory == props.swipeData[i+1]?.enumPictureCategory) {
    Arrays.push(props.swipeData[i])
  }else {
    Arrays.push(props.swipeData[i])
    swipeGroup[props.swipeData[i].enumPictureCategory] = Arrays
    Arrays = []
  }
}

// 拿到某一组图片的索引
const getIndex = (item) => {
  const Arry = swipeGroup[item?.enumPictureCategory]
  return Arry?.findIndex(data => data === item ) + 1
}

// 将图片文字通过正则表达式分离，只保留文字
const getText = (text) => {
  let regex = /[【】：]/g; 
  text = text.replace(regex, '');
  return text
}
</script>
<template>
  <div class="swipe">
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(item, index) in swipeData" :key="index">
        <img :src="item.url" alt="">
      </van-swipe-item>
      <template #indicator="{active}" >
        <div class="indicator" :class="{active}">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <span class="swipeData"
            :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{getText(value[0].title)}}</span>
              <span class="index"
                v-if="swipeData[active]?.enumPictureCategory == key" 
                
              >{{getIndex(swipeData[active])}}/{{ value.length }}</span>
            </span>
          </template>
        </div>
      </template> 
    </van-swipe>
  </div>
</template>


<style scoped lang='less'>
.swipe {
  // position: relative;
  img {
    width: 100%;
  }
  .indicator {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    .swipeData {
      margin: 0 5px;
      &.active {
        padding: 0 3px;
        background-color: #fff;
        color: #333;
        border-radius: 5px;
      }
    }
  }
}
</style>