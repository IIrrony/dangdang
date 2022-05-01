<template>
  <div class="Carinfo">
    <div class="carbox" v-if="bookinfo.length">
      <div class="CarinfoHead">
        <div class="headbox">
          <span>配送地址： 重庆市南岸区崇文路2号重庆邮电大学</span>
        </div>
      </div>
      <div class="CarinfoBody">
        <div class="islogin" v-show="isDisplay">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jinggao"></use>
          </svg>
          <span>您还没有登录！登录后购物车的商品将保存到您的帐号中</span>
          <router-link to="/login">立即登录</router-link>
        </div>
        <div class="shoptitle">
          <ul>
            <li class="f1">
              <input
                type="checkbox"
                name=""
                id=""
                @change="selectall"
                :checked="isall"
              />
              全选
            </li>
            <li class="f2">商品信息</li>
            <li class="f3">单价（元）</li>
            <li class="f3">数量</li>
            <li class="f3">金额（元）</li>
            <li class="f4">操作</li>
          </ul>
        </div>
        <div class="cartgoods">
          <table>
            <tbody v-for="(item, index) in shopcartBook" :key="index">
              <tr class="treetitle">
                <td class="row1"></td>
                <td class="row_img">
                  <span>满N件折</span>
                </td>
                <td class="event">
                  <a href="javascript:;"
                    >4.18-4.25图书1件5折，满1.00件享5.0折</a
                  >
                </td>
              </tr>
              <tr class="goodsinfo">
                <td class="row1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    :checked="item.ischecked"
                    @change="ischeckall"
                    :index="index"
                  />
                </td>
                <td class="row_img">
                  <img :src="item.img" alt="" />
                </td>
                <td class="row_name">
                  <div class="bookname">
                    <a href="javascript:;"
                      >{{ item.title }}{{ item.titleinfo }}</a
                    >
                  </div>
                </td>
                <td class="row2">
                  <span class="price">¥{{ item.nowprice }}</span>
                  <div class="chuxiao">促销</div>
                </td>
                <td class="row2">
                  <span class="addjian">
                    <a
                      href="javascript:void(0)"
                      class="mins"
                      @click="changenumber(index, -1)"
                      >-</a
                    >
                    <input
                      autocomplete="off"
                      type="text"
                      :value="item.number"
                      minnum="1"
                      class="itxt"
                    />
                    <a
                      href="javascript:void(0)"
                      class="plus"
                      @click="changenumber(index, 1)"
                      >+</a
                    >
                  </span>
                </td>
                <td class="row2">
                  ¥{{ Math.round(item.number * item.nowprice * 100) / 100 }}
                </td>
                <td class="row3">
                  <div class="move">移入收藏</div>
                  <div class="delete">
                    <a href="javascript:;" @click="delbook(index)">删除</a>
                  </div>
                </td>
              </tr>
              <tr class="addprice">
                <td class="row1"></td>
                <td class="row_img">
                  <span></span>
                </td>
                <td class="event">
                  购买此商品,可享促销
                  <span>加价购</span>
                </td>
              </tr>
              <tr class="point">
                <td class="row1"></td>
                <td class="row_img"><span></span></td>
                <td class="point_good">
                  购买指定商品，再买100.00元，享受
                  <span>满100.00减50.00元</span>
                </td>
                <td class="row2"></td>
                <td class="row2"></td>
                <td class="row2"></td>
                <td class="row3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="totalprice" ref="totals">
        <div class="box">
          <div class="boxleft">
            <span class="quanxuan"
              ><input
                type="checkbox"
                name=""
                id=""
                :checked="isall"
                @change="selectall"
              />全选</span
            >
            <a href="javascript:;" class="dels" @click="delbookss">批量删除</a>
            <span
              >已选择
              <span>{{ checkednum }}</span>
              件商品</span
            >
          </div>
          <div class="boxright">
            <div class="subbox">
              <div class="allprice">
                总计(不含运费)：<span>¥{{ totalprice }}</span>
              </div>
              <div class="jianprice">已节省：¥0.00</div>
            </div>
            <a href="javascript:;" @click="paymoney">结算</a>
          </div>
        </div>
      </div>
    </div>
    <div class="nonecar" v-else>
      <div class="empty">
        <p>您的购物车还是空的，您可以：</p>
        <span v-show="this.$store.state.isDisplay">
          <a href="/#/login" class="loginin">立即登录</a>
          <span>登录后购物车的商品将保存到您的账号中，或者</span>
        </span>
        
        
        <a href="/#/home">去逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Carinfo",
  data() {
    return {
      bookinfo: this.$store.state.shopcartBook,
    };
  },
  updated() {
    this.bookinfo = this.$store.state.shopcartBook;
  },
  methods: {
    changenumber(index, type) {
      this.$store.dispatch("changenumber", { index, type });
    },
    selectall(event) {
      this.$store.dispatch("selectall", event.target.checked);
    },
    ischeckall(event) {
      this.$store.dispatch("ischecksall", {
        index: event.target.attributes.index.value,
        checked: event.target.checked,
      });
    },
    delbook(index) {
      this.$alert("确认删除吗？")
        .then((action) => {
          this.$message({
            type: "success",
            message: "删除成功！",
          });
          this.$store.dispatch("delbook", index);
        },)
        .catch(()=>{
          this.$message({
            type: "info",
            message: "取消删除！",
          });
        })
    },
    delbookss() {
      this.$alert("确认删除吗？")
        .then((action) => {
          this.$message({
            type: "success",
            message: "删除成功！",
          });
          this.$store.dispatch("delbookss");
        },)
        .catch(()=>{
          this.$message({
            type: "info",
            message: "取消删除！",
          });
        })
    },
    paymoney() {
      if (!localStorage.token) {
        this.$router.push("/login");
        this.$message.info("未登录，请登录哦！！！！");
      } else {
        this.$message.success("结算成功！！！");
        this.$router.push("/home");
      }
    },
  },
  computed: {
    ...mapState({
      isDisplay: (state) => state.isDisplay,
      shopcartBook: (state) => state.shopcartBook,
    }),
    isall() {
      if (!this.bookinfo.length) return false;
      for (let i = 0; i < this.bookinfo.length; i++) {
        if (!this.bookinfo[i].ischecked) return false;
      }
      return true;
    },
    checkednum() {
      if (!this.bookinfo.length) return 0;
      let arr = this.bookinfo.filter((item) => {
        return item.ischecked;
      });
      return arr.reduce((sum, e) => sum + Number(e.number || 0), 0);
    },
    totalprice() {
      if (!this.bookinfo.length) return 0;
      let arr = this.bookinfo.filter((item) => {
        return item.ischecked;
      });
      let res = arr.reduce(
        (sum, e) => sum + Number(e.number || 0) * e.nowprice,
        0
      );
      return Math.round(res * 100) / 100;
    },
  },
};
</script>

