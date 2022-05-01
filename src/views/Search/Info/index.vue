<template>
  <div class="info">
    <div class="what">
      <h3>你是不是想找：</h3>
      <ul>
        <li><a href="javascript:;">边城</a><span>|</span></li>
        <li><a href="javascript:;">平凡的世界</a><span>|</span></li>
        <li><a href="javascript:;">活着</a><span>|</span></li>
        <li><a href="javascript:;">我们仨</a><span>|</span></li>
        <li><a href="javascript:;">百年孤独</a><span>|</span></li>
        <li><a href="javascript:;">白鹿原</a><span>|</span></li>
        <li><a href="javascript:;">月亮与六便士</a><span>|</span></li>
        <li><a href="javascript:;">星星离我们有多远</a></li>
      </ul>
    </div>
    <div class="infoContent">
      <div class="contentHead">
        <div class="headinfo">
          <h2>全部商品</h2>
          <div class="moreSearch">
            <a href="javascript:;">批量搜索</a>
          </div>
        </div>
        <div class="total">
          全部 > <span>围城</span>共 <span>11253</span>件商品
        </div>
      </div>
      <div class="contentBody">
        <ul>
          <li>
            <span class="title">分类</span>
            <span>家庭/婚姻</span>
            <span>青春爱情文学</span>
            <span>社会小说</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">其他分类</span>
            <span>图书</span>
            <span>电子书/听书</span>
            <span>玩具童车</span>
            <span>拍卖</span>
            <span>影视</span>
            <span>文化创意用品</span>
            <span>音乐</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">出版社</span>
            <span>人民文学出版社</span>
            <span>人民教育出版社</span>
            <span>作家出版社</span>
            <span>上海三联书店</span>
            <span>中国文联出版社</span>
            <span>生活61读书61新知三联书店</span>
            <span>民主与建设出版社</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">作者</span>
            <span>钱钟书</span>
            <span>杨绛</span>
            <span>沈从文</span>
            <span>吴敬梓</span>
            <span>匪我思存</span>
            <span>夏目漱石</span>
            <span>余秋雨</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">奖项</span>
            <span>国际安徒生大奖</span>
            <span>冰心儿童文学奖</span>
            <span class="right">更多</span>
          </li>
        </ul>
        <ul v-show="!show" ref="zhankaiInfo">
          <li>
            <span class="title">篇幅</span>
            <span>长篇</span>
            <span>短篇</span>
            <span>中篇</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">小说类型</span>
            <span>人性</span>
            <span>社会</span>
            <span>讽刺</span>
            <span>科幻</span>
            <span>历史</span>
            <span>中国原创推理</span>
            <span>家庭</span>
            <span class="right">更多</span>
            <span class="more">多选</span>
          </li>

          <li>
            <span class="title">品牌</span>
            <span>作家榜经典</span>
            <span>新经典</span>
            <span>三联书店</span>
            <span>记忆坊</span>
            <span>未读</span>
            <span>理想国</span>
            <span>后浪</span>
            <span class="right">更多</span>
          </li>
          <li>
            <span class="title">包装</span>
            <span>平装</span>
            <span>精装</span>
            <span>其他</span>
            <span class="right">更多</span>
            <span class="more">多选</span>
          </li>
        </ul>
        <div class="zhankaibox">
          <button class="zhankai" @click="isOpen" ref="btn">{{msg}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data () {
    return {
      show: true,
      msg:"更多选项（篇幅、小说类型、品牌、包装）↓",
    }
  },
  methods: {
    isOpen(){
      this.show = !this.show
      if(!this.show){
        this.$refs.btn.style.top = '314px'
        this.$refs.btn.style.width = '55px'
        this.$refs.btn.style.marginLeft = '-22.5px'
        this.msg = "收起 ↑"
      }else{
        this.$refs.btn.style.top = '174px'
        this.$refs.btn.style.width = '290px'
        this.$refs.btn.style.marginLeft = '-145px'
        this.msg = "更多选项（篇幅、小说类型、品牌、包装）↓"
      }
      
    }
  }
  
};
</script>

<style lang="less" scoped>
.info {
  width: 1200px;
  // height: 325px;
  margin: 0 auto;
  margin-bottom: 45px;
  .what {
    width: 100%;
    height: 40px;
    line-height: 40px;
    h3 {
      float: left;
      font-size: 13px;
    }
    ul {
      float: left;
      margin-left: 8px;
      li {
        float: left;
        a {
          color: rgb(95, 158, 247);
        }
        a:hover {
          text-decoration: underline;
        }
        span {
          margin: 0 10px;
        }
      }
    }
  }
  .infoContent {
    width: 100%;
    .contentHead {
      width: 100%;
      height: 80px;
      .headinfo {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid rgb(255, 40, 50);
        h2 {
          float: left;
          width: 120px;
          height: 100%;
          line-height: 40px;
          text-align: center;
          font-weight: normal;
          font-size: 15px;
          background-color: rgb(255, 40, 50);
          color: #fff;
        }
        .moreSearch {
          float: right;
          line-height: 50px;
        }
      }
      .total {
        width: 100%;
        height: 40px;
        background-color: rgb(245, 245, 245);
        line-height: 40px;
        padding: 0 20px;
        span {
          color: rgb(255, 40, 50);
          margin: 0 2px;
        }
      }
    }

    .contentBody {
      position: relative;
      top:0;
      left: 0;
      width: 100%;
      ul {
        li {
          font-size: 12px;
          display: block;
          width: 100%;
          height: 35px;
          line-height: 35px;
          border-bottom: 1px solid rgb(233, 232, 232);
          span {
            display: inline-block;
            width: 110px;
            height: 100%;
            text-align: center;
            overflow: hidden;
            padding: 0 8px;
            text-align: left;
            margin-left: 30px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          span:hover {
            color: rgb(255, 40, 50);
            text-decoration: underline;
            cursor: pointer;
          }
          .title {
            display: inline-block;
            width: 80px;
            height: 100%;
            padding-left: 15px;
            background-color: rgb(251, 242, 237);
            overflow: hidden;
          }
          .right {
            float: right;
            width: 40px;
            height: 100%;
            text-align: center;
            margin-left: 8px;
          }
          .more {
            float: right;
            width: 40px;
            height: 100%;
            text-align: center;
          }
        }
      }
      .zhankai{
        width: 290px;
        position: absolute;
        background-color: #fff;
        top: 175px;
        left: 50%;
        border: 1px solid #ccc;
        border-top: 0;
        text-align: center;
        margin-left: -145px;
        height: 25px;
        cursor: pointer;
        transition: all .1s linear;
      }
    }
  }
}
</style>