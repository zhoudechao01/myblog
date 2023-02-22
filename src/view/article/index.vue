<template>
  <div class="article">
    <img src="../../assets/bgi.jpg">
    <div class="welcome">
      <div style="margin-top: 300px">
        <span>z's blog</span>
        <p>It's time to embark on journey of discovery</p>
      </div>
    </div>
    <i class="el-icon-arrow-down" @click="toArticleList"></i>
    <div class="big-box" ref="parent" id="show">
      <div class="left-box">
        <NavbarBox/>
        <MessageBox ref="son" :id="isFixed === true ? 'messageBox-fix' : ''" style="margin-top: 10px"/>
      </div>
      <div class="right-box">
        <div class="article-list">
          <div v-for="(item, i) in articleDate" :key="i" style="margin-right: 5px">
            <ArticleItem :articleInfo= item />
          </div>
        </div>
        <div class="infinite-loading" ref="target">
          <div class="loading" v-if="loading">
            <i class="el-icon-loading"></i>
            <span class="text">正在加载...</span>
          </div>
          <div class="none" v-if="finished">
            <span class="text">没有更多了</span>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBox from '../../components/common/navbarBox/index.vue'
import MessageBox from '../../components/common/messageBox/index.vue'
import ArticleItem  from '../../components/articleItem/index.vue'
import { getAllArticle } from '../../api/api.js'
export default {
  name: 'PersonBlogArticle',
  components: {
    NavbarBox,
    MessageBox,
    ArticleItem,
  },
  data() {
    return {
      height: 0,
      isFixed: false,
      category: '',
      articleDate: [],
      page: 2,
      pageSize: 10,
      loading: true,
      finished: false,
      loadingHeight: 0
    };
  },

  methods: {
    toArticleList(){
      document.getElementById("show").scrollIntoView({ behavior: 'smooth' });
    },

    getArticleList() {
      // 进入页面时，只加载第一页数据
      getAllArticle(1, this.pageSize).then(res => {
        console.log(res);
        if(res.status === 200)
        {
          this.articleDate = res.data.result
          if(this.articleDate.length < this.pageSize)
          {
            this.loading = false
            this.finished = true
          }
        }
      })
    },

    // 当侧边栏滚动到顶部时，固定
    handleScrollFixed () {
      // 滚动的距离
      var scrollTop = document.documentElement.scrollTop;
      if(scrollTop > this.height)
      {
        this.isFixed = true
      }
      else{
        this.isFixed = false
      }
    },

    handleScrollLoading()
    {
      if(document.body.clientHeight >= this.$refs.target.getBoundingClientRect().top)
      {
        if(!this.finished && this.loading)
        {
          this.scrollGetData()
        }
      }
    },
    throttle(fn, time) {
        //3. 通过闭包保存一个 "节流阀" 默认为false
        let temp = false;
        return function () {
            //8.触发事件被调用 判断"节流阀" 是否为true  如果为true就直接trurn出去不做任何操作
            if (temp) {
                return;
            } else {
                //4. 如果节流阀为false  立即将节流阀设置为true
                temp = true; //节流阀设置为true
                //5.  开启定时器
                setTimeout(() => {
                    //6. 将外部传入的函数的执行放在setTimeout中
                    fn.apply(this, arguments);
                    //7. 最后在setTimeout执行完毕后再把标记'节流阀'为false(关键)  表示可以执行下一次循环了。当定时器没有执行的时候标记永远是true，在开头被return掉
                    temp = false;
                }, time);
            }
        };
    },

    scrollGetData(){
      getAllArticle(this.page, this.pageSize).then(res => {
        // 没有更多的数据了
        if(res.data.result === null)
        {
          this.loading = false
          this.finished = true
        }
        else{
          this.articleDate = this.articleDate.concat(res.data.result)
          if(res.data.result.length < this.pageSize)
          {
            this.loading = false
            this.finished = true
          }
          else{
            this.loading = true,
            this.finished = false
          }
        }
      })
    }
  },

  mounted() {
    window.addEventListener('scroll', this.throttle(this.handleScrollLoading, 2000))
    window.addEventListener('scroll', this.handleScrollFixed)
    this.category = this.$route.query.category
    this.height = this.$refs.son.$el.offsetTop + this.$refs.parent.offsetTop - 80
    this.loadingHeight = this.$refs.target.getBoundingClientRect().top + this.$refs.parent.offsetTop
    this.getArticleList()
  },

  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
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
    width: 100%;
    height: 800px;
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
  .big-box{
    position: absolute;
    top: 760px;
    left: 0;
    padding: 0 160px;
    display: flex;
    width: 100%;
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
      .article-list{
        // column-count: 2;
        // column-gap: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .infinite-loading{
        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          i{
            color: #eee;
            font-size: 20px;
          }
          .text {
            margin-left: 10px;
            color: #eee;
            font-size: 18px;
          }
        }
        .none{
          text-align: center;
          .text {
            margin-left: 10px;
            color: #eee;
            font-size: 18px;
          }
        }
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
  .el-icon-arrow-down{
    position: absolute;
    top: 680px;
    left: 50%;
    font-size: 30px;
    animation: down 1s linear infinite;
  }
  @keyframes down {
    0% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(-5px);
    }
  }
</style>