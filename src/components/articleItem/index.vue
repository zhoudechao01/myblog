<template>
  <div class="artileItem">
    <div class="container">
      <div class="article-describe">
        <div v-if="articleInfo.article_img" class="article-img">
          <img :src="articleInfo.article_img" alt="">
        </div>
        <div v-else class="article-img">
          <img src="../../assets/article03.jpg" alt="">
        </div>
        <div class="title">
          <div class="text" style="font-size: 26px; margin-bottom: 10px;">
            <a style="filter: drop-shadow(0px 1px 5px #0005);letter-spacing: 3px;" @click="goDetail">{{articleInfo.article_title}}</a>
          </div>
          <div class="meta">
            <div class="meta-detail" style="margin-left: 10px">
              <i class="fa fa-bookmark-o"></i><span style="margin-left: 6px">{{articleInfo.article_category}}</span>
            </div>
            <div style="margin-left: 10px">|</div>
            <div class="meta-detail" style="margin-left: 10px">
              <i class="fa fa-clock-o"></i>
              <time style="margin-left: 6px" title="发布于 2022-10-25 0:56:20 | 编辑于 2022-10-27 22:13:59">{{articleInfo.updatedAt}}</time>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        {{articleInfo.article_desc}}
      </div>
      <div class="tag">
        <i class="fa fa-tags"></i>
        <span v-for="(item, i) in tagList" :key="i"><a href="#">{{item}}</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import { getTagNameByArticleId } from '../../api/api.js'
export default {
  name: 'PersonBlogArticleItem',
  props: {
    // 文章信息
    articleInfo: {
      type: Object,
    },
  },
  data() {
    return {
      tagList: []
    };
  },

  mounted() {
    getTagNameByArticleId(this.articleInfo.id).then(res =>{
      this.tagList = res.data.result
    })
  },

  methods: {
    goDetail(){
      this.$router.push({
        path: '/home/detail',
        query: {
          article_id: this.articleInfo.id
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.artileItem{
  padding-bottom: 10px;
  .container{
    width: 464px;
    padding-bottom: 30px;
    border-radius: 15px;
    background-color: #1f222e;
    overflow: hidden;
    .article-describe{
    position: relative;
      .article-img{
        img{
          width: 100%;
          min-height: 260px;
          max-height: 25vh;
          object-fit: cover;
          pointer-events: none;
          filter: brightness(.75) saturate(1.2) contrast(.85);
        }
      }
      .title{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 40px;
        padding-bottom: 30px;
        text-align: center;
        opacity: 0.8;
        .text{
          a{
            color: #fff;
            transition: all 0.3s ease;
            text-shadow: 0px 0px 1px #005;
          }
          a:hover{
            font-size: 27px;
          }
        }
        .meta{
          display: flex;
          justify-content: center;
          text-shadow: 0px 0px 1px #005;
        }
      }
    }
    .content{
      color: #b7b7b7;
      margin-top: 30px;
      padding: 0 30px;
      line-height: 24px;
      letter-spacing: 1px;
    }
    .tag{
      margin-top: 30px;
      padding: 0 30px;
      span{
        padding: 2px 4px;
        background-color: #252940;
        border-radius: 8px;
        margin-right: 4px;
        a{
          margin-left: 5px;
          color:#b7b7b7
        }
      }
    }
  }
}
</style>