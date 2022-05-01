<template>
    <div class="Foods">
    <div class="FoodsHead">
      <span class="title">食品</span>
      <span>|</span>
      <ul>
        <li>
          <a href="javascript:;" class="dian">优选食品</a>
        </li>
      </ul>
    </div>
    <div class="FoodsBody">
      <div class="fourPics">
        <ul>
          <li><img src="./images/pic1 (1).jpg" alt="" /></li>
          <li><img src="./images/pic1 (2).jpg" alt="" /></li>
          <li><img src="./images/pic1 (3).jpg" alt="" /></li>
          <li><img src="./images/pic1 (4).jpg" alt="" /></li>
        </ul>
      </div>
      <div class="bigPic">
        <img src="./images/pic.jpg" alt="" />
      </div>
      <div class="fourPics">
        <ul>
          <li><img src="./images/pic1 (5).jpg" alt="" /></li>
          <li><img src="./images/pic1 (6).jpg" alt="" /></li>
          <li><img src="./images/pic1 (7).jpg" alt="" /></li>
          <li><img src="./images/pic1 (8).jpg" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Foods",
}
</script>

<style lang="less" scoped>
.Foods {
  width: 1200px;
  height: 395px;
  margin: 5px auto;
  .FoodsHead {
    width: 100%;
    height: 40px;
    .title{
      color: #000;
      font-size: 22px;
      font-weight: 600;
      margin-left: 5px;
      float: left;
    }
    span{
      float: left;
      font-size: 20px;
      margin: 0 5px;
      margin-bottom: 2px;
    }
    ul{
      float: left;
      padding-top: 3px;
      li{
        float: left;
        margin: 0 10px;
        span{
          font-size: 16px;
        }
        .dian{
          font-size: 17px;
          color: #000;
          font-weight: 500;
        }
      }
    }
  }
  .FoodsBody {
      width: 100%;
      .fourPics {
        float: left;
        width: 33.3%;
        ul {
          width: 100%;
          height: 341px;
          overflow: hidden;
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          float: left;
          li {
            width: 50%;
            border: 1px solid #ccc;
            border-bottom:  0;
            border-right: 0;
            float: left;
            cursor: pointer;
          }
        }
      }
      .bigPic {
        width: 33.3%;
        float: left;
        cursor: pointer;
      }
    }
}
</style>