<template>
  <div class="login">
    <div class="loginHeader">
      <div class="headerleft">
        <router-link title="当当网" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
        
      </div>
      <div class="headerright">
        <div class="change">
          <a href="###">切换无障碍</a>
        </div>
        <div class="research">
          <a href="###">
            <img src="./images/chat.png" alt="">
            <span>“登录页面“改进建议</span>
          </a>
        </div>
      </div>
    </div>
    <div class="loginContent">
      <a href="###"></a>
      <div class="loginBox">
        <div class="boxhead">
          <div class="zhuceright" v-if="btninfo!='登录'">
            <svg class="icon" aria-hidden="true" @click="backLogin">
              <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>立即注册</span>
            
          </div>
          <div class="loginright" v-else>
            <span :class="{active:active}" @click="changeloginWay1">密码登录</span>
            <span>|</span>
            <span :class="{active:!active}" @click="changeloginWay2">验证码登录</span>
          </div>
          
        </div>
        <div class="boxbody">
          <div class="pswlogin">
            <div class="pswbox">
              <div class="pswNum">
                <div class="l" @click="changelabel">
                  <label ref="shouji">{{shoujiInfo}}</label>
                  <input v-model="shoujihao" type="text" autofocus="autofocus" ref="myinput1" @focus="change" @blur="back">
                </div>
                <div class="r">
                  <span></span>
                </div>
              </div>
              <div class="pswPsw">
                <div class="l" @click="changelabel2">
                  <label ref="mima">{{mimaInfo}}</label>
                  <input v-model="mimaaaa" type="password" ref="myinput2" @focus="change2" @blur="back2" @keyup.enter="loglogin">
                </div>
                <div class="r">
                  <span>
                    <span class="yanzhengma" v-if="!active">
                      <a href="javascript:;">{{yanzhengma}}</a>
                    </span>
                    <svg v-else class="icon" aria-hidden="true" @click="changeicon">
                      <use :xlink:href="icons"></use>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="codelogin">
            <div class="codebox">
            </div>
          </div>
          <div class="contract">
            <span>
              登录即同意
              <a href="###">用户协议、隐私政策</a>
            </span>
          </div>
          <button @click="loglogin">{{btninfo}}</button>
          <div class="registerbox">
            <span @click="zhuce">立即注册</span>
            <span>|</span>
            <span>忘记密码</span>
          </div>
        </div>
        <div class="boxfoot">
          <a href="###">
            <img src="./images/wechat.png" alt="">
          </a>
          <a href="###">
            <img src="./images/alipay.png" alt="">
          </a>
          <a href="###">
            <img src="./images/qq.png" alt="">
          </a>
          <a href="###">
            <img src="./images/weibo.png" alt="">
          </a>
          <a href="###">
            <img src="./images/baidu.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- <el-button :plain="true" style="border:0; cursor:auto;"></el-button> -->
  </div>
  
</template>

<script>
import {getRegister, getLogin} from "@/api/index.js"

export default {
 name:"Login",
 data () {
   return {
     active:true,
     shoujiInfo:"手机号/昵称/邮箱",
     mimaInfo:"密码",
     icons:"#icon-yanjing",
     mimaaaa:"",
     shoujihao:"",
     yanzhengma:"请输入密码",
     btninfo:"登录"
   }
 },
 methods: {
   changelabel(){
     this.$refs.myinput1.focus()
   },
   change(){
     this.$refs.shouji.style.top = '7px'
     this.$refs.shouji.style.fontSize = '7px'
   },
   back(){
     if(this.shoujihao == ""){
       this.$refs.shouji.style.top = '15px'
       this.$refs.shouji.style.fontSize = '16px'
     }
   },
   changelabel2(){
     this.$refs.myinput2.focus()
   },
   change2(){
     this.$refs.mima.style.top = '7px'
     this.$refs.mima.style.fontSize = '7px'
   },
   back2(){
     if(this.mimaaaa == ""){
       this.$refs.mima.style.top = '15px'
       this.$refs.mima.style.fontSize = '16px'
     }
   },
   changeloginWay1(){
     this.mimaaaa = ""
     this.shoujihao = ""
     this.active = true
     this.shoujiInfo = "手机号/昵称/邮箱"
     this.back()
     this.back2()
   },
   changeloginWay2(){
     this.mimaaaa = ""
     this.shoujihao = ""
     this.active = false
     this.shoujiInfo = "手机号"
     this.back2()
     this.back()
   },
   changeicon(){
     if(this.icons == "#icon-yanjing1"){
       this.icons = "#icon-yanjing"
       this.$refs.myinput2.type = "password"
     }else{
       this.icons = "#icon-yanjing1"
       this.$refs.myinput2.type = "text"
     }
   },
   zhuce(){
     this.btninfo = "同意并注册"
     this.changeloginWay2()
   },
   backLogin(){
     this.btninfo = "登录"
     this.changeloginWay1()
   },
   async loglogin(){
     
     if(this.btninfo === "同意并注册"){
       let res = await getRegister(this.shoujihao, this.mimaaaa)
       if(res.code === 422){
         this.$message.error(res.data.msg)
         this.shoujihao = ''
         this.mimaaaa = ''
         this.back2()
         this.back()
       }else{
         this.$message.success(res.data.msg)
         this.backLogin()
       }
     }else{
       let res = await getLogin(this.shoujihao, this.mimaaaa)
       if(res.code === 422){
         this.$message.error(res.data.msg)
       }else{
         this.$message.success(res.data.msg)
         this.$store.dispatch('getUsername', res.data.user.username)
         localStorage.token = res.data.token
         this.$router.push('/home')
       }
     }
     
   }
 }
}
</script>

