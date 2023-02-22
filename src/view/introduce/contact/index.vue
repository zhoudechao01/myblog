<template>
  <div class="contact">
    <div class="container">
      <div class="img">
        <img :src="contactImg" alt="">
      </div>
      <div class="form">
        <h2>Get In Touch</h2>
        <form>
          <input type="" name="" value="" placeholder="First Name" style="margin-right: 12px">
          <input type="" name="" value="" placeholder="Last Name">
          <input type="" name="" value="" placeholder="Email Address" style="margin-right: 12px">
          <input type="" name="" value="" placeholder="Phone No.">
          <textarea rows="6"></textarea>
          <button type="submit"><span>{{buttonText}}</span></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import contactImg from "../../../assets/img/contact-img.svg";
export default {
  name: 'PersonBlogIndex',

  data() {
    return {
      contactImg: contactImg,
      buttonText: 'send'
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.contact{
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 60px 0 200px 0;
  .container{
    padding: 0 110px;
    display: flex;
    justify-content: space-between;
    .img{
      img{
        width: 92%;
      }
    }
    .form{
      width: 60%;
      h2 {
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 30px;
      }
      form {
        input{
          width: 48%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          color: #fff;
          margin: 0 0 8px 0;
          padding: 18px 26px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 0.8px;
          transition: 0.3s ease-in-out;
        }

        input:focus, textarea:focus{
          background: rgba(255, 255, 255, 1);
          color: #121212;
        }

        input::placeholder, textarea::placeholder {
          font-size: 16px;
          font-weight: 400;
          color: #fff;
        }
        Input:focus::placeholder, textarea:focus::placeholder {
          color: #121212;
          opacity: 0.8;
        }
        textarea{
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          color: #fff;
          margin: 0 0 8px 0;
          padding: 18px 26px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 0.8px;
          transition: 0.3s ease-in-out;
        }

        button {
          font-weight: 700;
          color: #000;
          background-color: #fff;
          padding: 14px 48px;
          font-size: 18px;
          margin-top: 25px;
          border-radius: 0;
          position: relative;
          transition: 0.3s ease-in-out;
          span {
            z-index: 1;
            position: relative;
          }
        }
        button:hover {
          color: #fff;
        }

        button::before {
          content: "";
          background: #121212;
          width: 0;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          transition: 0.3s ease-in-out;
        }

        button:hover::before {
          width: 100%;
        }
      }
    }
  }
}
</style>