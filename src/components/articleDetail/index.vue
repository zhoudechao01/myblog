<template>
  <div class="articleDetail">
    <img src="../../assets/组合太空人.jpg" class="bgcImg">
    <div class="welcome">
      <div style="margin-top: 150px">
        <span>z's blog</span>
        <p>It's time to embark on journey of discovery</p>
      </div>
    </div>
    <div class="container">
      <div class="left-box">
        <NavbarBox/>
        <MessageBox @func="handleClick" :titles="titles" :id="isFixed == true ? 'messageBox-fix' : ''" class="messageBox"/>
      </div>
      <div class="right-box">
        <div class="detail">
          <div class="header">
            <div class="detail_img">
              <img src="../../assets/article03.jpg" alt="">
            </div>
            <div class="title">
              <div class="text" style="font-size: 26px; margin-bottom: 10px;">
                <a href="#" style="filter: drop-shadow(0px 1px 5px #0005);letter-spacing: 3px;">{{articleInfo.article_title}}</a>
              </div>
              <div class="meta">
                <div class="meta-detail" style="margin-left: 10px">
                  <i class="fa fa-bookmark-o"></i><span style="margin-left: 6px">{{articleInfo.article_category}}</span>
                </div>
                <div style="margin-left: 10px">|</div>
                <div class="meta-detail" style="margin-left: 10px">
                  <i class="fa fa-clock-o"></i>
                  <time style="margin-left: 6px" title="发布于 2022-10-25 0:56:20 | 编辑于 2022-10-27 22:13:59">2022-10-25 0:56</time>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <v-md-preview :text="articleInfo.article_content" ref="preview"></v-md-preview>
          </div>
          <div class="tag">
            <i class="fa fa-tags"></i><a href="#">标签</a>
          </div>
        </div>
        <div class="comment">
          <div>
            <h2 class="comments_title">
              <i class="fa fa-comments"></i><span style="margin-left: 5px">评论</span>
            </h2>
          </div>
          <ul class="comment-list" v-for="(item, i) in articleInfo.comments" :key="i">
            <li class="comment-item" v-if="item.comment_floor === 0" @mouseenter="showButton(true)" @mouseleave="showButton(false)">
              <div class="comment-item-avatar">
                <img :src="item.avator" class="avatar avatar-40 photo" width="40" height="40">
              </div>
              <div class="comment-item-inner">
                <div class="comment-item-title">
                  <div class="comment-author" style="display: inline-block;">{{item.comment_author}}</div>
                  <div class="comment-time">
                    <span class="human-time" data-time="1667135648">{{item.createAt}}</span>
                      <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                  </div>
                </div>
                <div class="comment-item-text"><p>{{item.comment_content}}</p></div>
              </div>
              <div>
                <button @click="reply(item)">回复</button>
              </div>
            </li>
            <li v-for="(child, i) in articleInfo.comments" :key="i">
              <ul style="margin-left: 40px" v-if="child.comment_floor === 1 && child.comment_id === item.id">
                <li class="comment-item">
                  <div class="comment-item-avatar">
                    <img :src="child.avator" class="avatar avatar-40 photo" width="40" height="40">
                  </div>
                  <div class="comment-item-inner">
                    <div class="comment-item-title">
                      <div class="comment-author" style="display: inline-block;">{{child.comment_author}}</div>
                      <div class="comment-time">
                        <span class="human-time" data-time="1667135648">{{child.createAt}}</span>
                          <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                      </div>
                    </div>
                    <div class="comment-item-text"><p>{{item.comment_content}}</p></div>
                  </div>
                  <div>
                    <button @click="reply(child)">回复</button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="post-comment">
          <h2 class="post-comment-title">
            <i class="fa fa-commenting"></i>
            <span class="hide-on-comment-editing" style="margin-left: 5px">发送评论</span>
          </h2>
          <div v-if="reply_comment" class="reply">
            <span>您正在回复 {{reply_item.comment_author}} 的评论</span>
            <div class="replay-content">
              {{reply_item.comment_content}}
            </div>
            <button @click="cancelReply">取消回复</button>
          </div>
          <form>
            <div class="post-comment-content">
              <textarea class="textarea" v-model="comment_form.content" placeholder="评论内容" style="height: 41px;"></textarea>
            </div>
            <div class="post-comment-info">
              <div class="post-comment-info-name">
                <i class="fa fa-user-circle"></i>
                <input class="form-control" v-model="comment_form.author" placeholder="昵称" type="text">
              </div>
              <div class="post-comment-info-avator">
                <i class="fa fa-envelope"></i>
                <input class="form-control" v-model="comment_form.qq_num" placeholder="QQ号" type="text">
              </div>
            </div>
            <div class="post-comment-send">
              <button class="post_comment_button" type="button">
                <span class="btn-inner--icon hide-on-comment-editing" ><i class="fa fa-send"></i></span>
                <span class="btn-inner--text hide-on-comment-editing" style="margin-left: 10px;" @click="addComment()">发送</span>
              </button>
            </div>
          </form>
        </div>
        <div class="post-navigation">
          <div class="post-navigation-item post-navigation-pre">
            <span class="page-navigation-extra-text"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>上一篇</span>
            <a href="#" rel="prev">小E和他的个人博客</a>
          </div>
          <div class="post-navigation-item post-navigation-next">
            <span class="page-navigation-extra-text">下一篇 <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
            <a href="#" rel="next">java web项目报错：HTTP状态 500 – 内部服务器错误</a>
          </div>
        </div>
        <div class="footer">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBox from '@/components/common/navbarBox'
