<template>
  <div class="footer">
    <div class="footer-container">
      <div class="copyright">
        <ul class="helpLink">
          <li>
            <a href="javascript:;">公司简介</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">诚聘英才</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">网站联盟</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">当当招商</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">机构销售</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">手机当当</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">官方 Blog</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">热词搜索</a>
          </li>
        </ul>
        <ul class="muchInfo">
          <li>
            <a href="javascript:;">京ICP证041189号</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">出版物经营许可证</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">新出发京批字第直0673号</a>
            <span class="space"></span>
          </li>
          <br>
          <li>
            <a href="javascript:;">食品经营许可证：JY11101050363440</a>
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;"
              >京公网安备 11010502037644号京公网安备11010502037644号</a
            >
            <span class="space"></span>
          </li>
          <li>
            <a href="javascript:;">经营许可证编号：合字B2-20160011|互联网药品信息服务资格证</a>
          </li>
          <br>
          <li>
            <a href="javascript:;"
              >互联网违法和不良信息举报电话：4001066666-5
              邮箱：service@cs.dangdang.com</a
            >
          </li>
          <br>
          <li>
            <a href="javascript:;"
              >网络出版服务许可证（总）网出证（京）字第049号北京当当科文电子商务有限公司，公司地址：北京市朝阳区北三环东路8号静安中心21层</a
            >
          </li>
        </ul>
        <div class="help">
          <ul>
            <li>
              Copyright 2004 - 2021 当当网. All Rights Reserved
              <span class="space"></span>
            </li>
            <li>
              <a href="javascript:;"
                >京ICP备17043473号-1
                <img src="./images/validate.gif" alt="" />
              </a>
              京ICP证041189号
              <span class="space"></span>
            </li>
            <li>出版物经营许可证 新出发京批字第直0673号</li>
          </ul>
        </div>
        <div class="pictures">
          <img src="./images/pic.png" alt="" />
          <img src="./images/pic1.png" alt="" />
          <img src="./images/pic2.png" alt="" />
          <img src="./images/pic3.png" alt="" />
          <img src="./images/pic4.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  background-color: #fff;
  border-top: 1px solid #e4e1e1;
  .footer-container {
    width: 1000px;
    margin: 0px auto;
    padding: 0 15px;
    text-align: center;
    .copyright {
      padding: 20px;

      .helpLink, .muchInfo {
        text-align: center;

        li {
          height: 20px;
          display: inline-block;
          font-weight: 300;

          li:hover {
            cursor: pointer;
          }
          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 18px;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .help {
      width: 850px;
      margin: 10px auto;
      color: rgb(131, 131, 131);
      li {
        display: inline;
        a {
          color: rgb(131, 131, 131);
        }
        .space {
          border-left: 1px solid rgb(131, 131, 131);
          width: 1px;
          height: 13px;
          background: rgb(131, 131, 131);
          margin: 8px 10px;
        }
      }
    }
    .pictures {
      width: 1000px;
      margin-top: 20px;
      img {
        margin: 5px 10px;
      }
    }
  }
}
</style>