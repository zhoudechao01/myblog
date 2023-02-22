<template>
  <div class="footer">
    <div class="container">
      <MailForm/>
      <div class="logo">
        <img :src="logo" alt="Logo" />
      </div>
      <div>
        <div class="social-icon" style="margin-left: 110px">
          <a href="#"><img :src="navIcon1" alt="Icon" /></a>
          <a href="#"><img :src="navIcon2" alt="Icon" /></a>
          <a href="#"><img :src="navIcon3" alt="Icon" /></a>
        </div>
        <p>Copyright 2022. All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../assets/img/logo.svg";
import navIcon1 from "../../../assets/img/nav-icon1.svg";
import navIcon2 from "../../../assets/img/nav-icon2.svg";
import navIcon3 from "../../../assets/img/nav-icon3.svg";
import MailForm from "./mailForm.vue"
export default {
  name: 'PersonBlogFooter',
  components: {
    MailForm
  },
  data() {
    return {
      logo,
      navIcon1,
      navIcon2,
      navIcon3,
    };
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.footer {
  padding: 0 0 50px 0;
  background-image: url('../../../assets/img/footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .container{
    padding: 0 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .logo {
      width: 13%;
    }
    .social-icon {
      display: inline-block;
      margin-left: 14px;
    }
    .social-icon a {
      width: 42px;
      height: 42px;
      background: rgba(217, 217, 217, 0.1);
      display: inline-flex;
      border-radius: 50%;
      margin-right: 6px;
      align-items: center;
      justify-content: center;
      line-height: 1;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .social-icon a::before {
      content: "";
      width: 42px;
      height: 42px;
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }
    .social-icon a:hover::before {
        transform: scale(1);
    }
    .social-icon a img {
      width: 40%;
      z-index: 1;
      transition: 0.3s ease-in-out;
    }
    .social-icon a:hover img {
      filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
    }
    p {
      font-weight: 400;
      font-size: 14px;
      color: #B8B8B8;
      letter-spacing: 0.5px;
      margin-top: 20px;
    }
  }
}
</style>