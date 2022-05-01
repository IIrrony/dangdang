<template>
  <div class="Bookinfo">
    <div class="bookinfoHead">
      <div class="topControl">
        <ul class="sortBox clearfix">
          <li class="title">综合排序</li>
          <li>销量</li>
          <li>好评</li>
          <li class="time">出版时间</li>
          <li>价格</li>
          <li class="range">
            <input type="text" />
            <input type="text" />
          </li>
          <li class="locate">配送至：北京</li>
        </ul>
        <div class="bottom">
          <input type="checkbox" name="" id="" />只看有货
          <input type="checkbox" name="" id="" />促销
          <input type="checkbox" name="" id="" />特卖
          <input type="checkbox" name="" id="" />当当发货
        </div>
      </div>
      <div class="list">
        <span>大图</span>
        <span>列表</span>
      </div>
    </div>
    <div class="topAd">
      <a href="javascript:;">查看全部特价商品</a>
    </div>
    <div class="bookinfoBody">
      <div class="bodyLeft">
        <ul>
          <li v-for="(item, index) in bookinfo" :key="index">
            <img :src="item.img" alt="" />
            <div class="infomation">
              <div class="titleinfo">
                <a href="javascript:;">
                  <span>{{item.title}}</span>
                  {{item.titleinfo}}
                </a>
              </div>
              <div class="price">
                <span class="nowprice">¥{{item.nowprice}}</span>
                <span class="orderprice">{{item.orderprice}}</span>
              </div>

              <div class="author">
                <span>{{item.author}}</span>
                <span>{{item.time}}</span>
                <span>{{item.press}}</span>
              </div>
              <div class="comment">{{item.comment}}</div>
              <div class="shop">
                <span class="owner">{{item.owner}}</span>
                <span class="quan">{{item.quan}}</span>
                <span class="jian">{{item.jian}}</span>
              </div>
              <div class="content">
                {{item.content}}
              </div>
              <div class="bookfoot">
                <button class="addshopcart" @click="addtoshopcart(index)">加入购物车</button>
                <button class="subcribe">收藏</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bodyRight">
        <div class="title">推广商品</div>
        <ul>
          <li v-for="(item, index) in asidebookinfo" :key="index">
            <img :src="item.img" alt="" />
            <div class="booktitle">
              <a href="javascript:;">{{item.title}}</a>
            </div>
            <div class="bookprice">
              {{item.price}}
              <span>定价：</span>
              <span class="preprice">{{item.preprice}}</span>
            </div>
            <div class="discount">
              <span class="owner">{{item.owner}}</span>
              <span class="quan">{{item.quan}}</span>
              <span class="jian">{{item.jian}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Bookinfo",
  data () {
    return {
    }
  },
  methods: {
    addtoshopcart(index){
      this.$router.push({
        name:"shopcar",
        query:{
          index
        }
      })
      this.$store.dispatch('addbookcart', index)
    }
  },
  computed: {
    ...mapState({
      bookinfo: (state) => state.bookinfo,
      asidebookinfo: (state) => state.asidebookinfo,
    }),
  }
};
</script>

<style lang="less" scoped>
.Bookinfo {
  width: 1200px;
  height: 1500px;
  margin: 0 auto;
  .bookinfoHead {
    width: 100%;
    height: 35px;
    background-color: rgb(245, 245, 245);
    line-height: 35px;
    text-align: center;
    ul {
      float: left;
      li {
        float: left;
        height: 100%;
        width: 50px;
        border-right: 1px dotted #ccc;
      }
      .time,
      .title {
        width: 70px;
        color: red;
      }
      .range {
        width: 105px;
        input {
          float: left;
          width: 40px;
          margin: 0px 5px;
          margin-top: 8px;
          outline: none;
        }
      }
      .locate {
        width: 90px;
      }
    }
    .bottom {
      display: flex;
      float: left;
      align-items: center;
      input {
        margin-left: 20px;
      }
    }
    .list {
      float: right;
      span {
        display: inline-block;
        width: 60px;
      }
    }
  }
  .topAd {
    width: 1200px;
    height: 32px;
    background: url("./images/bgad.jpg") rgb(213, 200, 255) no-repeat top left;
    a {
      display: block;
      width: 600px;
      height: 100%;
      margin: 0 auto;
      font-size: 15px;
      color: #fff;
      line-height: 32px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .bookinfoBody {
    width: 1200px;
    margin-top: 20px;
    .bodyLeft {
      width: 965px;
      float: left;

      ul {
        li {
          display: block;
          width: 100%;
          height: 242px;
          padding: 20px;
          padding-right: 10px;
          transition: all 0.2s linear;
          img {
            display: inline-block;
          }
          .infomation {
            width: 720px;
            text-align: left;
            float: right;
            .titleinfo {
              height: 30px;
              font-size: 14px;
              display: flex;
              align-items: center;
              a {
                span {
                  font-size: 16px;
                  color: red;
                }
              }
              a:hover {
                text-decoration: underline;
              }
            }
            .price {
              height: 30px;
              display: flex;
              align-items: center;
              .nowprice {
                color: red;
                font-size: 18px;
                font-weight: 600;
                margin-right: 10px;
              }
              .orderprice {
                color: #666;
              }
            }
            .author {
              height: 20px;
              line-height: 20px;
            }
            .shop {
              margin: 3px 0;
              span {
                margin-right: 6px;
                display: inline-block;
                padding: 0 2px;
                border-radius: 3px;
              }
              .owner {
                border: 1px solid red;
                color: red;
              }
              .quan,
              .jian {
                color: #fff;
                background-color: red;
              }
            }
            .content {
              font-size: 15px;
              margin: 8px 0;
              height: 38px;
              overflow: hidden;
            }
            .bookfoot {
              button {
                outline: none;
                cursor: pointer;
                margin-right: 10px;
                height: 28px;
                font-size: 14px;
              }
              .addshopcart {
                width: 100px;
                background-color: red;
                color: #fff;
                border: 0;
                border-radius: 5px;
              }
              .addshopcart:hover {
                background-color: rgb(240, 0, 0);
              }
              .subcribe {
                width: 80px;
                background: #ffedee;
                color: #ff2832;
                border: 1px solid #ff2832;
                border-radius: 3px;
              }
              .subcribe:hover {
                background-color: rgb(255, 215, 215);
              }
            }
          }
        }
        li:hover {
          background-color: rgb(248, 248, 248);
        }
      }
    }
    .bodyRight {
      width: 220px;
      border: 1px solid rgb(230, 230, 230);
      float: right;
      .title {
        width: 100%;
        height: 40px;
        line-height: 35px;
        padding-left: 10px;
        font-size: 16px;
        background-color: rgb(230, 230, 230);
      }
      ul {
        li {
          display: block;
          padding: 10px;
          height: 300px;
          img {
            border: 1px solid rgb(233, 233, 233);
          }
          .booktitle {
            margin: 5px 0;
            height: 30px;
            overflow: hidden;
          }
          .bookprice {
            color: red;
            font-size: 14px;
            font-weight: 600;
            span {
              font-size: 12px;
              color: #666;
              font-weight: normal;
              margin-left: 5px;
            }
            .preprice {
              text-decoration: line-through;
              margin-left: 0;
            }
          }
          .discount {
            margin: 3px 0;
            span {
              margin-right: 6px;
              display: inline-block;
              padding: 0 2px;
              border-radius: 3px;
            }
            .owner {
              border: 1px solid red;
              color: red;
            }
            .quan,
            .jian {
              color: #fff;
              background-color: red;
            }
          }
        }
      }
    }
  }
}
</style>