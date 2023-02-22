<template>
  <div class="message">
    <img src="../../assets/bgi.jpg" class="bgcImg">
    <div class="welcome">
      <div style="margin-top: 150px">
        <span>z's blog</span>
        <p>It's time to embark on journey of discovery</p>
      </div>
    </div>
    <div class="container">
      <div class="left-box">
        <NavbarBox/>
        <MessageBox :id="isFixed == true ? 'messageBox-fix' : ''" class="messageBox"/>
      </div>
      <div class="right-box">
        <div class="comment">
          <div>
            <h2 class="comments_title">
              <i class="fa fa-comments"></i><span style="margin-left: 5px">评论</span>
            </h2>
          </div>
          <ul class="comment-list">
            <li class="comment-item">
              <div class="comment-item-avatar">
                <img src="https://q1.qlogo.cn/g?b=qq&amp;s=640&amp;nk=2627463656" class="avatar avatar-40 photo" width="40" height="40">
              </div>
              <div class="comment-item-inner">
                <div class="comment-item-title">
                  <div class="comment-author" style="display: inline-block;">小白</div>
                  <div class="comment-time">
                    <span class="human-time" data-time="1667135648">26 分钟前</span>
                      <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                  </div>
                </div>
                <div class="comment-item-text"><p>厉害</p></div>
              </div>
            </li>
            <li>
              <ul class="children" style="margin-left: 40px">
                <li class="comment-item">
                  <div class="comment-item-avatar">
                    <img src="https://q1.qlogo.cn/g?b=qq&amp;s=640&amp;nk=2627463656" class="avatar avatar-40 photo" width="40" height="40">
                  </div>
                  <div class="comment-item-inner">
                    <div class="comment-item-title">
                      <div class="comment-author" style="display: inline-block;">小白</div>
                      <div class="comment-time">
                        <span class="human-time" data-time="1667135648">26 分钟前</span>
                          <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                      </div>
                    </div>
                    <div class="comment-item-text"><p>厉害</p></div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="comment-list">
            <li class="comment-item">
              <div class="comment-item-avatar">
                <img src="https://q1.qlogo.cn/g?b=qq&amp;s=640&amp;nk=2627463656" class="avatar avatar-40 photo" width="40" height="40">
              </div>
              <div class="comment-item-inner">
                <div class="comment-item-title">
                  <div class="comment-author" style="display: inline-block;">小白</div>
                  <div class="comment-time">
                    <span class="human-time" data-time="1667135648">26 分钟前</span>
                      <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                  </div>
                </div>
                <div class="comment-item-text"><p>厉害</p></div>
              </div>
            </li>
            <li>
              <ul class="children" style="margin-left: 40px">
                <li class="comment-item">
                  <div class="comment-item-avatar">
                    <img src="https://q1.qlogo.cn/g?b=qq&amp;s=640&amp;nk=2627463656" class="avatar avatar-40 photo" width="40" height="40">
                  </div>
                  <div class="comment-item-inner">
                    <div class="comment-item-title">
                      <div class="comment-author" style="display: inline-block;">小白</div>
                      <div class="comment-time">
                        <span class="human-time" data-time="1667135648">26 分钟前</span>
                          <!-- <div class="comment-time-details">2022-10-30 21:14:08</div> -->
                      </div>
                    </div>
                    <div class="comment-item-text"><p>厉害</p></div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="post-comment">
          <h2 class="post-comment-title">
            <i class="fa fa-commenting"></i>
            <span class="hide-on-comment-editing" style="margin-left: 5px">发送留言</span>
          </h2>
          <form>
            <div class="post-comment-content">
              <textarea class="textarea" placeholder="评论内容" style="height: 41px;"></textarea>
            </div>
            <div class="post-comment-info">
              <div class="post-comment-info-name">
                <i class="fa fa-user-circle"></i>
                <input class="form-control" placeholder="昵称" type="text" name="author">
              </div>
              <div class="post-comment-info-avator">
                <i class="fa fa-envelope"></i>
                <input class="form-control" placeholder="QQ号" type="text" name="email">
              </div>
            </div>
            <div class="post_comment_send">
              <button class="post_comment_button" type="button">
                <span class="btn-inner--icon hide-on-comment-editing" ><i class="fa fa-send"></i></span>
                <span class="btn-inner--text hide-on-comment-editing" style="margin-left: 10px;">发送</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBox from '@/components/common/navbarBox'
import MessageBox from '@/components/common/messageBox'
export default {
  name: 'PersonBlogIndex',
  components: {
    NavbarBox,
    MessageBox
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.message{
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
    width: 100%;
    padding: 0 160px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .messageBox{
      margin-top: 10px;
    }
    #messageBox-fix{
      position: fixed;
      top: 84px;
      transition: 0.8s ease-in-out;
    }
    .right-box{
      width: 100%;
      margin-left: 30px;
      .comment{
        width: 100%;
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
            border-bottom: #005 solid 1px;
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
        }
      }
      .post-comment{
        margin-top: 30px;
        background-color: #1d1e28;
        border-radius: 15px;
        padding: 1.5rem;
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
        .post_comment_send{
          margin-top: 20px;
          margin-bottom: 10px;
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
            background-color: #4659c6;
          }
        }
      }
    }
  }
}
</style>