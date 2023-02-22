<template>
	<div class="login-register">
    <img class="img_01" src="../../assets/星球01.png" alt="Header Img" />
		<div class="contain">
			<div class="big-box" :class="{active:isLogin}">
				<div class="big-contain" key="bigContainLogin" v-if="isLogin">
					<div class="btitle">Login</div>
					<div class="bform login">
						<input type="email" placeholder="账号" v-model="form.useremail">
						<span class="errTips" v-if="emailError">* 账号名填写错误 *</span>
						<input type="password" placeholder="密码" v-model="form.userpwd">
						<span class="errTips" v-if="emailError">* 密码填写错误 *</span>
					</div>
					<button class="bbutton" @click="login">登录</button>
				</div>
				<div class="big-contain" key="bigContainRegister" v-else>
					<div class="btitle">创建账户</div>
					<div class="bform register">
						<input type="text" placeholder="用户名" v-model="form.username">
						<span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
						<input type="email" placeholder="邮箱" v-model="form.useremail">
						<input type="password" placeholder="密码" v-model="form.userpwd">
					</div>
					<button class="bbutton" @click="reguster">注册</button>
				</div>
			</div>
			<div class="small-box" :class="{active:isLogin}">
				<div class="small-contain" key="smallContainRegister" v-if="isLogin">
					<div class="stitle">你好，朋友!</div>
					<p class="scontent">开始注册，和我们一起旅行</p>
					<button class="sbutton" @click="changeType">注册</button>
				</div>
				<div class="small-contain" key="smallContainLogin" v-else>
					<div class="stitle">欢迎回来!</div>
					<p class="scontent">与我们保持联系，请登录你的账户</p>
					<button class="sbutton" @click="changeType">登录</button>
				</div>
			</div>
		</div>
    <img class="img_02" src="../../assets/星球01.png" alt="Header Img" />
	</div>
</template>

<script>
import { login, register } from '../../api/api.js'
import { setToken } from "@/utils/setToken.js";
import { Message } from 'element-ui'
	export default{
		name:'login-register',
		data(){
			return {
				isLogin:false,
				emailError: false,
				passwordError: false,
				existed: false,
				form:{
					username:'',
					useremail:'',
					userpwd:''
				}
			}
		},
		methods:{
			changeType() {
				this.isLogin = !this.isLogin
				this.form.username = ''
				this.form.useremail = ''
				this.form.userpwd = ''
			},
			login() {
				const self = this;
				if (self.form.useremail != "" && self.form.userpwd != "") {
          let params = {
            use_name: this.form.username,
            password: this.form.userpwd
          }
          login(params).then(res => {
              setToken("token", res.data.result.token);
              Message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
          })
				} else{
					alert("填写不能为空！");
				}
			},
			reguster(){
				const self = this;
				if(self.form.username != "" && self.form.useremail != "" && self.form.userpwd != ""){
          console.log();
          let params = {
            user_name: this.form.username,
            password: this.form.userpwd
          }
          register(params).then(res => {
            if(res.data.code === 0){
              Message({ message: res.data.message, type: "success" });
            }
            else{
              Message({ message: res.data.message, type: "warning" });
            }
          })
				} else {
					alert("填写不能为空！");
				}
			}
		}
	}
</script>

<style lang="less">
	.login-register{
    position: relative;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
    background-image: url('../../assets/login_bgc.jpg');
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
      .img_01{
      position: absolute;
      top: -150px;
      left: -600px;
      z-index: 1;
      animation: updown01 3s linear infinite;
    }
    @keyframes updown01 {
      0% {
          transform: translateY(-20px) scale(0.3);
      }
      50% {
          transform: translateY(20px) scale(0.3);
      }
      100% {
          transform: translateY(-20px) scale(0.3);
      }
    }
    .img_02{
      position: absolute;
      top: 300px;
      left: 600px;
      z-index: 1;
      animation: updown02 3s linear infinite;
    }
    @keyframes updown02 {
    0% {
        transform: translateY(10px) scale(0.1);
    }
    50% {
        transform: translateY(-10px) scale(0.1);
    }
    100% {
        transform: translateY(10px) scale(0.1);
    }
    }
	}
	.contain{
		width: 60%;
		height: 60%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
	}
	.big-box{
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
	}
	.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #fff
	}
	.login{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
  .register{
		width: 100%;
		height: 50%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.bform .errTips{
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}
	.bform input{
		width: 50%;
		height: 34px;
    margin-top: 10px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
	}

  .bform input:focus {
    background: rgba(255, 255, 255, 0.5);
    color: #121212;
  }

  .bform input::placeholder{
    color: #fff;
    opacity: 0.8;
  }
	.bbutton{
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	.small-box{
		width: 30%;
		height: 100%;
		background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.05);
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}
	.small-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.stitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
	}
	.scontent{
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
	}
	.sbutton{
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	
	.big-box.active{
		left: 0;
		transition: all 0.5s;
	}
	.small-box.active{
		left: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
	}
</style>