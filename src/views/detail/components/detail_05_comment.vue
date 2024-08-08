<script setup lang='ts'>
import detailSection from '@/components/detail-section/detailSection.vue';
const props = defineProps({
  detailComment: {
    type: Object
  }
})
// console.log(props.detailComment)
</script>
<template>
  <detailSection title="热门评论" text="全部评论">
    <div class="Comment">
      <div class="score">
        <div class="overall">{{ detailComment.overall }}</div>
        <div class="score_info">
          <div class="scoreTitle">{{ detailComment.scoreTitle }}</div>
          <div class="totalComment">{{ detailComment.totalCountStr }}条评论</div>
          <van-rate v-model="detailComment.totalCount" :size="12" color="#ff9854"/>
        </div>
        <div class="subScore">
          <template v-for="(item, index) in detailComment.subScores">
            <div class="text">{{ item }}</div>
          </template>
        </div>
      </div>
      <div class="commentTagVo">
        <template v-for="(item, index) in detailComment.commentTagVo">
          <div class="comment" :style="{color: item.color, backgroundColor: item.backgroundColor}">{{ item.text }}</div>
        </template>
      </div>
      <div class="user_comment">
        <div class="user">
          <div class="userAvatars">
            <img :src="detailComment.comment.userAvatars" alt="">
          </div>
          <div class="info">
            <div class="userName">{{ detailComment.comment.userName }}</div>
            <div class="Date">{{ detailComment.comment.checkInDate }}</div>
          </div>
        </div>
        <div class="comment">
          <span class="commentDetail">{{ detailComment.comment.commentDetail }}</span>
        </div>
      </div>
    </div>
  </detailSection>
  
</template>


<style scoped lang='less'>
.Comment {
  padding: 10px 0;
  .score {
    display: flex;
    font-size: 13px;
    .overall {
      font-size: 50px;
      font-weight: 600;
      margin-right: 5px;    
    }
    .score_info {
      width: 300px;
      .totalComment {
        color: #666;
      }
    }
    .subScore {
      display: flex;
      flex-wrap: wrap;
      .text {
        margin-right: 3px;
      }
    }
  }
  .commentTagVo {
    display: flex;
    flex-wrap: wrap;
    .comment {
      margin: 8px;
      border-radius: 3px;
    }
  }
  .user_comment {
    background-color: rgba(0, 0, 0, .08);
    border-radius: 8px;
    padding: 8px 10px 15px;
    .user {
      display: flex;
      align-items: center;
      .userAvatars {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 5px;
        img {
          width: 100%;
        }
      }
      .info {
        .Date {
          color: #666;
        }
      }
    }
    .comment {
      color: #333;
      margin-top: 10px;
    }
  }
}
</style>