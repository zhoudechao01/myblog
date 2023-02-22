<template>
  <div class="picture">
    <img src="../../assets/picture-bg.gif">
      <div class="container">
        <div class="introduce">
          <div class="img"></div>
          <div class="text">
            <span>photo gallery</span>
            <h4>this is my photo gallery</h4>
            <h3>Every photo is a good memory</h3>
          </div>
        </div>
        <div class="card-group" @click="goPhotoDetail('scenery')">
          <div class="scenery">
            <div class="img"></div>
            <div class="text">
              <h4>Tourist Attractions</h4>
              <span>Beautiful & Famous</span>
            </div>
          </div>
          <div class="food" @click="goPhotoDetail('life')">
            <div class="img"></div>
            <div class="text">
              <h4>Delicious Food</h4>
              <span>Tasty & Toothsome</span>
            </div>
          </div>
          <div class="pet" @click="goPhotoDetail('pet')">
            <div class="img"></div>
            <div class="text">
              <h4>Adorable Pet</h4>
              <span>Cute & Clever</span>
            </div>
          </div>
          <div class="office" @click="goPhotoDetail('office')">
            <div class="img"></div>
            <div class="text">
              <h4>Official Bussiness</h4>
              <span>Busy & Hardwork</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogPicture',

  data() {
    return {
      activeItem: ''
    };
  },

  mounted() {
    
  },

  methods: {
    goPhotoDetail(category){
      this.$router.push(
        {
        path: '/home/picturelist',
        query: {
          img_category: category
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.picture{
  img{
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
        background-image: url('../../assets/picture-introduce.jpg');
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        pointer-events: none;
        filter: brightness(.75) saturate(1.2) contrast(.85) blur(1px);
        opacity: 0.5;
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
    .card-group{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      div{
        position: relative;
        width: calc(100% / 4 - 10px);
        border-radius: 30px;
        overflow: hidden;
        .img{
          margin: 0 auto;
          width: 96%;
          height: 560px;
          transition: filter .2s linear,transform .2s linear;
          background-position: center;
          background-size: cover;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          filter: brightness(.75) saturate(1.2) contrast(.85);
        }
        .img:hover{
          transform: scale(1.1) translateZ(0);
        }
        .text{
          position: absolute;
          text-align: center;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -200%);
          width: 100%;
          opacity: 0.8;
          h4 {
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 0.8px;
            line-height: 1.1em;
          }
          span {
            display: inline-block;
            margin-top: 10px;
            font-style: italic;
            font-weight: 400;
            font-size: 15px;
            letter-spacing: 0.8px;
          }
        }
      }

      .scenery{
        .img{
          background-image: url('../../assets/picture-scenery.jpg');
        }
      }
      .food{
        .img{
          background-image: url('../../assets/picture-life.jpg');
        }
      }
      .pet{
        .img{
          background-image: url('../../assets/picture-pet.jpg');
        }
      }
      .office{
        .img{
          background-image: url('../../assets/picture-office.jpg');
        }
      }
    }
  }
}
</style>