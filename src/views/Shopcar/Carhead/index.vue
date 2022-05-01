<template>
  <div class="Carhead">
    <div class="box">
      <div class="imgad">
          <img src="./images/ad.jpg" alt="" title="当当网"/>
      </div>
      <div class="tohome">
        <router-link to="/home">
          <img src="./images/logo.jpg" alt="当当网" title="当当网"/>
        </router-link>
        
        <div class="process">
          <span class="active">我的购物车</span>
          <span>填写订单</span>
          <span>完成订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carhead",
};
</script>

<style lang="less" scoped>
.Carhead{
  width: 100%;

  border-bottom: 4px solid rgb(255,40,50);
  .box{
    width: 960px;
    margin: 0 auto;
    .imgad{
      width: 100%;
      margin: 14px 0;
      height: auto;
    }
    .tohome{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 15px;
      margin-bottom: 35px;
      img{
        cursor: pointer;
      }
      .process{
        height: 36px;
        width: 634px;
        background: url('./images/process.png') center top no-repeat;
        
        span{
          float: left;
          width: 206px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
        }

        .active{
          color: #fff;
        }
      }
    }
  }
}
</style>