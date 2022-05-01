<template>
  <div class="Recommend">
    <div class="recommendHead">
      <span>为您推荐</span>
    </div>
    <div class="recommendBody">
      <ul>
        <li v-for="(item, index) in recommends" :key="index">
          <img src="./images/book1.jpg" alt="" />
          <div class="title">
            <a href="javascript:;">{{ item.txt }}</a>
          </div>
          <div>
            <span class="price">{{ "￥" + item.price }}</span>
            <span v-show="item.eBook != 1" class="ebook">{{ "电子书￥" + item.eBook }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      recommends: [
        {
          pic: 1,
          txt: "生命简史:从宇宙起源到人类文明(赠送超大生命星空图,精装大开本地板书,5-14岁儿童世界起源大百科全书",
          price: 123.2,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "心灵教科书绘本系列：西兰花先生的理发店（教会孩子：敢于打破常规思维，培养创新意识）",
          price: 46.6,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "蛤蟆先生去看心理医生(年销200万册!英国经典心理咨询入门书，知名心理学家李松蔚强烈推荐）",
          price: 26.6,
          eBook: 17.99,
        },
        {
          pic: 1,
          txt: " 三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！",
          price: 87.1,
          eBook: 1,
        },
        { pic: 1, txt: "次第花开 修订版", price: 38.2, eBook: 1 },
        {
          pic: 1,
          txt: "与未来谈谈心——睡前聊一会儿（音频书）",
          price: 52.3,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "人生海海（麦家重磅力作，莫言、董卿盛赞,连续两年高居畅销榜,发行量超200万册)",
          price: 55.0,
          eBook: 24.99,
        },
        {
          pic: 1,
          txt: "生死疲劳（不看不知道，莫言真幽默！全新版本！印章版和普通版随机发货）",
          price: 69.8,
          eBook: 1,
        },
        {
          pic: 1,
          txt: " 被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎",
          price: 52.7,
          eBook: 19.9,
        },
        {
          pic: 1,
          txt: "马尔克斯：百年孤独(50周年纪念版)",
          price: 39.6,
          eBook: 1,
        },
        { pic: 1, txt: "神奇校车·桥梁书版(全20册)", price: 144.0, eBook: 1 },
        {
          pic: 1,
          txt: "神奇校车·图画书版(全12册,新增科学博览会1册)",
          price: 194.0,
          eBook: 1,
        },
        {
          pic: 1,
          txt: " 你当像鸟飞往你的山(中文版销量超200万册)比尔·盖茨年度特别推荐!登顶《纽约时报》畅销榜80+周，这本书比你听说的还要好！）",
          price: 34.8,
          eBook: 1,
        },
        { pic: 1, txt: "正面管教(修订版)", price: 35.0, eBook: 1 },
        { pic: 1, txt: "少年读史记(套装全5册)", price: 100.0, eBook: 1 },
        {
          pic: 1,
          txt: "金庸全集：金庸作品集(全集共36册,彩图平装旧版)",
          price: 817.8,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "就喜欢你看不惯我又干不掉我的样子6(白茶著 亲笔签名本+吾皇、巴扎黑立牌）",
          price: 45.0,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "万物由来科学绘本 写给孩子的科普绘本",
          price: 20.0,
          eBook: 1,
        },
        { pic: 1, txt: "我们的身体", price: 116.0, eBook: 1 },
        { pic: 1, txt: "不一样的卡梅拉手绘本(1-12册)", price: 117.6, eBook: 1 },
        {
          pic: 1,
          txt: "茅盾文学奖获奖作品：人世间（第十届茅盾文学奖获奖作品，雷佳音、辛柏青、宋佳、殷桃、萨日娜、宋春丽、张凯丽等主演）",
          price: 154.7,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "小熊宝宝绘本(简装全15册)蒲蒲兰经典绘本！新手妈妈的育儿宝典！(0-3岁)",
          price: 88.4,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "二十四节气自然绘本 让孩子了解自然的瞬息万变 科普百科绘本",
          price: 20.0,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "与未来谈谈心+与世界谈谈心+与时代谈谈心",
          price: 166.2,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "世界尽头的咖啡馆（做决定前读一遍,少走弯路!美国57所高校指定研讨读物)",
          price: 45.0,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "我爸爸+我妈妈(全2册)——清华附小推荐经典儿童绘本 ！（启发童书馆出品）",
          price: 79.6,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "遥远的救世主（天道原著王志文主演电视剧畅销遥远的救世主作者豆豆三部曲之一）",
          price: 28.8,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "心安即是归处（季羡林百年生命智慧。央视《朗读者》多次动情朗读本书名篇，贾平凹、白岩松、金庸、林青霞诚意推荐）",
          price: 41.8,
          eBook: 14.7,
        },
        {
          pic: 1,
          txt: " 世界上最棒的礼物——图画中隐藏无数细节，让小小孩玩过瘾！",
          price: 45.8,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "四五快读 全彩图升级版——幼儿快速识字阅读法(全8册)(让孩子爱上阅读 快乐识字)[精选套装]",
          price: 145.8,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "培生幼儿英语，少儿英语启蒙绘本",
          price: 115.6,
          eBook: 1,
        },
        { pic: 1, txt: "词汇的力量WordPowerMadeEasy", price: 17.5, eBook: 1 },
        { pic: 1, txt: "四五英语**辑(全5册套装)", price: 93.5, eBook: 1 },
        { pic: 1, txt: "儿童文学畅销品，小学生都爱读", price: 651.7, eBook: 1 },
        {
          pic: 1,
          txt: "【中商原版】相约星期二 英文原版 Tuesdays With Morrie 英文版 进口正版",
          price: 22.5,
          eBook: 1,
        },
        {
          pic: 1,
          txt: "小学英语词汇学习手册（“美语之路”经典词库）",
          price: 25.8,
          eBook: 1,
        },
        { pic: 1, txt: "零基础学Python(全彩版)", price: 73.6, eBook: 27.93 },
        { pic: 1, txt: "儿童思维导图启蒙绘本", price: 99.8, eBook: 1 },
        {
          pic: 1,
          txt: "李时珍  张慧剑著注音版 语文课本",
          price: 5.9,
          eBook: 1,
        },
        { pic: 1, txt: "一读就会用的分类成语故事", price: 351.0, eBook: 1 },
        { pic: 1, txt: "哈利波特与魔法石 英文原版", price: 16.5, eBook: 1 },
        {
          pic: 1,
          txt: "wonder 奇迹男孩  R.J. Palacio C",
          price: 14.0,
          eBook: 1,
        },

        { pic: 1, txt: "夏洛的网  E.B.怀特英文原版", price: 22.5, eBook: 1 },
        { pic: 1, txt: "杀死一只知更鸟 英文原版小说", price: 25.5, eBook: 1 },
        {
          pic: 1,
          txt: "哈利波特英文原版 Harry Potter",
          price: 266.0,
          eBook: 1,
        },
        { pic: 1, txt: "Flipped 怦然心动 英文原版小说", price: 21.5, eBook: 1 },
        {
          pic: 1,
          txt: "让孩子爱上科学的趣味实验大百科",
          price: 96.0,
          eBook: 1,
        },
        { pic: 1, txt: "午夜降临前抵达", price: 40.7, eBook: 17.7 },
        { pic: 1, txt: "bibi动物园:忍不住想打扰你", price: 35.2, eBook: 29.4 },
        { pic: 1, txt: "张爱玲全集01:倾城之恋", price: 29.2, eBook: 24.69 },
        { pic: 1, txt: "刘子超旅行文学两册套装", price: 88.3, eBook: 1 },
        { pic: 1, txt: "格非:江南三部曲(共3册)", price: 109.0, eBook: 108.0 },
        { pic: 1, txt: "叶广芩京味小说三部曲", price: 189.4, eBook: 1 },
        {
          pic: 1,
          txt: "百年孤独1000万册纪念套装(赠胶带)",
          price: 198.5,
          eBook: 1,
        },
        { pic: 1, txt: "王小波杂文套装", price: 226.0, eBook: 1 },
        {
          pic: 1,
          txt: "平凡的世界：全三册(2021全新版)",
          price: 98.0,
          eBook: 59.0,
        },
        { pic: 1, txt: "东野圭吾：虚像的丑角", price: 59.0, eBook: 1 },
        { pic: 1, txt: "东野圭吾：无名之町", price: 40.7, eBook: 35.4 },
        { pic: 1, txt: "下沉年代", price: 108.0, eBook: 29.99 },
        { pic: 1, txt: "惊呆了！原来这就是社会学", price: 59.0, eBook: 1 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.Recommend{
  width: 1200px;
  margin: 0 auto;
  .recommendHead{
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid red;
    span{
      font-size: 20px;
      font-weight: 600;
      padding-left: 5px;
      color: red;
    }
  }
  .recommendBody{
    width: 100%;
    height: 2720px;
    border: 1px solid #ccc;
    margin-top: 10px;
    ul{
      margin-top: 10px;
      margin-left: 20px;
      li{
        width: 16%;
        float: left;
        height: 260px;
        margin: 5px 2px;
        text-align: center;
        img{
          width: 95%;
          height: auto;
          margin: 5px auto;
          margin-top: 15px;
          cursor: pointer;
        }
        .title{
          display: block;
          width: 98%;
          height: 30px;
          overflow: hidden;
          padding: 0 10px;
          text-align: left;
        }
        .price{
          color: red;
          float: left;
          font-size: 17px;
          margin-left: 8px;
        }
        .ebook{
          color: #666;
          float: right;
          font-size: 12px;
          margin-top: 4px;
          margin-right: 20px;
        }
      }
      li:hover{
        border: 1px solid #fff;
        box-shadow: 0 0 4px #ddd;
      }
    }
  }
}
</style>