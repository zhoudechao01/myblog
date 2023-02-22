<template>
  <div class="navbar">
    <div class="text">
      <span>today</span>
      <p>The longest journey begins with the first step.</p>
    </div>
    <div class="search">
      <ul>
        <li><a href="/home/introduce"><i class="el-icon-s-home" style="font-size: 14px"></i>home</a></li>
        <li><a href="/home/learn"><i class="el-icon-collection" style="font-size: 14px"></i>learn</a></li>
        <li><a href="/home/tattle"><i class="el-icon-document" style="font-size: 14px"></i>tattle</a></li>
      </ul>
      <div class="input">
        <i class="el-icon-search"></i><span>search</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogIndex',

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
.navbar{
  padding-bottom: 30px;
  width: 240px;
  border-radius: 15px;
  background-color: #1f222e;
  overflow: hidden;
  .text{
    height: 40%;
    background-color: #1f222e;
    text-align: center;
    padding: 30px 24px 0 24px;
    span{
    margin-top: 40px;
    font-size: 20px;
    color: #cacaca;
    }
    p{
      margin-top: 20px;
      color: #B8B8B8;
      font-size: 10px;
      letter-spacing: 0.8px;
      line-height: 2em;
    }
  }
  .search{
    height: 60%;
    background-color: #1d1e28;
    ul{
      padding-top: 10px;
      li{
        padding-left: 30px;
        a{
          display: block;
          line-height: 36px;
          width: 100%;
          height: 100%;
          font-size: 16px;
          color: #B8B8B8;
          i{
            margin-right: 10px;
          }
        }
      }
      li:hover{
        background-color: #222435;
      }
    }
    .input{
      height: 30px;
      width: 68%;
      margin: 0 auto;
      margin-top: 20px;
      background-color: #252940;
      text-align: center;
      i{
        color: #bebebe;
        line-height: 30px;
      }
      span{
        margin-left: 10px;
        color: #B8B8B8;
        height: 30px;
      }
    }
  }
}
</style>