<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <el-popover
            placement="bottom-start"
            width="300"
            trigger="hover"
            content="北京  天津  河北  山西 内蒙古
            辽宁 吉林 黑龙江 上海 江苏 浙江 安徽 福建 江西 山东 河南 湖北 湖南 
            广东 广西 海南 重庆 四川 贵州 云南 西藏 陕西 甘肃 青海 宁夏 新疆 台湾 香港 澳门 钓鱼岛"
          >
            <el-button slot="reference"
              >送至 北京<i class="el-icon-arrow-down el-icon--right"></i
            ></el-button>
          </el-popover>
        </div>
        <div class="typeList">
          欢迎光临当当，
          <span v-show="!isDisplay">{{ username }}</span>

          <span v-if="isDisplay">
            <router-link class="log" to="/login">登录</router-link>
          </span>

          <a v-else href="javascript:;" @click="Logout">退出登录</a>
          成为会员
          <a href="javascript:;">我的云书房</a>
          <el-dropdown>
            <span class="el-dropdown-link">
              我的当当<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>银铃铛抵现</el-dropdown-item>
              <el-dropdown-item>我的收藏</el-dropdown-item>
              <el-dropdown-item>我的余额</el-dropdown-item>
              <el-dropdown-item>我的评论</el-dropdown-item>
              <el-dropdown-item>礼品卡</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              当当拼团<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>当当拼团</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <a href="javascript:;">小说投稿</a>
          <el-dropdown>
            <span class="el-dropdown-link">
              企业采购<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>大宗采购</el-dropdown-item>
              <el-dropdown-item>礼品卡激活</el-dropdown-item>
              <el-dropdown-item>礼品卡采购</el-dropdown-item>
              <el-dropdown-item>礼品卡使用</el-dropdown-item>
              <el-dropdown-item>礼品卡专区</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <a href="javascript:;">客户服务</a>
          <a href="javascript:;">切换无障碍</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="当当网" to="/home">
          <img src="./images/logo.gif" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            placeholder="与未来谈谈心"
            v-model="keywords"
            @keyup.enter="goSearch"
          />
          <div class="allsorts">全部分类</div>
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </button>
        </form>
        <div class="hotSearch">
          <div class="hot">
            <span>热搜：</span>
            <a href="javascript:;">数据库原理概论</a>
            <a href="javascript:;">王道考研</a>
            <a href="javascript:;">围城</a>
            <a href="javascript:;">我们仨</a>
            <a href="javascript:;">格局</a>
          </div>
          <div class="highSearch">
            <a href="javascript:;">高级搜索</a>
          </div>
        </div>
      </div>

      <div class="shopCart">
        <router-link to="/shopcar">
          <div class="shopCar">
            <a href="javascript:;"
              >购物车{{ this.$store.state.shopcartBook.length }}</a
            >
          </div>
        </router-link>
        <div class="shopList">
          <a href="javascript:;">我的订单</a>
        </div>
      </div>
      <!-- <el-button :plain="true" style="border: 0; cursor: auto"></el-button> -->
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    goSearch() {
      if (this.keywords.trim() != "") {
        this.$router.push({
          name: "search",
          query: {
            keywords: this.keywords.trim(),
          },
        });
        this.$store.dispatch("getBook", this.keywords.trim());
      }
      this.keywords = "";
    },
    Logout() {
      localStorage.removeItem("token");
      this.$router.go(0);
      this.$message.success("退出登陆成功！！！");
    },
  },
  computed: {
    ...mapState({
      username: (state) => state.username,
      isDisplay: (state) => state.isDisplay,
    }),
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: rgb(249, 249, 249);
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid rgb(239, 239, 239);
    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;
        .el-button {
          background-color: rgb(249, 249, 249);
          border: 0;
          font-size: 7px;
        }
        .el-button:hover {
          color: #ea4a36;
        }

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;
        font-size: 5px;
        .el-dropdown-link {
          cursor: pointer;
          font-size: 6px;
          border-left: 1px solid #b3aeae;
          border-right: 1px solid #b3aeae;
          padding: 0 10px;
          li {
            font-size: 7px;
          }
        }
        .el-icon-arrow-down {
          font-size: 2px;
        }
        .log {
          padding: 0 2px;
          color: rgb(247, 5, 53);
        }
        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 362px;
        }
      }
    }

    .searchArea {
      float: left;
      margin-top: 25px;
      position: relative;
      left: 0;
      top: 0;

      .searchForm {
        overflow: hidden;
        input {
          box-sizing: border-box;
          width: 510px;
          font-size: 12px;
          text-indent: 5px;
          height: 38px;
          padding: 0px 4px;
          border: 2px solid rgb(255, 40, 50);
          float: left;

          &:focus {
            outline: none;
          }
        }

        .allsorts {
          position: absolute;
          top: 1.5px;
          left: 410px;
          line-height: 36px;
          font-size: 16px;
          color: #666;
          background-color: rgb(246,246,246);
          width: 100px;
          text-align: center;
          height: 35px;
          cursor: pointer;
          user-select: none;
        }

        button {
          height: 38px;
          width: 45px;
          background-color: rgb(255, 40, 50);
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;
          .icon {
            width: 25px;
            height: 25px;
            margin-top: 5px;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .hotSearch {
        width: 550px;
        height: 15px;
        align-items: center;
        // overflow: hidden;
        margin-top: 7px;
        .hot {
          display: inline-flex;
          float: left;
          width: 400px;
          span {
            display: block;
          }
          a {
            margin-right: 15px;
          }
        }
        .highSearch {
          float: right;
        }
      }
    }

    .shopCart {
      float: right;
      margin-top: 25px;
      width: 200px;
      height: 38px;

      .shopCar {
        float: left;
        width: 118px;
        height: 38px;
        cursor: pointer;

        a {
          color: #fff;
        }
        font-size: 15px;
        line-height: 38px;
        text-align: center;
        background-color: rgb(255, 40, 50);
      }
      .shopCar:hover {
        background-color: #fff;
        line-height: 34px;
        border: 2px solid #ccc;
        background-color: rgb(246, 246, 246);
        border-right: 0;
        a {
          color: rgb(255, 40, 50);
        }
      }
      .shopList {
        width: 82px;
        height: 38px;
        float: right;
        background-color: rgb(246, 246, 246);
        line-height: 35px;
        font-size: 14px;
        border: 2px solid #ccc;
        text-align: center;
      }
    }
  }
}
</style>