<style lang="less" scoped>
.login{
  width: 1200px;
  margin: 45px auto;
  user-select: none;
  .loginHeader{
    a:hover{
      color: #666;
    }
    
    height: 50px;
    .headerleft{
      float: left;
    }
    .headerright{
      height: 50px;
      float: right;
      
      text-align: right;
      font-size: 14px;
      justify-content: space-around;
      .change{
        display: block;
        height: 20px;
        margin: 4px 0;
      }
      .research{
        height: 20px;
        a{
          display: flex;
          align-items: center;
          img{
            width: 20px;
          }
        }
        
      }
    }
  }
  .loginContent{
    width: 1200px;
    height: 570px;
    margin: 35px auto;
    background: url("./images/get_login_ad.png") no-repeat top center;
    .loginBox{
      position: relative;
      margin-top: 58px;
      float: right;
      width: 420px;
      height: 470px;
      border-radius: 16px;
      padding: 0 40px;
      padding-top: 35px;
      box-shadow: 0 6px 20px 0 rgb(37 43 50 / 7%);      
      background-color: #fff;
      overflow: hidden;
      .boxhead{
        width: 100%;
        height: 40px;
        font-size: 18px;
        color: #666;
        text-align: center;
        margin-bottom: 10px;
        .zhuceright{
          .icon{
            position: absolute;
            top: -26px;
            left: 37px;
            width: 25px;
            cursor: pointer;
          }
          span{
            font-size: 20px;
            color: black;
            font-weight: 600;
            cursor: text;
          }
        }
        span{
          width: 50%;
          padding: 0 20px;
          cursor: pointer;
        }
        .active{
          color: black;
          font-weight: 600;
        }
      }
      .boxbody{
        width: 100%;
        height: 330px;
        .pswlogin{
          position: relative;
          top: 0;
          left: 0;
          .pswNum, .pswPsw{
            position: relative;
            width: 100%;
            height: 52px;
            margin: 20px 0;
            border-radius: 5px;
            font-weight: 400;
            padding: 10px 15px;
            background-color: #f9f9f9;
            color: #666;
            font-size: 15px;
            label{
              position: absolute;
              top: 16px;
              left: 15px;
              color: #666;
              z-index: 10;
              transition: all 0.1s linear;
            }
            input{
              position: absolute;
              left: 15px;
              bottom: 0;
              width: 90%;
              height: 52px;
              line-height: 0;
              padding-top: 20px;
              background-color: #f9f9f9;
              outline-style: none;
              border: 0;
            }
            .yanzhengma{
              width: 100px;
              position: absolute;
              top: 16px;
              right: -10px;
              a{
                color: #f3344a;
              }
              
            }
            .icon{
              width: 20px;
              position: absolute;
              top: -47px;
              right: 15px;
              cursor: pointer;
            }
          }
        }
        .contract{
          width: 100%;
          text-align: center;
          font-size: 13px;
        }
        button{
          width: 100%;
          height: 48px;
          font-size: 17px;
          outline-style: none;
          border: 0;
          color: #fff;
          border-radius: 5px;
          background-image: linear-gradient(90deg,#fe5447,#f3344a);
          box-shadow: 0 3px 8px 1px rgb(235 28 49 / 22%); 
          margin-top: 20px;
          cursor: pointer;
        }
        .registerbox{
          width: 100%;
          text-align: center;
          font-size: 8px;
          margin: 30px 0;
          span{
            width: 50%;
            padding: 0 10px;
            cursor: pointer;
          }
        }
      }
      .boxfoot{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 62px;
        padding-top: 17px;
        text-align: center;
        width: 100%;
        background-color: rgb(251,251,251);
        img{
          width: 28px;
          margin: 0 16px;
        }
      }
    }
  }
}
</style>