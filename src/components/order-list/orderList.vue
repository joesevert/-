<script setup lang='ts'>
import { formatMonthDay, formatWeekDay } from '@/utils/format_date';
defineProps({
  orderlist: {
    type: Object
  },
})
</script>
<template>
  <div class="order_list">
    <template v-for="(item, index) in orderlist?.data?.orders">
      <div class="order">
        <div class="header">
          <div class="name">{{ item.unitName }}</div>
          <div class="status">{{ item.orderStatusDesc }}</div>
        </div>
        <div class="main">
          <div class="img">
            <img :src="item.unitPicture" alt="">
          </div>
          <div class="pay_info">
            <div class="left">
              <div class="start item">
                <div class="monthDay">{{ formatMonthDay(item.checkInDate) }}</div>
                <div class="weekDay_time">
                  <span class="weekDay">{{ formatWeekDay(item.checkInDate) }}</span>
                  <span class="time">{{ item.checkInLatestTime }}</span>                       
                </div>
              </div>
              <div class="arrow">
                <img src="@/assets/img/order/icon_right_orderlist.png" alt="">
              </div>
              <div class="end item">
                <div class="monthDay">{{ formatMonthDay(item.checkOutDate) }}</div>
                <div class="weekDay_time">
                  <span class="weekDay">{{ formatWeekDay(item.checkOutDate) }}</span>
                  <span class="time">{{ item.checkOutLatestTime }}</span>                       
                </div>
              </div>
            </div>
            <div class="right">
              <div class="text">支付总价</div>
              <div class="totalPrice">￥{{ item.prepayAmount }}</div>
            </div>
          </div>
        </div>
        <div class="payment">
          <div class="left">
            <div class="icon">
              <img src="@/assets/img/order/icon-time.png" alt="">                   
            </div>
            <div class="text">
              <div class="time">{{ item.sourceType }}分</div>
              <div class="else">后订单取消</div>
            </div>
          </div>
          <div class="right">
            <div class="contact itex">联系房东</div>
            <div class="payments itex">去支付</div>
          </div>
        </div>
      </div>
    </template>       
  </div>
</template>


<style scoped lang='less'>
.order_list {
  .order {
    border-top: 10px solid rgba(0, 0, 0, .04);
    padding: 20px 20px 10px;
    .header {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      .name {
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;     
        white-space: nowrap;
      }
      .status {
        font-size: 18px;
        color: #ff9854;
      }
    }
    .main {
      position: relative;
      color: #fff; 
      .img {          
        img {
          border-radius: 8px;
          width: 100%;
        }
      }
      .pay_info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 3px;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, .6);                 
        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #fff;
          padding: 0 10px;
          .arrow {
            margin: 0 10px;
            img {
              width: 16px;
            }
            
          }
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .monthDay {
            font-size: 16px;
            margin-bottom: 3px;
          }
          .weekDay_time {
            font-size: 12px;
          }
        }
        .right {
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .text {
            font-size: 12px;
            color: #fff;
          }
          .totalPrice {
            font-size: 18px;
            color: #ff9854;
          }
        }
      }
    }
    .payment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 8px 0;
      .left {
        display: flex;
        font-size: 12px;
        .icon {
          margin-right: 3px;
          img {
            width: 10px;
          }
        }
        .text {
          display: flex;
          .time {
            color: #ff9854;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        font-size: 16px;
        .itex {
          width: 80px;
          height: 36px;
          border-radius: 6px;
          line-height: 40px;
          text-align: center;           
        }
        .contact {            
          border: 1px solid #ff9854;
          color: #666;
        }
        .payments {      
          background-color: #ff9854;
          color: #fff;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>