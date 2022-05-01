<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="notdisplay" @mouseleave="indisplay">
        <h2 class="all">
          全部商品分类 <i class="el-icon-arrow-down el-icon--right"></i>
        </h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2">
              <div class="item bo">
                <h3>
                  <a href="">图书、童书</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">排行榜</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">图书畅销榜 >></a>
                        </em>
                        <em>
                          <a href="">新书热卖榜 >></a>
                        </em>
                        <em>
                          <a href="">童书榜 >></a>
                        </em>
                        <em>
                          <a href="">热搜榜 >></a>
                        </em>
                        <em>
                          <a href="">好评榜 >></a>
                        </em>
                        <em>
                          <a href="">飙升榜 >></a>
                        </em>
                        <em>
                          <a href="">特价榜 >></a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">电子书</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">0-2岁</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">3-6岁</a>
                        </em>
                        <em>
                          <a href="">7-10岁</a>
                        </em>
                        <em>
                          <a href="">11-14岁</a>
                        </em>
                        <em>
                          <a href="">中国儿童文学</a>
                        </em>
                        <em>
                          <a href="">外国儿童文学</a>
                        </em>
                        <em>
                          <a href="">科普/百科婴儿读物</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>少儿</dt>
                      <dd>
                        <em>
                          <a href="">少儿</a>
                        </em>
                        <em>
                          <a href="">0-2岁</a>
                        </em>
                        <em>
                          <a href="">3-6岁</a>
                        </em>
                        <em>
                          <a href="">7-10岁</a>
                        </em>
                        <em>
                          <a href="">11-14岁</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">创意文具</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">充值</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="recharge.html">充值</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">电子书2</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">服饰、内衣</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书3</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>少儿</dt>
                      <dd>
                        <em>
                          <a href="">少儿</a>
                        </em>
                        <em>
                          <a href="">0-2岁</a>
                        </em>
                        <em>
                          <a href="">3-6岁</a>
                        </em>
                        <em>
                          <a href="">7-10岁</a>
                        </em>
                        <em>
                          <a href="">11-14岁</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>教育</dt>
                      <dd>
                        <em>
                          <a href="">教材教辅</a>
                        </em>
                        <em>
                          <a href="">考试</a>
                        </em>
                        <em>
                          <a href="">外语学习</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>其它</dt>
                      <dd>
                        <em>
                          <a href="">英文原版书</a>
                        </em>
                        <em>
                          <a href="">港台图书</a>
                        </em>
                        <em>
                          <a href="">工具书</a>
                        </em>
                        <em>
                          <a href="">套装书</a>
                        </em>
                        <em>
                          <a href="">杂志/期刊</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">运动户外</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书4</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>少儿</dt>
                      <dd>
                        <em>
                          <a href="">少儿</a>
                        </em>
                        <em>
                          <a href="">0-2岁</a>
                        </em>
                        <em>
                          <a href="">3-6岁</a>
                        </em>
                        <em>
                          <a href="">7-10岁</a>
                        </em>
                        <em>
                          <a href="">11-14岁</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">孕、婴、童</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书5</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">家居、家纺、汽车</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书6</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>少儿</dt>
                      <dd>
                        <em>
                          <a href="">少儿</a>
                        </em>
                        <em>
                          <a href="">0-2岁</a>
                        </em>
                        <em>
                          <a href="">3-6岁</a>
                        </em>
                        <em>
                          <a href="">7-10岁</a>
                        </em>
                        <em>
                          <a href="">11-14岁</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>教育</dt>
                      <dd>
                        <em>
                          <a href="">教材教辅</a>
                        </em>
                        <em>
                          <a href="">考试</a>
                        </em>
                        <em>
                          <a href="">外语学习</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>其它</dt>
                      <dd>
                        <em>
                          <a href="">英文原版书</a>
                        </em>
                        <em>
                          <a href="">港台图书</a>
                        </em>
                        <em>
                          <a href="">工具书</a>
                        </em>
                        <em>
                          <a href="">套装书</a>
                        </em>
                        <em>
                          <a href="">杂志/期刊</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">家具、家装、康体</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书7</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">个人护理、清洁</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore">
                      <dt>
                        <a href="">电子书8</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">免费</a>
                        </em>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                        <em>
                          <a href="">婚恋/两性</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">经管</a>
                        </em>
                        <em>
                          <a href="">畅读VIP</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">数字音乐</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">通俗流行</a>
                        </em>
                        <em>
                          <a href="">古典音乐</a>
                        </em>
                        <em>
                          <a href="">摇滚说唱</a>
                        </em>
                        <em>
                          <a href="">爵士蓝调</a>
                        </em>
                        <em>
                          <a href="">乡村民谣</a>
                        </em>
                        <em>
                          <a href="">有声读物</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>
                        <a href="">音像</a>
                      </dt>
                      <dd>
                        <em>
                          <a href="">音乐</a>
                        </em>
                        <em>
                          <a href="">影视</a>
                        </em>
                        <em>
                          <a href="">教育音像</a>
                        </em>
                        <em>
                          <a href="">游戏</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>文艺</dt>
                      <dd>
                        <em>
                          <a href="">小说</a>
                        </em>
                        <em>
                          <a href="">文学</a>
                        </em>
                        <em>
                          <a href="">青春文学</a>
                        </em>
                        <em>
                          <a href="">传记</a>
                        </em>
                        <em>
                          <a href="">艺术</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>人文社科</dt>
                      <dd>
                        <em>
                          <a href="">历史</a>
                        </em>
                        <em>
                          <a href="">心理学</a>
                        </em>
                        <em>
                          <a href="">政治/军事</a>
                        </em>
                        <em>
                          <a href="">国学/古籍</a>
                        </em>
                        <em>
                          <a href="">哲学/宗教</a>
                        </em>
                        <em>
                          <a href="">社会科学</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>经管励志</dt>
                      <dd>
                        <em>
                          <a href="">经济</a>
                        </em>
                        <em>
                          <a href="">金融与投资</a>
                        </em>
                        <em>
                          <a href="">管理</a>
                        </em>
                        <em>
                          <a href="">励志与成功</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>生活</dt>
                      <dd>
                        <em>
                          <a href="">家庭与育儿</a>
                        </em>
                        <em>
                          <a href="">旅游/地图</a>
                        </em>
                        <em>
                          <a href="">烹饪/美食</a>
                        </em>
                        <em>
                          <a href="">时尚/美妆</a>
                        </em>
                        <em>
                          <a href="">家居</a>
                        </em>
                        <em>
                          <a href="">婚恋与两性</a>
                        </em>
                        <em>
                          <a href="">娱乐/休闲</a>
                        </em>
                        <em>
                          <a href="">健身与保健</a>
                        </em>
                        <em>
                          <a href="">动漫/幽默</a>
                        </em>
                        <em>
                          <a href="">体育/运动</a>
                        </em>
                      </dd>
                    </dl>
                    <dl class="fore">
                      <dt>科技</dt>
                      <dd>
                        <em>
                          <a href="">科普</a>
                        </em>
                        <em>
                          <a href="">IT</a>
                        </em>
                        <em>
                          <a href="">建筑</a>
                        </em>
                        <em>
                          <a href="">医学</a>
                        </em>
                        <em>
                          <a href="">工业技术</a>
                        </em>
                        <em>
                          <a href="">电子/通信</a>
                        </em>
                        <em>
                          <a href="">农林</a>
                        </em>
                        <em>
                          <a href="">科学与自然</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="item">
                <h3>
                  <a href="">食品、茶酒</a>
                </h3>
              </div>
              <div class="item">
                <h3>
                  <a href="">鞋靴、箱包</a>
                </h3>
              </div>
              <div class="item">
                <h3>
                  <a href="">珠宝饰品</a>
                </h3>
              </div>
              <div class="item">
                <h3>
                  <a href="">手机、数码、电脑办公</a>
                </h3>
              </div>
              <div class="item">
                <h3>
                  <a href="">家用电器</a>
                </h3>
              </div>
              <div class="item">
                <h3>
                  <a href="">当当礼品卡、生活服务</a>
                </h3>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">图书</a>
        <a href="###">电子书</a>
        <a href="###">童装童鞋</a>
        <a href="###">女装</a>
        <a href="###">食品</a>
        <a href="###">母婴玩具</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeNav",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  methods: {
    notdisplay() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    indisplay() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid rgb(255, 40, 50);

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 200px;
      height: 45px;
      background-color: rgb(255, 40, 50);
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 1px;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
      }
      a:hover {
        color: rgb(255, 40, 50);
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 200px;
      height: 490px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
        
      .all-sort-list2 {
        .cur {
          background-color: rgb(135, 206, 235);
        }
        .item {
          h3 {
            line-height: 29px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0.55px 20px;
            margin: 0;
            height: 32.65px;
            overflow: hidden;
            border-right: 2px solid rgb(255, 40, 50);

            border-bottom: 0;
            a {
              color: #333;
            }
          }
          h3:hover {
            border: 2px solid rgb(255, 40, 50);
            border-right: 0;
            a {
              color: rgb(255, 40, 50);
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 1000px;
            min-height: 488px;
            background: #f7f7f7;
            left: 200px;
            border: 2px solid rgb(255, 40, 50);
            border-left: 0;
            top: 1.5px;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 8px 0 15px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 64px;
                  line-height: 22px;
                  text-align: left;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                  color: rgb(255, 40, 50) !important;
                  a {
                    color: rgb(255, 40, 50);
                  }
                }

                dd {
                  float: left;
                  width: 555px;
                  padding: 3px 0 7px;
                  overflow: hidden;
                  border-bottom: 1px dotted rgb(220, 220, 220);

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 10px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
                dd:hover {
                  background-color: rgb(235, 235, 235);
                }
              }
            }
            a:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          a:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          &:hover {
            .item-list {
              display: block;
            }
            h3 {
              border: 2px solid rgb(255, 40, 50);
              border-right: 0;
              a {
                color: rgb(255, 40, 50);
              }
            }
          }
        }
      }
    }

    .sort-leave {
      opacity: 100;
    }

    .sort-enter{
        opacity: 0;
    }
    
    .sort-enter-active{
        transition: all .25s ease-in-out;
    }
  }
}
</style>