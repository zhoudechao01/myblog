<template>
  <div class="banner">
    <div class="container">
      <div class="text">
        <span class="tagline">Welcome to my Portfolio</span>
        <h1>{{`Hi! I'm Ferny`}} <span class="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span class="wrap">{{text}}</span></span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button>Let's Connect</button>
      </div>
      <div class="img">
        <img src="../../../assets/img/header-img.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogBanner',
  data() {
    return {
      loopNum: 0,
      // 是否正在删除
      isDeleted : false,
      text: '',
      delta: 500,
      toRotate: ["Web Developer", "Web Designer", "UI/UX Designer"],
      period: 2000
    };
  },

  mounted() {
    this.setTimer()
  },

  methods: {
    // 设置时间器
    setTimer(){
      let timer = setInterval(() => {
        this.tick()
      }, this.delta)

      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
        timer = null
      });
    },

    tick(){
      let i = this.loopNum % this.toRotate.length
      let fullText = this.toRotate[i]
      let updateText = this.isDeleted ? 
      fullText.substring(0, this.text.length - 1):
      fullText.substring(0, this.text.length + 1)
      this.text = updateText

      // 删除地速度加快
      if(this.isDeleted)
      {
        this.delta = this.delta * 0.5
      }
      if(!this.isDeleted && updateText === fullText)
      {
        this.isDeleted = true
        this.delta = this.period
      }
      if(this.isDeleted && updateText.length === 0)
      {
        this.isDeleted = false
        this.loopNum ++
        this.delta = 2000
      }
    }

  },
};
</script>

<style lang="less" scoped>
  .banner {
    margin-top: 0;
    height: 900px;
    padding: 260px 0 100px 0;
    background-image: url('../../../assets/img/banner-bg.png');
    background-position: top center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    .container{
      display: flex;
      margin: 0 110px;
      margin-top: 150px;
      height: 80px;
      flex-wrap: inherit;
      align-items: center;
      justify-content: space-between;
      .text{
        width: 660px;
        .tagline{
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 8px 10px;
          background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          font-size: 20px;
          margin-bottom: 16px;
          display: inline-block;
        }

        h1 {
          font-size: 65px;
          font-weight: 700;
          letter-spacing: 0.8px;
          line-height: 1;
          margin-bottom: 20px;
          display: block;
          .wrap {
            border-right: 0.08em solid #666;
          }
        }
        p {
          color: #B8B8B8;
          font-size: 18px;
          letter-spacing: 0.8px;
          line-height: 1.5em;
          width: 96%;
        }

        button {
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          margin-top: 60px;
          letter-spacing: 0.8px;
          display: flex;
          align-items: center;
        }
      }

      .img{
        img{
          animation: updown 3s linear infinite;
        }
        @keyframes updown {
            0% {
                transform: translateY(-20px) scale(0.8);
            }
            50% {
                transform: translateY(20px) scale(0.8);
            }
            100% {
                transform: translateY(-20px) scale(0.8);
            }
        }
      }
    }
  }
</style>