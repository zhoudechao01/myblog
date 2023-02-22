<template>
  <div class="project">
    <div class="container">
      <h2>Projects</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <el-radio-group v-model="tab">
        <el-radio-button class="tab1" label="tab1">tab1</el-radio-button>
        <el-radio-button class="tab2" label="tab2">tab2</el-radio-button>
        <el-radio-button class="tab3" label="tab3">tab3</el-radio-button>
      </el-radio-group>
      <div v-if="tab == 'tab1' ? true : false">
        <ul class="project_card">
          <li v-for="(item, i) in projects" :key="i">
            <div class="img">
              <img :src="item.imgUrl"/>
              <div class="text">
                <h4>{{item.title}}</h4>
                <span>{{item.description}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="tab == 'tab2' ? true : false">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cumque quam, quod neque provident velit, 
          rem explicabo excepturi id illo molestiae blanditiis, 
          eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
        </p>
      </div>
      <div v-if="tab == 'tab3' ? true : false">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cumque quam, quod neque provident velit, 
          rem explicabo excepturi id illo molestiae blanditiis, 
          eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import projImg1 from "../../../assets/img/project-img1.png";
import projImg2 from "../../../assets/img/project-img2.png";
import projImg3 from "../../../assets/img/project-img3.png";
export default {
  name: 'PersonBlogProject',

  data() {
    return {
      tab: 'tab1',
      projects : [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.project {
  padding: 80px 0;
  position: relative;
  background-color: black;
  .container{
    padding: 0 150px;
  }
  h2 {
    font-size: 45px;
    font-weight: 700;
    text-align: center;
  }
  p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px auto 30px auto;
    text-align: center;
    width: 56%;
  }
  .el-radio-group{
    width: 74%;
    display: block;
    margin: 0 auto;
    border-radius: 50px;
    background-color: rgb(255 255 255 / 10%);
    overflow: hidden;
    .el-radio-button{
      width: 33.33333%;
      /deep/ .el-radio-button__inner{
        background-color: transparent;
        border-radius: 0;
        padding: 17px 0;
        color: #fff;
        width: 100%;
        font-size: 17px;
        letter-spacing: 0.8px;
        font-weight: 500;
        position: relative;
        transition: 0.3s ease-in-out;
        text-align: center;
        z-index: 0;
      }
    }

    /deep/ .tab1 .el-radio-button__inner{
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 55px 0 0 55px;
    }
    /deep/ .tab3 .el-radio-button__inner{
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 0 55px 55px 0;
    }
    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      border-color: #fff;
      background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
      transition: 0.3s ease-in-out;
    }
  }

  .project_card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    li{
      width: 32%;
    }
    .img {
      position: relative;
      border-radius: 30px;
      overflow: hidden;
      margin-bottom: 24px;
      .text{
        position: absolute;
        text-align: center;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s ease-in-out;
        opacity: 0;
        width: 100%;
        h4 {
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0.8px;
          line-height: 1.1em;
        }
        span {
          font-style: italic;
          font-weight: 400;
          font-size: 15px;
          letter-spacing: 0.8px;
        }
      }
    }

    .img::before{
      content: "";
      background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
      opacity: 0.85;
      position: absolute;
      width: 100%;
      height: 0;
      transition: 0.4s ease-in-out;
    }
    .img:hover::before{
      height: 100%;
    }
    .img:hover .text{
      opacity: 1;
      top: 50%
    }
  }

}
</style>