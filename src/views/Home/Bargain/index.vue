<template>
  <div class="bargain">
    <div class="holdLeft">
      <div class="holdlefthead">
        <span><img src="./images/title.png" alt=""></span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-naozhong"></use>
          </svg>
        </span>
        <span class="time">00:00:00</span>
        <ul>
          <li>00:00场</li>
          <li>08:00场</li>
          <li>12:00场</li>
          <li>16:00场</li>
          <li>20:00场</li>
        </ul>
      </div>
      <div class="holdleftbody">
        <ul>
          <li>
            <span class="pic"><img src="./images/pic2.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢20%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic3.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢25%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic1.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢40%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic2.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢50%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic1.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢99%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic1.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢89%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic3.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢99%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic2.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢99%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic1.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢99%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
          <li>
            <span class="pic"><img src="./images/pic3.jpg" alt=""></span>
            <span class="tiao">
              <div class="tiaodu"></div>
            </span>
            <div class="progress">已抢99%</div>
            <span class="title">
              <a href="javascript:;">西装裤女直筒宽松2021新款夏季</a>
            </span>
            <div class="price">
              <span class="priceonow">￥299</span>
              <span class="priceorigin">599</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="holdRight">
      <div class="holdrighthead">
        <div class="righttitle">厂商周</div>
        <div class="change">
          <span :class="{active:active}" @mouseenter="change"></span>
          <span :class="{active:!active}" @mouseenter="change"></span>
        </div>
      </div>
      <div class="holdrightbody1" v-if="active">
        <ul>
          <li><img src="./images/asidepic2.jpg" alt=""></li>
          <li><img src="./images/asidepic1.jpg" alt=""></li>
          <li><img src="./images/asidepic2.jpg" alt=""></li>
          <li><img src="./images/asidepic1.jpg" alt=""></li>
        </ul>
      </div>
      <div class="holdrightbody2" v-else>
        <ul>
          <li><img src="./images/asidepic1.jpg" alt=""></li>
          <li><img src="./images/asidepic1.jpg" alt=""></li>
          <li><img src="./images/asidepic2.jpg" alt=""></li>
          <li><img src="./images/asidepic2.jpg" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"bargain",
  data () {
    return {
      active:true
    }
  },
  mounted () {
    setInterval(()=>{
      this.change()
    },3000)
  },
  methods: {
    change(){
      this.active = !this.active
    }
  },
}
</script>

<style lang="less" scoped>
.bargain{
  width: 1200px;
  height: 550px;
  margin: 0px auto;
  margin-top: 30px;
  .holdLeft{
    width: 990px;
    float: left;
    .holdlefthead{
      width: 100%;
      height: 45px;
      line-height: 45px;
      border-bottom: 2px solid #000;
      span{
        float: left;
        width: 50px;
         line-height: 25px;
        img{
          width: 70px;
          height: auto;
        }
        .icon{
          width: 25px;
          height: 25px;
          font-weight: 600;
          margin-left: 40px;
         
        }
      }
      .time{
        font-size: 18px;
        margin-left: 20px;
        line-height: -8px;
      }
      ul{
        float: right;
        margin: 0 40px;
        li{
          width: 85px;
          height: 45px;
          line-height: 35px;
          margin: 0 30px;
          color: #666;
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;
          float: left;
        }
        li:hover{
          border-bottom: 3px solid rgb(255,40,50);
        }
      }
    }
    .holdleftbody{
      width: 100%;
      height: 100%;
      text-align: center;
      ul{
        width: 100%;
        float: left;
        margin-top: -5px;
        li{
          position: relative;
          top: 0;
          left: 0;
          float: left;
          width: 20%;
          height: 240px;
          border: 1px solid #ccc;
          .pic{
            display: block;
            padding-top: 10px;
            width: 100%;
            height: 180px;
            cursor: pointer;
          }
          
          .tiao{
            position: absolute;
            bottom: 70px;
            left: 20px;
            display: block;
            width: 80%;
            height: 10px;
            background-color: pink;
            border-radius: 5px;
            margin: 0 auto;
            .tiaodu{
              width: 25%;
              height: 100%;
              float: left;
              border-radius: 5px;
              background-color: rgb(255,40,50);
            }
          }
          .progress{
            position: absolute;
            bottom: 66px;
            left: 65px;
            width: 35%;
            height: 20px;
            background-color: rgb(250, 149, 166);
            border-radius: 10px;
            text-align: center;
            line-height: 20px;
            color: #fff;
          }
          .title{
            display: block;
            width: 90%;
            height: 15px;
            overflow: hidden;
            text-align: center;
            margin-left: 8px;
            font-size: 13px;
          }
          
          .priceonow{
            float: left;
            font-size: 18px;
            color: red;
            margin-top: 10px;
          }.priceorigin{
            float: left;
            color: #666;
            margin: 4px;
            margin-top: 15px;
            text-decoration: line-through;
          }
          
        }
        li:hover{
          border: 2px solid rgb(255,40,50);
        }
      }
    }
  }
  .holdRight{
    width: 210px;
    height: 100%;
    float: right;
    .holdrighthead{
      width: 100%;
      height: 45px;
      border-bottom: 2px solid red;
      .righttitle{
        float: left;
        color: red;
        font-size: 22px;
        padding-left: 15px;
      }
      .change{
        float: right;
        margin-right: 10px;
        span{
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #ccc;
          margin: 0 2px;
          margin-top: 15px;
          cursor: pointer;
        }
        .active{
          background-color: red;
        }
      }
    }
    .holdrightbody1, .holdrightbody2{
      ul{
        width: 100%;
        height: 100%;
        li{
          width: 100%;
          height: 120px;
          border: 1px solid #ccc;
          border-left: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all .3s linear;
          img{
            width: 100%;
            height: 100%;
          }
        }
        li:hover{
          padding-right: 10px;
          padding-left: -5px;
        }
      }
    }
  }
}
</style>