<script setup lang='ts'>
import useFavorStore from '@/stores/modules/favor';
import { storeToRefs } from 'pinia';
const favorStore = useFavorStore()
const {index} = storeToRefs(favorStore)
defineProps({
  favorlist: {
    type: Object
  },
  historylist: {
    type: Object
  }
})

</script>
<template>
  <div class="list_house">
    <template v-for="(item, index) in (index == 0 ? favorlist: historylist).items" :key="index">
      <div class="house">
        <div class="recomm_land_img">
          <div class="img">
            <img :src="item.defaultPicture" alt="">
          </div>
          <div class="logo">
            <img :src="item.logoUrl" alt="">
          </div>
          <div class="favor">

          </div>
          <div class="comment"></div>
          <div class="rec">
            <div class="score">{{ item.commentBrief.overall }}分</div>
            <div class="text">{{ item.commentBrief.scoreTitle }}</div>
          </div>
        </div>            
        <div class="info">
        <div class="add_summery">
          <div class="address">{{ item.address }}</div>
          <div class="summeries">
            <template v-for="(value, index) in item.unitSummeries" :key="index">
              <span>{{ value.text }}</span>
              <span v-if="index < item.unitSummeries.length - 1"> · </span>
            </template>
          </div>
        </div>
        <div class="title">{{ item.unitName }}</div>
        <div class="houseTags">
          <template v-for="(value, index) in item.houseTags">
            <span class="item" :style="{color:value.color,backgroundColor: value.background.color}">{{ value.text }}</span>
          </template>
        </div>
        <div class="price_badge">
          
          <div class="finalPrice">
            <div class="CNY">￥</div>
            <div class="price">{{ item.finalPrice }}</div>
          </div>
          <div class="productPrice">￥{{ item.productPrice }}</div>
          <div class="tipBadge" :style="{color:item.priceTipBadge?.color,backgroundColor:item.priceTipBadge?.gradient.startColor}">{{ item.priceTipBadge?.text}}</div>
        </div>
      </div>
    </div>
    </template>         
  </div>
</template>


<style scoped lang='less'>
.list_house {
    padding: 20px 20px 0px;
    .house {
      .recomm_land_img {
        position: relative;
        .img {
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .logo {
          position: absolute;
          right: 10px;
          top: 20px;
          img {
            width: 40px;
            border-radius: 50%;
          }
        }
        .rec {
          position: absolute;
          display: flex;
          align-items: center;
          bottom: 10px;
          left: 10px;
          padding: 2px 5px;
          border-radius: 15px;
          background-color: #fff;
          opacity: 0.9;
          .score {
            font-weight: 600;
          }
          .text {
            margin-left: 10px;
            font-size: 10px;
            color: #666;
          }
        }
      }
      .info {
        .add_summery {
          display: flex;
          font-size: 10px;
          align-items: center;
          margin: 3px 0 3px;
          .address {
            background-color: rgb(65, 73, 84);
            color: #fff;
            padding: 2px;
            border-radius: 2px;
            margin-right: 10px;
          }
          .summeries {
            color: #666;
          }
        }
        .title {
          font-size: 16px;
          margin: 10px 0;
        }
        .houseTags {
          .item {
            margin-right: 15px;
          }
        }
        .price_badge {
          display: flex;
          margin: 8px 0;
          text-align: center;
          .finalPrice {
            display: flex;
            margin-right: 10px;
            color: #ff9854;
            align-items: flex-end;
            .CNY {
              font-size: 12px;
              position: relative;
              bottom: 2px;
            }
            .price {
              font-size: 18px;
            }
            
          }
          .productPrice {
            display: flex;
            align-items: center;
            margin-right: 10px;
            font-size: 12px;
            text-decoration: line-through;
            color: #666;
          }
          .tipBadge {
            display: flex;
            align-items: center;
            font-size: 10px;
            border-radius: 10px;
            // padding: 0px 2px;
          }
        }
      }
    }
  }
</style>