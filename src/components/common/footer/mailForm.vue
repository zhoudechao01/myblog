<template>
  <div class="newsletter-bx">
    <div class="text">
        <h3>Subscribe to our Newsletter<br>& Never miss latest updates</h3>
    </div>
    <div class="form">
      <input type="email" placeholder="Email Address" />
      <button type="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogMailForm',

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
.newsletter-bx {
  width: 100%;
  background: #FFFFFF;
  border-radius: 55px;
  color: #121212;
  padding: 85px 125px;
  margin-bottom: 80px;
  margin-top: -122px;
  z-index: 999;
  display: flex;
  .text{
    h3 {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1.2em;
    }
  }
  .form{
    width: 50%;
    background: #fff;
    padding: 5px;
    margin-left: 60px;
    border-radius: 20px;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      color: #121212;
      font-weight: 500;
      background: transparent;
      border: 0;
      padding: 0 15px;
    }
    button {
      background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
      padding: 20px 65px;
      color: #fff;
      font-weight: 500;
      letter-spacing: 0.5px;
      border-radius: 18px;
    }
  }

  .form::before {
    content: "";
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
  }

  .form::after {
    content: "";
    background: #fff;
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>