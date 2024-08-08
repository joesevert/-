<script setup lang='ts'>
import NavBar from '@/components/nav-bar/navBar.vue';
</script>
<template>
  <div class="message">
    <NavBar>
      <div class="title">消息中心</div>
    </NavBar>
    <div class="bgc">
      <img src="@/assets/img/message/icon_message.png" alt="">
    </div>
    <div class="text">暂无聊天消息</div>
  </div>
</template>


<style scoped lang="less">
.message { 
  text-align: center;
  .title {
    color: #000;
  }
  .bgc {
    margin-top: 200px;

    img {
      width: 60%;
    }
  }
}

</style>