<template>
  <div :class="{'scolled' : scolled}" class="navbar">
    <div class="container">
      <a href="/" class="logo">
        <img src="../../../assets/img/logo.svg" alt="" />
      </a>
      <div class="nav">
        <div class="menu">
          <ul>
            <li :class="[activeLink === 'introduce' ? 'active' : '']" @click="updateActive('introduce')">Home</li>
            <li :class="[activeLink === 'recommend' ? 'active' : '']" @click="updateActive('recommend')">Recommend</li>
            <li :class="[activeLink === 'learn' ? 'active' : '']">
              <el-dropdown @command="goLaern" placement="bottom-start">
                <span class="el-dropdown-link">Learn</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="front-end">front-end</el-dropdown-item>
                  <el-dropdown-item command="java">java</el-dropdown-item>
                  <el-dropdown-item command="database">database</el-dropdown-item>
                  <el-dropdown-item command="algorithm">algorithm</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li :class="[activeLink === 'tattle' ? 'active' : '']">
              <el-dropdown @command="goTattle" placement="bottom-start">
                <span class="el-dropdown-link" >Tattle</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="life">life</el-dropdown-item>
                  <el-dropdown-item command="film-review">film-review</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li :class="[activeLink === 'message' ? 'active' : '']" @click="updateActive('message')">Message</li>
          </ul>
        </div>
        <div class="text">
          <div class="social-icon">
            <a href="#"><img src='../../../assets/img/nav-icon1.svg' alt="" /></a>
            <a href="#"><img src='../../../assets/img/nav-icon2.svg' alt="" /></a>
            <a href="/home/picture"><img src='../../../assets/img/nav-icon3.svg' alt="picture"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBlogNavbar',

  data() {
    return {
      activeLink: 'home',
      scrollTop: 0,
      scolled: false
    };
  },

  mounted () {
    this.handleScroll()
  },
  watch: {
    scrollTop: {
      handler(newVal)
      {
        if(newVal > 50)
        {
          this.scolled = true
        }else{
          this.scolled = false
        }
      }
    }
  },

  methods: {
    handleScroll () {
      window.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY;
      });
    },

    updateActive(name){
      this.activeLink = name
      console.log(name);
      this.$router.push(`/home/${name}`)
    },

    // 点击下拉菜单触发的事件
    goLaern(command){
      this.activeLink = 'learn'
      this.$router.push({
        path: '/home/learn',
        query: {
          category: command
        }
      })
    },

    goTattle(command){
      this.activeLink = 'tattle'
      this.$router.push({
        path: '/home/tattle',
        query: {
          category: command
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  padding: 18px 0px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  transition: 0.32s ease-in-out;
  .container{
    display: flex;
    margin: 0 110px;
    height: 80px;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 9%;
    }
    .nav{
      // 导航菜单
      display: flex;
      align-items: center;
      .menu{
        display: inline-block;
        margin-left: 100px;
        li{
          float: left;
          font-weight: 400;
          color: #fff !important;
          letter-spacing: 0.8px;
          padding: 0 25px;
          font-size: 18px;
          opacity: 0.75;
        }
        li:hover{
          opacity: 1;
        }

        .active{
          opacity: 1;
        }
      }

      // 联系我们
      .text {
        display: flex;
        align-items: center;
        .social-icon {
          display: inline-block;
          margin-left: 14px;
          a {
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
            img {
              width: 40%;
              z-index: 1;
              transition: 0.3s ease-in-out;
            }
          }
          a:hover img {
            filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
          }
          a::before {
            content: "";
            width: 42px;
            height: 42px;
            position: absolute;
            background-color: #ffffff;
            border-radius: 50%;
            transform: scale(0);
            transition: 0.3s ease-in-out;
          }
          a:hover::before {
            transform: scale(1);
          }
        }

        button {
          font-weight: 700;
          color: #fff;
          border: 1px solid #fff;
          padding: 18px 34px;
          font-size: 18px;
          margin-left: 18px;
          position: relative;
          background-color: transparent;
          transition: 0.3s ease-in-out;
          span {
            z-index: 1;
          }
        }
        button::before {
          content: "";
          width: 0%;
          height: 100%;
          position: absolute;
          background-color: #fff;
          left: 0;
          top: 0;
          z-index: -1;
          transition: 0.3s ease-in-out;
        }

        button:hover {
          color: #121212;
        }
        button:hover::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
  }
}
.scolled {
  padding: 0px 0px;
  background-color: #121212;
}

/deep/ .el-dropdown-link{
  color: #fff;
  font-weight: 400;
  font-size: 18px;
}

/deep/ .popper__arrow{
  display: none;
}

.el-dropdown-menu{
  background-color: #121212 !important;
  border: 0 !important; 
}

.el-dropdown-menu__item{
  color: #fff !important;
  opacity: 0.7;
  padding: 0 20px 0 10px;
}
.el-dropdown-menu__item:hover{
  background-color: #222435 !important;
  
}
</style>