<style lang="less" scoped>
.Carinfo {
  width: 100%;
  margin: 0 auto;

  .carbox {
    .CarinfoHead {
      width: 100%;
      height: 55px;
      background-color: rgb(250, 250, 250);
      .headbox {
        width: 960px;
        height: 100%;
        margin: 0 auto;
        span {
          float: left;
          margin-top: 12px;
          border: 1px solid #ccc;
          padding: 5px 10px;
          border-radius: 15px;
        }
      }
    }

    .CarinfoBody {
      width: 960px;
      margin: 0 auto;
      .islogin {
        display: flex;
        align-items: center;
        width: 100%;
        height: 34px;
        line-height: 34px;
        color: #323232;
        background-color: #fff5f5;
        border: 1px solid #ffecec;
        margin: 10px 0;
        padding: 0 8px;
        .icon {
          width: 20px;
          height: 20px;
        }
        span {
          margin: 0 10px;
        }
        a {
          display: inline-block;
          width: 62px;
          height: 22px;
          line-height: 22px;
          display: inline-block;
          background: #ff2832;
          border-radius: 2px;
          color: #fff;
          text-align: center;
        }
        a:hover {
          background-color: #d21f2b;
          text-decoration: underline;
        }
      }

      .shoptitle {
        width: 100%;
        height: 36px;
        margin: 0 auto;
        ul {
          li {
            float: left;
            height: 100%;
            line-height: 36px;
          }
          .f1 {
            width: 252px;
            display: flex;
            align-items: center;
            input {
              margin-right: 5px;
            }
          }
          .f2 {
            width: 240px;
          }
          .f3 {
            width: 135px;
            text-align: center;
          }
          .f4 {
            width: 50px;
            text-align: center;
          }
        }
      }

      .cartgoods {
        width: 960px;
        margin: 0 auto;
        table {
          list-style: none;
          width: 100%;
          border: 1px solid #ebebeb;
          background-color: #fafafa;
          margin-bottom: 20px;
          tbody {
            width: 100px;
            height: 250px;
            margin: 40px 0;
            tr {
              width: 100%;
              .row1 {
                width: 53px;
                text-align: center;
              }
              .row2 {
                width: 132px;
                vertical-align: top;
                text-align: center;
                padding-top: 20px;
                .addjian {
                  display: inline-block;
                  width: 96px;
                  height: 30px;
                  border: 1px solid #ddd;
                  .mins {
                    height: 28px;
                    color: #666;
                    width: 28px;
                    float: left;
                    padding: 7px;
                  }
                  input {
                    border: 1px solid #ddd;
                    width: 38px;
                    outline-style: none;
                    height: 28px;
                    border-top: 0;
                    border-bottom: 0;
                    float: left;
                    text-align: center;
                    font-size: 14px;
                  }
                  .plus {
                    color: #666;
                    float: left;
                    width: 28px;
                    height: 28px;
                    padding: 8px;
                  }
                }
              }
              .row_name {
                width: 335px;
                padding-left: 5px;
              }
              .row_img {
                position: relative;
                width: 101px;
                background: url("./images/tree.png") 43px -320px no-repeat;
              }
              .row3 {
                width: 72px;
                text-align: center;
                vertical-align: top;
                padding-top: 20px;
              }
            }
            .treetitle {
              position: relative;
              top: 10px;
              left: 0;
              height: 40px;
              .row_img {
                span {
                  position: absolute;
                  background-color: #ff2832;
                  height: 22px;
                  line-height: 22px;
                  color: #fff;
                  border-radius: 2px;
                  padding: 0 6px;
                  font-size: 12px;
                  width: auto;
                  left: 15px;
                  top: -1px;
                }
              }
              .event {
                width: 792px;
                height: 30px;
                padding-left: 5px;
                position: absolute;
                border-bottom: 1px solid #e4e4e4;
              }
            }
            .goodsinfo {
              height: 120px;
              .row_img {
                img {
                  width: 80px;
                  height: 80px;
                }
              }
              .row2 {
                .price {
                  color: rgb(180, 180, 180);
                  font-size: 10px;
                }
                .chuxiao {
                  width: 35px;
                  color: #ff2832;
                  margin-left: 50px;
                  margin-top: 5px;
                  border: 1px solid #ff2832;
                }
              }
              .row_name {
                .bookname {
                  width: 100%;
                  height: 36px;
                  margin-bottom: 45px;
                }
              }
            }
            .addprice {
              height: 35px;
              .row_img {
                background: url("./images/tree.png") 43px -292px no-repeat;
                span {
                  position: absolute;
                  width: 7px;
                  height: 7px;
                  background-color: #54d1ff;
                  border-radius: 4px;
                  top: 4px;
                  left: 40px;
                }
              }
              .event {
                padding-left: 5px;
                vertical-align: top;
                span {
                  background-color: #54d1ff;
                  padding: 2px 3px;
                  font-size: 10px;
                  border-radius: 3px;
                  color: #fff;
                }
              }
            }
            .point {
              height: 50px;
              .row_img {
                background: url("./images/tree_last.png") 43px -274px no-repeat;
                span {
                  position: absolute;
                  width: 7px;
                  height: 7px;
                  background-color: #ff2832;
                  border-radius: 4px;
                  top: 22px;
                  left: 40px;
                }
              }
              .point_good {
                padding-left: 5px;
                height: 45px;
                background-color: #fff5f4;
                span {
                  background-color: #ff2832;
                  padding: 2px 3px;
                  color: #fff;
                  border-radius: 3px;
                }
              }

              .row2 {
                background-color: #fff5f4;
              }
              .row3 {
                background-color: #fff5f4;
              }
            }
          }
        }
      }
    }

    .totalprice {
      width: 1085px;
      height: 72px;
      z-index: 10;
      margin: 20px auto;
      padding: 0 62px;
      background: url(./images/shopping_total.png) 0 center no-repeat;
      .box {
        width: 960px;
        margin: 0 auto;
        .boxleft {
          float: left;
          line-height: 58px;
          width: 430px;
          position: relative;
          .quanxuan {
            float: left;
            display: flex;
            align-items: center;
          }
          .dels {
            margin: 0 30px;
            margin-right: 80px;
          }
          span {
            span {
              color: #ff2832;
            }
          }
        }
        .boxright {
          float: right;
          margin: 18px 0 0;
          width: 530px;
          height: 50px;
          position: relative;
          .subbox {
            position: absolute;
            text-align: center;
            float: right;
            right: 150px;
            top: 0;
            .allprice {
              font-size: 16px;
              span {
                color: #ff2832;
                font-size: 17px;

                font-weight: 600;
              }
            }
          }
          a {
            display: block;
            position: absolute;
            right: 0;
            top: 2px;
            width: 116px;
            height: 38px;
            color: #fff;
            font: bold 18px/38px "Microsoft Yahei";
            background-color: #ff2832;
            border-radius: 2px;
            text-align: center;
          }
        }
      }
    }
  }

  .nonecar {
    .empty {
      width: 960px;
      height: 200px;
      padding: 55px 0 0 495px;
      margin: 40px auto;
      background: url("./images/empty.png") 100px 0px no-repeat;
      p {
        font-size: 15px;
        margin-bottom: 10px;
      }
      .loginin {
        width: 116px;
        height: 38px;
        display: inline-block;
        background-color: #ff2832;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 18px;
        margin: 20px 20px 0 0;
        border-radius: 2px;
      }
      .loginin:hover{
        background-color: rgb(210,31,43);
        text-decoration: underline;
      }
    }
  }
}
</style>