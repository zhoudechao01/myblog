<template>
  <div class="article">
    <img src="../../assets/bgi.jpg">
    <div class="welcome">
      <div style="margin-top: 150px">
        <span>z's blog</span>
        <p>It's time to embark on journey of discovery</p>
      </div>
    </div>
      <div class="category">
        <div>
          <div class="text">
            <span>Category：{{category}}</span>
          </div>
          <div class="quantity">
            <i class="fa fa-file-o mr-1"></i><span style="margin-left: 5px">this are <span>{{articleData.length}}</span> articles in total</span>
          </div>
        </div>
      </div>
      <div class="big-box" ref="parent">
        <div class="left-box">
          <NavbarBox/>
          <MessageBox ref="son" :id="isFixed === true ? 'messageBox-fix' : ''" style="margin-top: 10px"/>
        </div>
        <div class="right-box">
          <div class="article-list">
            <div v-for="(item, i) in compData" :key="i" style="display: inline-block;">
              <ArticleItem :articleInfo = item />
            </div>
          </div>
          <Pageing @func="currentPageChange"/>
          <div class="footer"></div>
        </div>
    </div>
  </div>
</template>

<script>
import NavbarBox from '../../components/common/navbarBox/index.vue'
import MessageBox from '../../components/common/messageBox/index.vue'
import ArticleItem  from '../../components/articleItem/index.vue'
import Pageing from '../../components/common/pageing/index.vue'
import { getArticleInfoByCategory } from '../../api/api.js'
export default {
  name: 'PersonBlogLeran',
  components: {
    NavbarBox,
    MessageBox,
    ArticleItem,
    Pageing
  },
  data() {
    return {
      height: 0,
      isFixed: false,
      category: '',
      articleData: [],
      number: 0,
      currentPage: 1,
      pagesize: 10
    };
  },

  created(){
    this.category = this.$route.query.category
    getArticleInfoByCategory(this.category).then(res =>{
      if(res.status === 200)
      {
        this.articleData = res.data.result
      }
    })
  },


  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.height = this.$refs.son.$el.offsetTop + this.$refs.parent.offsetTop - 80
  },

  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
  },

  watch: {
    $route: function(to, from ){
      if(to.fullpath !== from){
        this.category = this.$route.query.category
        getArticleInfoByCategory(this.category).then(res =>{
          if(res.status === 200)
          {
            this.articleData = res.data.result
          }
        })
      }
    },
  },

  computed: {
    compData() {
      return this.articleData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    },
  },

  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop;
      if(scrollTop > this.height)
      {
        this.isFixed = true
      }
      else{
        this.isFixed = false
      }
    },
    currentPageChange(val){
      this.currentPage = val
    },
  },
};
</script>

<style lang="less" scoped>
.article{
  img{
    position: fixed;
    top: 0;
    left: 0;
    height: 900px;
    filter: brightness(.75) saturate(1.2) contrast(.85) blur(2px);
  }
  .welcome{
    position: absolute;
    top: 40px;
    margin-top: 40px;
    width: 100%;
    text-align: center;
    span{
      font-family:"微软雅黑";
      font-size: 30px;
      text-shadow:0 5px 15px rgb(0 0 0 / 20%);
      letter-spacing: 0.8px;
      line-height: 1.5em;
    }
    p {
      font-size: 18px;
      letter-spacing: 0.8px;
      line-height: 1.5em;
    }
  }

    .category{
      position: absolute;
      top:360px;
      left: 0;
      width: 100%;
      padding: 0 160px;
      div{
        border-radius: 15px;
        background-color: #1f222e;
        padding: 10px;
        .text{
          font-size: 30px;
        }
        .quantity{
          margin-top: 10px;
        }
      }
    }
    .big-box{
      position: absolute;
      top: 500px;
      left: 0;
      margin: 0 auto;
      display: flex;
      width: 100%;
      padding: 0 160px;
      justify-content: space-between;
      .left-box{
        #messageBox-fix{
          width: 15.8%;
          position: fixed;
          top: 90px;
          transition: 0.8s ease-in-out;
        }
      }
      .right-box{
        margin-left: 20px;
        width:100%;
        .article-list{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer{
          width: 100%;
          background-color: #1f222e;
          height: 200px;
          margin-top: 20px;
          border-radius: 15px;
        }
      }
    }
}
</style>