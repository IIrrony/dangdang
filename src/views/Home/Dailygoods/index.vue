<template>
  <div class="Dailygoods">
    <div class="DailygoodsHead">
      <span class="title">日用百货</span>
      <span>|</span>
      <ul>
        <li>
          <a href="javascript:;" class="dian">滴露</a>
          <span>旗舰店</span>
        </li>
        <li>
          <a href="javascript:;" class="dian">水星家纺</a>
          <span>旗舰店</span>
        </li>
        <li>
          <a href="javascript:;" class="dian">戴森</a>
          <span>旗舰店</span>
        </li>
        <li>
          <a href="javascript:;" class="dian">碧然德</a>
          <span>旗舰店</span>
        </li>
        <li>
          <a href="javascript:;" class="dian">蕉下</a>
          <span>旗舰店</span>
        </li>
      </ul>
    </div>
    <div class="DailygoodsBody">
      <div class="fourPics">
        <ul>
          <li><img src="./images/pic1.jpg" alt="" /></li>
          <li><img src="./images/pic2.jpg" alt="" /></li>
          <li><img src="./images/pic3.jpg" alt="" /></li>
          <li><img src="./images/pic4.jpg" alt="" /></li>
        </ul>
      </div>
      <div class="bigPic">
        <img src="./images/pic9.png" alt="" />
      </div>
      <div class="fourPics">
        <ul>
          <li><img src="./images/pic5.jpg" alt="" /></li>
          <li><img src="./images/pic6.jpg" alt="" /></li>
          <li><img src="./images/pic7.jpg" alt="" /></li>
          <li><img src="./images/pic8.jpg" alt="" /></li>
        </ul>
      </div>
      <div class="footPics">
        <ul>
          <li><img src="./images/apic1.jpg" alt="" /></li>
          <li><img src="./images/apic2.jpg" alt="" /></li>
          <li><img src="./images/apic3.png" alt="" /></li>
          <li><img src="./images/apic4.png" alt="" /></li>
          <li><img src="./images/apic5.jpg" alt="" /></li>
          <li><img src="./images/apic6.png" alt="" /></li>
          <li><img src="./images/apic7.jpg" alt="" /></li>
          <li><img src="./images/apic8.png" alt="" /></li>
          <li><img src="./images/apic9.png" alt="" /></li>
          <li><img src="./images/apic10.png" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dailygoods",
};
</script>

<style lang="less" scoped>
.Dailygoods {
  width: 1200px;
  height: 470px;
  margin: 5px auto;
  .DailygoodsHead {
    width: 100%;
    height: 40px;
    .title{
      color: #000;
      font-size: 22px;
      font-weight: 600;
      margin-left: 5px;
    }
    span{
      font-size: 20px;
      margin: 0 5px;
      margin-bottom: 2px;
    }
    ul{
      float: right;
      margin-right: 450px;
      padding-top: 3px;
      li{
        float: left;
        margin: 0 10px;
        span{
          font-size: 16px;
        }
        .dian{
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
  .DailygoodsBody {
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
      .footPics {
        
        ul {
          margin-top: -2px;
          width: 100%;
          float: left;
          border: 1px solid #ccc;
          border-top: 0;
          li {
            width: 119.7px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            float: left;
            background-color: rgb(247,247,247);
            border-right: 1px dotted rgb(233, 233, 233);
            img{
              margin-top: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
}
</style>