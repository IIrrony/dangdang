<template>
  <div class="footer">
    <div class="icons">
      <div class="box">
        <a href="##">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon"></use>
          </svg>
          <span>正规渠道正品保障</span>
        </a>
        <a href="###">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wuliu"></use>
          </svg>
          <span>625城市次日送达</span>
        </a>
        <a href="###">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuihuanhuo"></use>
          </svg>
          <span>上门退换 购物无忧</span>
        </a>
      </div>
    </div>
    <div class="footer-container">
      <div class="footerList">
      <div class="footerItem">
        <h4>购物指南</h4>
        <ul class="footerItemCon">
          <li>购物流程</li>
          <li>发票制度</li>
          <li>服务协议</li>
          <li>会员优惠</li>
        </ul>
      </div>
      <div class="footerItem">
        <h4>支付方式</h4>
        <ul class="footerItemCon">
          <li>网上支付</li>
          <li>礼品卡支付</li>
          <li>银行转帐</li>
          <li>礼券支付</li>
        </ul>
      </div>
      <div class="footerItem">
        <h4>订单服务</h4>
        <ul class="footerItemCon">
          <li>配送服务查询</li>
          <li>订单状态说明</li>
          <li>自助取消订单</li>
          <li>自助修改订单</li>
        </ul>
      </div>
      <div class="footerItem">
        <h4>配送方式</h4>
        <ul class="footerItemCon">
          <li>当日递</li>
          <li>次日达</li>
          <li>订单自提</li>
          <li>验货与签收</li>
        </ul>
      </div>
      <div class="footerItem">
        <h4>退换货</h4>
        <ul class="footerItemCon">
          <li>退换货服务查询</li>
          <li>自助申请退换货</li>
          <li>退换货进度查询</li>
          <li>退款方式和时间</li>
        </ul>
      </div>
      <div class="footerItem">
        <h4>商家服务</h4>
        <ul class="footerItemCon">
          <li>商家中心</li>
          <li>运营服务</li>
        </ul>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:""
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #fff;
  .icons{
    width: 100%;
    height: 80px;
    background-color: rgb(250,250,250);
    border-bottom: 1px solid #e4e1e1;
    border-top: 2px solid #fc2105;
    margin: 0 auto;
    .box{
      width: 650px;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      a{
        display: flex;
        align-items: center;
        text-align: center;
        height: 80px;
        color: #fc2105;
        font-size: 16px;
        span{
          width: 70px;
        }
        .icon{
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
      }
      
    }
  }
  .footer-container {
    width: 1000px;
    margin: 0px auto;
    padding: 0 15px;
    text-align: center;
    .footerList {
      padding: 25px;
      overflow: hidden;
      padding-left: 20px;
      
      .footerItem {
        
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
          text-align: center;
          font-weight: normal;
          margin: 8px 0;
        }

        .footerItemCon {
          li {
            text-align: center;
            line-height: 18px;
            margin: 2px 0;
            font-weight: 300;
            color: rgb(131, 131, 131);
          }
          li:hover{
            color:rgb(255,40,50);
            text-decoration: underline;
            cursor: pointer;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }
  }
}
</style>