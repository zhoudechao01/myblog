<template>
  <div class="picture-list">
    <img class="bgi" src="../../../assets/picture-bg.gif">
    <div class="container">
      <div class="introduce">
        <div class="img"></div>
        <div class="text">
          <span>photo gallery</span>
          <h4>this is my photo gallery</h4>
          <h3>Every photo is a good memory</h3>
        </div>
      </div>
      <ul>
        <li class="picture-item" v-for="(item, i) in pictureList" :key="i">
          <div class="picture-content">
            <p>{{item.img_title}}</p>
            <div class="picture-img" v-if="item.pictures[0]">
              <el-image class="img"
                :src="item.pictures[0]"
                :preview-src-list="item.pictures">
              </el-image>
            </div>
            <div class="picture-img" v-else>
              <img src="../../../assets/loading.gif" alt="">
            </div>
          </div>
          <hr>
          <div class="picture-des">
            <div class="picture-info">
              <i class=" fa fa-instagram"></i>
              <time datetime="" style="margin-left: 6px;">21 days ago</time>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAllPictureByCategory } from '../../../api/api.js'
export default {
  name: 'PersonBlogIndex',

  data() {
    return {
      category: '',
      pictureList: []
    };
  },

  created() {
    this.category = this.$route.query.img_category
    getAllPictureByCategory(this.category).then(res => {
      if(res.status === 200)
      {
        this.pictureList = res.data.result
        let list = []
        for(let i = 0; i < this.pictureList.length; i++)
        {
          for(let j = 0; j < this.pictureList[i].pictures.length; j++)
          {
            list.push(this.pictureList[i].pictures[j].url)
          }
          console.log(list);
          this.pictureList[i].pictures = list
          list = []
        }
        console.log(this.pictureList);
      }
    })
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.picture-list{
  .bgi{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    filter: brightness(.75) saturate(1.2) contrast(.85) blur(1px);
  }
  .container{
    position: absolute;
    top: 120px;
    width: 100%;
    padding: 0 100px;
    padding-bottom: 200px;
    .introduce{
      position: relative;
      height: 300px;
      width: 100%;
      border-radius: 30px;
      background-color: #1f222e;
      overflow: hidden;
      .img{
        background-image: url('../../../assets/picture-introduce.jpg');
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        pointer-events: none;
        filter: brightness(.75) saturate(1.2) contrast(.85) blur(1px);
      }
      .text{
        position: absolute;
        top: 20px;
        left: 20px;
        opacity: 0.9;
        span{
          font-size: 14px;
        }
        h4{
          display: block;
          margin-top: 10px;
          font-size: 30px;
        }
        h3{
          display: block;
          margin-top: 170px;
          font-size: 18px;
        }
      }
    }
    ul{
      column-count: 3;
      margin-top: 20px;
      .picture-item{
        border: 1px solid #42444a;
        padding: 1rem 1rem .5rem;
        margin-bottom: 10px;
        border-radius: 12px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        page-break-inside: avoid;
        .picture-content{
          width: 100%;
          height: 100%;
          p{
            font-size: .8rem;
            font-weight: 700;
            line-height: 1.38;
            margin-bottom: .5rem;
          }
          .picture-img{
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            margin: 10px 0;
            img{
              width: 100%;
              max-height: 300px;
              object-fit: cover;
            }
          }
        }
        hr{
          width: 100%;
          border: 1px dashed #42444a;
          margin: 8px 0;
        }
        .picture-des{
          display: flex;
          flex-direction: row;
          .picture-info{
            background-color: #9999992b;
            border-radius: 8px;
            padding: 2px 8px;
            font-size: .8rem;
            align-items: center;
          }
        }
      }
    }
  }
}


</style>