<template>
  <div class="Topheader">
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
          <a href="###">我的云书房</a>
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
          <a href="###">小说投稿</a>
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
          <a href="###">客户服务</a>
          <a href="###">切换无障碍</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { getProfile } from "@/api/index.js"

export default {
  name:"Topheader",
  methods: {
    Logout(){
      localStorage.removeItem('token')
      this.$router.go(0);
      this.$message.success("退出登陆成功！！！")
    }
  },
  mounted () {
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
  computed: {
    ...mapState({
      username: (state) => state.username,
      isDisplay: (state) => state.isDisplay,
    }),
  }
};
</script>

<style lang="less" scoped>
.top {
  background-color: rgb(249, 249, 249);
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid rgb(239, 239, 239);
  .container {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;

    .loginList {
      float: left;
      .el-button {
        background-color: rgb(249, 249, 249);
        border: 0;
        font-size: 8px;
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
</style>