import MessageBox from '@/components/common/messageBox'
import { getArticleInfoById, insertComment } from '../../api/api.js'
import { Message } from 'element-ui'
export default {
  name: 'PersonBlogIndex',
  components: {
    NavbarBox,
    MessageBox
  },
  data() {
    return {
      isFixed: false,
      buttonShow: false,
      article_id: 0,
      articleInfo: {},
      comment_form: {
        content: '',
        author: '',
        qq_num: ''
      },
      reply_comment: false,
      reply_item: {},
      // 目录
      titles: [],
      // 控制updated函数
      canUse: true
    };
  },

  created() {
    this.article_id = this.$route.query.article_id
    getArticleInfoById(this.article_id).then(res => {
      this.articleInfo = res.data.result
    })
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  updated() {
    this.$nextTick(() => {
      const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
      const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
      const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
      if(this.canUse)
      {
        this.titles = titles.map((el) => ({
          title: el.innerText,
          lineIndex: el.getAttribute('data-v-md-line'),
          indent: hTags.indexOf(el.tagName),
        }));
        this.canUse = false
      }
    })
  },

  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
  },


  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      if(scrollTop > 620)
      {
        this.isFixed = true
        
      }
      else{
        this.isFixed = false
      }
    },

    showButton(value)
    {
      this.buttonShow = value
    },

    addComment(){
      if(this.comment_form.content !== '' && this.comment_form.author !== '' && this.comment_form.qq_num !== '')
      {
        let params
        if(this.reply_comment)
        {
          params = {
            article_id: this.article_id,
            comment_content: this.comment_form.content,
            comment_author: this.comment_form.author,
            avator: `http://q1.qlogo.cn/g?b=qq&nk=${this.comment_form.qq_num}&s=100`,
            comment_floor: 1,
            comment_id: this.reply_item.id
          }
        }
        else{
          params = {
            article_id: this.article_id,
            comment_content: this.comment_form.content,
            comment_author: this.comment_form.author,
            avator: `http://q1.qlogo.cn/g?b=qq&nk=${this.comment_form.qq_num}&s=100`,
            comment_floor: 0
          }
        }
        insertComment(params).then(res => {
          if(res.status === 200)
          {
            Message({ message: res.data.message, type: "success" });
            this.comment_form.content = '',
            this.comment_form.author = '',
            this.comment_form.qq_num = '',
            getArticleInfoById(this.article_id).then(res => {
              this.articleInfo = res.data.result
            })
          }
        })
      }
    },

    handleClick(anchor){
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 80,
        });
      }
    },

    reply(item){
      this.reply_item = item
      this.reply_comment = true
    },

    cancelReply(){
      this.reply_comment = false
      this.reply_item = {}
    }
  },
};
</script>

