<script setup lang='ts'>
import { useRouter } from 'vue-router';
const Router = useRouter()
const clickBack = () => {
  Router.push('/home')
}


</script>
<template>
  <div class="navBar">
    <div class="left">
      <i class="icon"></i>
      <div class="text" @click="clickBack">返回</div>
    </div>
    <div class="middle">
      <slot></slot>
    </div>
    <div class="right">
      <i class="icon"></i>
    </div>
  </div>
</template>


<style scoped lang='less'>
.navBar {
  height: 44px;
  color: #ff9854;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .icon {
      display: inline-block;
      background: url('@/assets/img/sprite.png') no-repeat ;
      width: 8px;
      height: 16px;
      background-position: -238px -83px;
      background-size: 250px 220px;
      transform: rotate(180deg);
    }
    .text {
      margin-left: 5px;
      font-weight: 600;
    }
  }
  .middle {
  
  }
  .right {
      margin-right: 20px;
    .icon {
      display: inline-block;
      background: url('@/assets/img/common/header-right.png') no-repeat;
      width: 20px;
      height: 15px;
      background-size: 20px 15px;
    }

  }
}
</style>