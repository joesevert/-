<script setup lang='ts'>


</script>
<template>
  <div class="searchBar">
    <div class="left">
      <div class="start item">
        <div class="name">住</div>
        <div class="time">08.01</div>
      </div>
      <div class="end item">
        <div class="name">离</div>
        <div class="time">08.16</div>
      </div>
    </div>
    <div class="content">
      <input type="text" placeholder="关键字/位置/民宿">
    </div>
    <div class="searchIcon">
      <i class="icon"></i>
    </div>
  </div>
</template>


<style scoped lang='less'>
.searchBar {
  height: 45px;
  background-color: #f2f4f6;
  display: flex;
  flex-direction: row;
  color: #666;
  border-radius: 6px;
  padding: 0 10px;
  line-height: 45px;
  text-align: center;
  .left { 
    display: flex;
    flex-direction: column;
    font-size: 12px;   
    justify-content: center;
    align-items: center;;
    .item {
      line-height: normal;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;;
      .name {
        margin-right: 5px;
      }
      .time {
        color: #000;
      }
    }
    .start {

    }
    .end {

    }
  }
  .content {
    margin-left: 15px;
    flex: 1;
    border-left: 1px solid #fff;
    padding: 0 5px;
    input {
      background-color: #f2f4f6;
      color: #333;
      font-size: 14px;
    }
  }
  .searchIcon {
    width: 24px;
    height: 24px;
    margin: 8px 5px 3px 0;
    .icon {
      display: inline-block;
      background: url('@/assets/img/home/home-sprite.png');
      width: 100%;
      height: 100%;
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>