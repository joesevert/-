<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useFavorStore from '@/stores/modules/favor';
import { storeToRefs } from 'pinia';
import listHouse from '@/components/list-house/list-house.vue';
import NavBar from '@/components/nav-bar/navBar.vue';
const Router = useRouter()
const favorStore = useFavorStore()
favorStore.fetchFavorList()
favorStore.fetchHistoryList()
const {favorlist, historylist, index} = storeToRefs(favorStore)
const onClickLeft = () => {
  Router.back()
}
const active = ref(0)
const clickNav = (Inde) => {
  if(index == Inde) return
  else index.value = Inde
  // console.log(index.value)
}
console.log(index.value)
</script>
<template>
  <div class="favor">
    <NavBar>
      <div class="item_tw">
        <div class="favor item" @click="clickNav(0)" :class="index==0 ? 'active' : '' ">我的收藏</div>
        <div class="history item" @click="clickNav(1)" :class="index==1 ? 'active' : ''">浏览历史</div>
      </div>      
    </NavBar>   
    <div class="favorlist " v-if="index==0" >
      <van-tabs v-model:active="active">
        <van-tab title="房屋" >
          <list-house :favorlist="favorlist"></list-house>
        </van-tab>
        <van-tab title="房东">内容 2
        </van-tab>
      </van-tabs>
    </div>
    <div class="historylist" v-if="index==1" >
      <list-house :historylist="historylist"></list-house>
    </div>
  </div>
</template>


<style scoped lang='less'>
.favor {
  .item_tw {
    display: flex;
    border: 1px solid #ff9854;
    border-radius: 8px;
    overflow: hidden;
    .item {
      padding: 5px 15px;
    }
    .active {
      background-color: #ff9854;
      color: #fff;
      
    }
    
  }
}
  

</style>