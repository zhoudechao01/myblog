<template>
  <div class="skills">
    <div class="container">
      <div class="skill-bx">
        <h2>Skills</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
        Lorem Ipsum has been the industry's standard dummy text.</p>
        <div class="carousel">
          <ul>
            <li>
              <img src="../../../assets/img/meter1.svg" alt="">
              <h5>Web designer</h5>
            </li>
            <li>
              <img src="../../../assets/img/meter1.svg" alt="">
              <h5>Web designer</h5>
            </li>
            <li>
              <img src="../../../assets/img/meter1.svg" alt="">
              <h5>Web designer</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img class="background-image-left" src='../../../assets/img/color-sharp.png' alt="Image" />
  </div>
</template>

<script>
export default {
  name: 'PersonBlogSkills',

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
.skills {
  padding: 0 0 50px 0;
  position: relative;
  .container {
    max-width: 100%;
		padding: 0 150px;
    .skill-bx{
      background: #151515;
      border-radius: 64px;
      text-align: center;
      padding: 60px 50px;
      margin-top: -60px;
      h2 {
        font-size: 45px;
        font-weight: 700;
      }
      p {
        color: #B8B8B8;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        margin: 14px 0 75px 0;
      }

      .carousel{
        height: 240px;
        width: 80%;
        margin: 0 auto;
        ul{
          display: flex;
          flex-direction: row;
          li{
            width: 33.33%;
          }
        }
        img{
          width: 60%;
          margin: 0 auto 15px auto;
        }
      }
    }
  }
  .background-image-left {
    top: 28%;
    position: absolute;
    bottom: 0;
    width: 40%;
    z-index: -4;
  }
}
</style>