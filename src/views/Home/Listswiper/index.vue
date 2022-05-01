<template>
  <div class="list-swiper">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <div class="swiper-container" id="mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/swiper1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper4.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper5.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper6.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper7.jpg" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="swiper2-container" id="mySwiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper1.jpg" alt="" /></li>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
                <li><img src="./images/minswiper2.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="right">
        <div class="adPic">
          <img src="./images/asidead1.jpg" alt="" />
        </div>
        <div class="report">
          <div class="reporttitle">
            <span :class="{ active: active }" @mouseenter="changeInfo(1)"
              >信息公告</span
            >
            <span :class="{ active: !active }" @mouseenter="changeInfo(0)"
              >服务公告</span
            >
          </div>
          <div class="reportInfo" v-if="active">
            <ul>
              <li><a href="javascript:;">+书香节开门红 图书每满100减50</a></li>
              <li><a href="javascript:;">+书香节开门红 童书每满100减50</a></li>
              <li><a href="javascript:;">+学习正当季 外语好书每满100-50</a></li>
              <li><a href="javascript:;">+文艺社科生活好书每满100减50</a></li>
            </ul>
          </div>
          <div class="serviceInfo" v-else>
            <ul class="servicelist">
              <li><a href="javascript:;">+关于谨防诈骗的重要提示</a></li>
              <li><a href="javascript:;">+话费卡兑换当当礼品卡</a></li>
              <li><a href="javascript:;">+多种商品，礼品卡支付更优惠！</a></li>
              <li><a href="javascript:;">+【虚假发货】-处罚公告</a></li>
            </ul>
          </div>
        </div>
        <div class="swiper3-container" id="mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/asideswiper1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/asideswiper2.jpg" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Listswiper",
  data() {
    return {
      active: true,
    };
  },
  mounted() {
    var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      effect: "fade",
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    var mySwiper2 = new Swiper(document.querySelector(".swiper2-container"), {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      effect: "fade",
      autoplay: true,
      // 如果需要分页器
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    mySwiper.controller.control = mySwiper2;
    mySwiper2.controller.control = mySwiper;

    var mySwiper3 = new Swiper(document.querySelector(".swiper3-container"), {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
   

    setInterval(() => {
      this.active = !this.active;
    }, 5000);
  },
  methods: {
    changeInfo(x) {
      if (x == 1) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.list-swiper {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 200px;

    .center {
      box-sizing: border-box;
      width: 800px;
      height: 100%;
      padding: 0;
      float: left;
      .swiper2-container {
        position: relative;
        top: 0;
        left: 0;
        .swiper-slide {
          li {
            cursor: pointer;
          }
          li:hover {
            border: 1px solid rgb(171, 171, 171);
          }
        }
        .swiper-button-prev {
          top: 72px;
          left: 12px;
        }
        .swiper-button-next {
          top: 72px;
          right: 15px;
        }
        ul {
          margin-top: -9px;
          li {
            width: 24.89%;
            float: left;
            border: 1px solid #ccc;
            border-left: 0;
            overflow: hidden;
          }
        }
      }
    }

    .right {
      float: left;
      width: 200px;
      height: 105%;
      background-color: #fff;
      margin-left: -3px;
      border-right: 1px solid #ccc;
      overflow: hidden;
      .report {
        width: 100%;
        height: 164px;
        border-bottom: 1px solid #ccc;
        .reporttitle {
          width: 100%;
          height: 35px;
          text-align: center;
          span {
            float: left;
            width: 50%;
            font-size: 16px;
            line-height: 35px;
            height: 35px;
            cursor: pointer;
            background-color: rgb(232, 231, 231);
          }
          .active {
            background-color: #fff;
          }
        }
        .reportInfo,
        .serviceInfo {
          ul {
            padding-top: 5px;
            padding: 0 8px;
            li {
              width: 100%;
              height: 25px;
              line-height: 25px;
              text-align: left;
              overflow: hidden;
            }
          }
          .servicelist {
            a {
              color: rgb(255, 40, 50);
            }
          }
        }
      }

      #mySwiper3 {
        width: 198px;
        position: absolute;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>