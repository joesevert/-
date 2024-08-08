<script setup lang='ts'>
import NavBar from '@/components/nav-bar/navBar.vue';
import OrderList from '@/components/order-list/orderList.vue';
import { useOrderList } from '@/stores/modules/order';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const orderList = useOrderList()
orderList.fetchGetOrderList('all')
const {orderlist} = storeToRefs(orderList)
const active = ref(0)
watch(active, newActive => {
  if(newActive == 1) {
    orderList.fetchGetOrderList('recent')
  }else if(newActive == 2){
    orderList.fetchGetOrderList('pend')
  }
})
</script>
<template>
  <div class="Order">
    <NavBar>
      <div class="text">订单列表</div>
    </NavBar>
    <van-tabs v-model:active="active" color="#ff9854">
      <van-tab title="全部订单">
        <OrderList :orderlist="orderlist"></OrderList>
      </van-tab>
      <van-tab title="近期订单">
        <OrderList :orderlist="orderlist"></OrderList>
      </van-tab>
      <van-tab title="待支付">
        <OrderList :orderlist="orderlist"></OrderList>
      </van-tab>
    </van-tabs>
  </div>
</template>


<style scoped lang="less">
.Order {
  .text {
    color: #000;
  }
  
}
</style>