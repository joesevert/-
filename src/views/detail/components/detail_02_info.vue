<script setup lang='ts'>
const props = defineProps({
  detailInfos: {
    type: Object,
  }
})

// console.log(props.detailInfos)
</script>
<template>
  <div class="DetailInfo">
    <h2 class="houseName">{{ detailInfos.houseName }}</h2>
    <div class="houseTag">
      <template v-for="(item, index) in detailInfos.houseTags" :key="index">
        <span v-if="item.tagText"
          :style="{color: item.tagText.color, backgroundColor: item.tagText.background.color }"
          class="tag"
        >{{ item.tagText.text }}</span>
      </template>
      
    </div>
    <div class="comment">
      <div class="left">
        <div class="overall">{{ detailInfos.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ detailInfos.commentBrief.scoreTitle }}</div>
        <div class="commentBrief">{{ detailInfos.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="countComment">{{ detailInfos.commentBrief.totalCountStr }}条评论</div>
        <div class="arrow">></div>
      </div>
    </div>
    <div class="nearByPosition">
      <div class="address">{{ detailInfos.nearByPosition.address }}</div>
      <div class="right">
        <div class="nearMap">地图 周边</div>
        <div class="arrow">></div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='less'>
.DetailInfo {
  padding: 8px 10px;
  .houseName {
    margin-bottom: 8px;
  }
  .houseTag {
    margin-bottom: 15px;
    .tag {
      font-size: 13px;
      margin-right: 5px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, .08);
    margin-bottom: 10px;
    border-radius: 10px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      .overall {
        font-size: 18px;
        font-weight: 600;
        margin-right: 3px;
      }
      .scoreTitle {
        font-weight: 600;
        margin-right: 3px;
      }
    }
    .right {
      display: flex;
      color: #ff9854;
      .arrow {
        margin-left: 5px;
      }
    }
  }
  .nearByPosition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, .08);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 30px;
    .address {
      font-weight: 600;
    }
    .right {
      color: #ff9854;
      display: flex;
      .arrow {
        margin-left: 5px;
      }
    }
    
  }
}
</style>