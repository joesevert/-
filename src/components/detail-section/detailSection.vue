<script setup >
defineProps({
  title:{
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})

</script>
<template>
  <div class="detailSection" >
    <h2 class="title" v-if="title">{{ title }}</h2>
    <div class="info">
      <slot></slot>
    </div>
    <div class="check" v-if="text">
      <div class="text">查看{{ text }}</div>
      <div class="arrow">></div>
    </div>
  </div>
</template>


<style scoped lang='less'>
.detailSection {
  border-top: 5px solid rgba(0, 0, 0, .05);
  padding: 10px 15px 40px 15px;
  position: relative;
  .title {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
  }
  .check {
    color: #ff9854;
    display: flex;
    position: absolute;
    right: 18px;
    margin: 15px 0;
    .arrow {
      margin-left: 5px;
    }
  }
}
</style>