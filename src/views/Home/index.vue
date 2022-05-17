<template>
  <div>
    <div class="topBgpic" ref="bgTop" v-show="isshow"></div>
    <div class="backTop">
      <div class="saoma">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontscan"></use>
        </svg>
      </div>
      <div class="point" @click="goTop" v-show="show">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangjiantou_huaban"></use>
        </svg>
      </div>
      <div class="feedback">意见反馈</div>
    </div>
    <div class="asidead">
      <div class="adimg">
        <img src="./images/asidead.jpg" alt="">
      </div>
      <div class="listinfo">
        <ul>
          <li class="first"></li>
          <li class="second"></li>
          <li class="thrid"></li>
          <li class="forth"></li>
          <li class="fifth"></li>
        </ul>
      </div>
    </div>
    <div class="asideList" v-if="show">
      <ul>
        <li>
          <a href="#aaa">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tushu"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#bbb">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-clothes"></use>
            </svg>
          </a>
          
        </li>
        <li>
          <a href="#ccc">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yijia"></use>
            </svg>
          </a>
          
        </li>
        <a href="#ddd">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg>
        </a>
        <a>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
        </a>
      </ul>
    </div>
    <div class="footad" v-show="hide">
      <span @click="hideAd">×</span>
    </div>
    <Header/>
    <TypeNav />
    <div id="homeBg"><Listswiper /></div>
    <div id="aaa"></div>
    <Bargain/>
    <div id="bbb"></div>
    <Dailygoods/>
    <div id="ccc"></div>
    <Foods/>
    <div id="ddd"></div>
    <Recommend/>
    <Footinfo />
    
  </div>
</template>

<script>
import Listswiper from "@/views/Home/Listswiper";
import Bargain from "@/views/Home/Bargain";
import Recommend from "@/views/Home/Recommend";
import Dailygoods from "@/views/Home/Dailygoods";
import Foods from "@/views/Home/Foods";
import { getProfile } from "@/api/index.js"


export default {
  name: "Home",
  data() {
    return {
      show: true,
      isshow:false,
      hide: false,
      isDisplay: true,
      listimgs:[0,1,2,3,4],
    };
  },
  components: {
    Listswiper,
    Bargain,
    Recommend,
    Dailygoods,
    Foods,
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
    let timer1 = setTimeout(()=>{
      this.isshow = true
      this.hide = true
    },1500)
    let timer2 = setTimeout(()=>{
      this.$refs.bgTop.style.height = "200px"
    },5000)

    // 渲染页面就 获取 用户信息
    if(localStorage.token){
      getProfile().then((res)=>{
        if(res.code === 200){
          this.$store.dispatch("changeDispaly")
          // this.$message.success(res.data.msg)
          this.$store.dispatch('getUsername', res.data.userinfo.username)
        }else{
          this.$message.error(res.data.msg)
        }
      })
    }

  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 150 ? (this.show = true) : (this.show = false);
    },
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    hideAd(){
      this.hide = false
    }
  }
};
</script>

<style lang="less" scoped>
#homeBg {
  width: 100%;
  height: 488px;
  margin: 0 auto;
  background: url("./images/bgpic.jpg") no-repeat top center;
  z-index: -11;
}
.topBgpic{
  width: 100%;
  height: 300px;
  transition: all .4s linear;
  background: url("./images/topBg.jpg") no-repeat top center;
}

.asidead{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  .listinfo{
    ul{
      li{
        display: block;
        width: 34px;
        height: 34px;
        background: url("./images/listimgs.png") no-repeat;
      }
      .second{
        background-position: 0 -34px;
      }
      .thrid{
        background-position: 0 -68px;
      }
      .forth{
        background-position: 0 -102px;
      }
      .fifth{
        background-position: 0 -136px;
      }
    }
  }
}
.asideList {
  position: fixed;
  bottom: 20px;
  left: 50%;
  margin-left: -632px;
  z-index: 2000;
  width: 32px;
  height: 180px;
  transition: all .2s ease;
  ul {
    a {
      display: block;
      text-align: center;
      background-color: rgb(235, 235, 235);
      padding: 3px 0;
      cursor: pointer;
      .icon {
        width: 25px;
        height: 25px;
      }
    }
    a:hover{
      background-color: rgb(255,40,50);
    }
  }
}
.backTop {
  position: fixed;
  display: flex;
  bottom: 10px;
  width: 40px;
  height: 100px;
  right: 0;
  overflow: hidden;
  flex-direction: column;
  align-items: center;

  z-index: 2000;
  .saoma,
  .point {
    text-align: center;
    width: 80%;
    height: 30%;
    background-color: rgb(71, 71, 71);
    padding: -5px 0;
    cursor: pointer;
    .icon {
      width: 25px;
      height: 25px;
    }
  }
  .feedback {
    width: 80%;
    height: 35px;
    color: #fff;
    background-color: rgb(71, 71, 71);
    text-align: center;
  }
}
.footad{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  z-index: 1150;
  background: url("./images/ad1.gif") top center no-repeat rgba(27, 27, 27, 0.5);
  span{
    position: absolute;
    right: 50%;
    margin-right: -465px;
    top: 10px;
    font-size: 28px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border: 1px solid #fff;
    border-radius: 12.5px;
  }
}
</style>