<style lang="less" scoped>
.articleDetail
{
  .bgcImg{
    position: fixed;
    top: 0;
    left: 0;
    height: 900px;
    filter: brightness(.75) saturate(1.2) contrast(.85) blur(2px);
  }
  .welcome{
    position: absolute;
    top: 40px;
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
  .container{
    position: absolute;
    top:360px;
    padding: 0 160px;
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .messageBox{
      margin-top: 10px;
    }
    #messageBox-fix{
      width: 15.8%;
      position: fixed;
      top: 84px;
      transition: 0.8s ease-in-out;
    }
    .right-box{
      margin-left: 30px;
      width: 100vw;
      .detail{
        padding-bottom: 30px;
        background-color: #1f222e;
        border-radius: 15px;
        overflow: hidden;
        .header{
          position: relative;
          overflow: hidden;
          min-height: 250px;
          .detail_img{
            img{
              width: 100%;
              min-height: 250px;
              max-height: 25vh;
              object-fit: cover;
              pointer-events: none;
            }
          }
          .title{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding-bottom: 40px;
            text-align: center;
            opacity: 0.8;
          }
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
            text-shadow: 1px 1px 5px #005;
          }
        }
        .content{
          padding: 0 20px;
          margin-top: 30px;
          word-break:break-all;
          word-wrap:break-word;
          white-space: pre-wrap;
          // h1, h2, h3, h4, h5, h6 {
          //   color: #eee;
          //   margin-top: 18px;
          //   margin-bottom: 15px;
          // }
          h1{
            font-size: 26px !important;
          }
        }
        .tag{
          margin-top: 30px;
          padding: 0 20px;
          a{
            margin-left: 5px;
            color:#b7b7b7
          }
        }
      }
      .comment{
        margin-top: 30px;
        padding: 1.5rem;
        border-radius: 15px;
        flex: 1 1 auto;
        background-color: #1d1e28;
      }
      .comment-list{
        margin-top: 0;
        margin-bottom: 1rem;
        .comment-item {
          margin-bottom: 1px;
          display: flex;
          .comment-item-avatar{
            display: block;
            width: 40px;
            margin-top: 26px;
            margin-right: 15px;
            position: relative;
            .avatar {
              height: 40px;
              width: 40px;
              font-size: 1rem;
              display: inline-flex;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
            }
          }
          .comment-item-inner {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            padding-bottom: 18px;
            border-bottom: #272b43 solid 1px;
            width: calc(100% - 50px);
            .comment-item-title{
              font-size: 16px;
              margin-bottom: 3px;
              display: flex;
              justify-content: space-between;
              .comment-author{
                font-weight: bold;
              }
              .comment-time{
                margin-top: 2px;
                font-size: 12px;
                font-weight: normal;
                margin-left: 3px;
              }
            }
            .comment-item-text {
              margin-top: 2px;
              min-height: 24px;
              margin-bottom: 1rem;
              p {
                font-size: 0.9rem;
                font-weight: 300;
                line-height: 1.7;
              }
            }
          }
          button{
            display: none;
            color: #4b5bb6;
            border: 1px #4b5bb6 solid;
            width: 50px;
            padding: 4px 0;
            font-size: 10px;
            letter-spacing: 2px;
            border-radius: 4px;
          }

          button:hover{
            color: #fff;
            background-color: #4b5bb6;
          }
        }

        .comment-item:hover{
          button{
            display: inline-block;
          }
        }
      }
      .post-comment{
        margin-top: 30px;
        background-color: #1d1e28;
        border-radius: 15px;
        padding: 1.5rem;
        .reply{
          margin-top: 20px;
          padding: 20px;
          border: 3px #1f222e solid;
          .replay-content{
            margin-top: 20px;
            margin-left: 20px;
            padding: 0 10px;
            border-left: #4b5bb6 1px solid;
          }
          button{
            margin-top: 20px;
            color: #4b5bb6;
            border: 1px #4b5bb6 solid;
            padding: 6px 8px;
            font-size: 10px;
            letter-spacing: 1px;
            border-radius: 4px;
          }

          button:hover{
            color: #fff;
            background-color: #4b5bb6;
          }
        }
        .post-comment-content{
          color: #eee;
          .textarea{
            overflow: hidden;
            min-height: 80px;
            resize: none;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin-bottom: 18px;
            margin-top: 20px;
            width: 100%;
            padding: 15px;
            background-color: #1f222e;
            border: 0;
            color: #eee;
          }
        }
        .post-comment-info{
          display: flex;
          justify-content: space-between;
          .post-comment-info-name{
            display: flex;
            width: 49%;
            padding-left: 10px;
            background-color: #1f222e;
            i{
              font-weight: 400;
              line-height: 3;
              color: #adb5bd;
            }
            input{
              margin-left: 8px;
              color: #eee;
              border: 0;
              width: 100%;
              background-color: #1f222e;
            }
          }
          .post-comment-info-avator{
            display: flex;
            width: 49%;
            padding-left: 10px;
            background-color: #1f222e;
            i{
              font-weight: 400;
              line-height: 3;
              color: #adb5bd;
            }
            input{
              margin-left: 8px;
              color: #eee;
              border: 0;
              width: 100%;
              background-color: #1f222e;
            }
          }
        }
        .post-comment-send{
          margin-top: 20px;
          .post_comment_button{
            background-color: #4b5bb6;
            color: #b7b7b7;
            border-radius: .25rem;
            padding: 0 20px;
            span{
              line-height: 2.8;
              font-size: .875rem;
              letter-spacing: .025em;
              border: 1px solid transparent;
            }
          }
          .post_comment_button:hover{
            top: 12.5rem;
            background-color: #4659c6;
          }
        }
      }
      .post-navigation{
        margin-top: 20px;
        padding: 30px 25px;
        padding-top: 25px;
        font-size: 18px;
        display: flex;
        background-color: #1f222e;
        border-radius: 15px;
        .post-navigation-item{
          display: flex;
          flex-direction: column;
          width: calc(50%);
          display: inline-block;
          vertical-align: top;
          .page-navigation-extra-text {
            font-size: 22px;
            opacity: 0.85;
            display: block;
            margin-bottom: 15px;
          }
          a{
            color: #4b5bb6;
          }
        }
        .post-navigation-pre{
          padding-right: 10px;
        }
        .post-navigation-next{
          text-align: right;
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
</style>