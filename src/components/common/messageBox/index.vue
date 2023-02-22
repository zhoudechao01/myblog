<template>
  <div class="message">
    <el-tabs>
      <el-tab-pane label="situation">
        <div class="situation">
          <div class="portrait">
          </div>
          <div class="name" style="margin-top: 10px">
            <div style="font-size: 20px">zdc</div>
            <div style="font-size: 12px; margin-top: 10px"> a programmer with nothing to do</div>
          </div>
          <div class="number">
            <ul>
              <li><span style="font-weight: 700; color: #c2c2c2">36</span><span style="font-size: 12px;margin-top: 2px">article</span></li>
              <li><span style="font-weight: 700; color: #c2c2c2">36</span><span style="font-size: 12px;margin-top: 2px">category</span></li>
              <li><span style="font-weight: 700; color: #c2c2c2">36</span><span style="font-size: 12px;margin-top: 2px">tag</span></li>
            </ul>
          </div>
          <div class="web">
            <a href="https://github.com/zhoudechao01" rel="noopener" target="_blank">
              <i class="fa fa-github"></i><span style="margin-left: 6px">GitHub</span>
            </a>
            <a href="https://github.com/zhoudechao01" rel="noopener" target="_blank">
              <i class="fa fa-youtube-play"></i><span style="margin-left: 6px">Gitee</span>
            </a>
          </div>
          <div class="site-friend-links">
						<div class="site-friend-links-title"><i class="fa fa-fw fa-link"></i> Links</div>
							<ul class="site-friend-links-ul">
                <li class="site-friend-links-item">
                  <a href="#" rel="noopener" target="_blank"><i class="fa fa-link"></i>friend-links</a>
                </li>
                <li class="site-friend-links-item">
                  <a href="#" rel="noopener" target="_blank"><i class="fa fa-question-circle" aria-hidden="true"></i>about</a>
                </li>
                <li class="site-friend-links-item">
                  <a href="#" rel="noopener" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> message</a>
                </li>
              </ul>
            </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="function">
        <div style="padding: 10px 20px">
          <div class="progress">
            <div class="year">
              <span>2022</span>
            </div>
            <div class="percentage">
              <span>{{percentage}}%</span>
            </div>
          </div>
          <el-progress :stroke-width='8' :percentage="percentage" :color="customColor" :show-text="false" style="margin-top: 10px"></el-progress>
          <div class="block">
            <el-timeline>
              <el-timeline-item
                color='#626da7'
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{activity.content}}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="catalog" v-if="titles.length !== 0">
        <div class="titles"
          v-for="(anchor,i) in titles"
          :key="i"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px`}"
          @click="handleAnchorClick(anchor)"
        >
        {{anchor.title}}
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogMessage',
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      customColor: '#626da7',
      percentage: 70,
      activities: [{
          content: '添加友链，一起进步吧',
          timestamp: '2022-11-02'
        }, {
          content: '添加留言功能',
          timestamp: '2022-10-30'
        }, {
          content: '网站主要功能搭建成功',
          timestamp: '2022-10-11'
        }],

      empty: true
    };

  },

  mounted() {
    console.log(this.$props.titles.length);
  },

  updated() {
    console.log(this.$props.titles.length);
    if(this.$props.titles.length !== 0)
    {
      this.empty = false
    }
  },

  methods: {
    handleAnchorClick(anchor) {
      this.$emit('func', anchor)
    },
  },
};
</script>

<style lang="less" scoped>
.message{
  padding-bottom: 30px;
  border-radius: 15px;
  background-color: #1f222e;
  overflow: hidden;
  .situation{
    text-align: center;
    color: #b7b7b7;
    .portrait{
      margin: 0 auto;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-image: url('../../../assets/portrait.jpg');
      background-position: top center;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      overflow: hidden;
    }
    .number{
      padding: 0 40px;
      margin-top: 16px;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          width: 33.33%;
          span{
            display: block;
          }
          ~li{
            border-left: 1px solid #272b43;
          }
        }
      }
    }
    .web{
      margin-top: 24px;
      padding: 0 34px;
      display: flex;
      justify-content: space-between;
      a{
        color: #b7b7b7;
      }
    }

    .site-friend-links{
      margin-top: 25px;
      border-top: 1px dotted #272b43;
      padding-top: 10px;
      .site-friend-links-ul{
        margin-top: 8px;
      }
      .site-friend-links-item{
        margin-bottom: 10px;
        a{
          color: #b7b7b7;
          border-bottom: 1px solid #b7b7b7;
        }
      }
    }
  }
  .progress{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .year{
      background-color: rgba(98, 109, 167, 0.3);
      border-radius: 12px;
      padding: 6px 10px;
      font-size: 12px;
      color: #5869be;
      span{
        line-height: 10px;
      }
    }
    .percentage{
      color: #b7b7b7;
      span{
        line-height: 24px;
      }
    }
  }

  .block{
    margin-top: 20px;
    .el-timeline-item__content{
      color: #626da7 !important;
    }
  }

  .titles{
    color: #5869be;
    margin-left: 20px;
  }
}

/deep/ .el-tabs__nav{
  width: 100%;
  padding: 4px 10px 0 10px;
  display: flex;
  justify-content: space-around;
}

/deep/ .el-tabs__nav-wrap::after{
  background-color: transparent;
}

/deep/ .el-tabs__active-bar{
  display: none;
  background-color: #626da7;
} 

/deep/ .el-tabs__item{
  padding: 0;
  color: #626da7;
  font-size: 10px;
} 

/deep/ .is-active{
  border-bottom: 2px solid #626da7;
}

/deep/ .el-timeline-item__tail{
  border-left: 2px solid #626da7
}

/deep/ .el-timeline-item__content{
    color: #626da7;
  }

  /deep/ .el-timeline-item__timestamp{
    color: #626da7;
  }
</style>