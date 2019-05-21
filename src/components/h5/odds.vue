<template>
    <div class="odds">
      <header id="header">
        <div class="header_logo"></div>
        <div class="header_menu"><i class="icon-0210"></i></div>
        <div class="header_list">
          <ul class="nav_list">
            <li>首页</li>
            <li>产品介绍</li>
            <li>服务支持</li>
            <li>商务合作</li>
            <li>在线商城</li>
            <li>品牌故事</li>
            <li>加入我们</li>
            <li>关于我们</li>
            <li>联系我们</li>
          </ul>
        </div>
      </header>


      <div id="contents">

        <div id="target">
          <nav class="nav">我们的目标</nav>
          <div class="target">我们着力于解决五个问题？</div>
          <div class="target_list">目标：你想干什么？</div>
          <div class="target_list">目标：你想干什么？</div>
          <div class="target_list">目标：你想干什么？</div>
          <div class="target_list">目标：你想干什么？</div>
          <div class="target_list">目标：你想干什么？</div>
        </div>

        <div id="shopping">
          <nav class="nav">消费模式</nav>
          <p>未来商业经济的主流模式</p>
          <div class="shopping">
            <img :src="img.img1" alt="#">
            <img :src="img.img2" alt="#">
            <img :src="img.img3" alt="#">
          </div>
        </div>
        <div id="content_item">
          <nav class="nav">经营原则</nav>
          <div class="item">
            <ul>
              <li>
                <img :src="img.img4" alt="#">
                <p><span>朝高度专业，高度附加值方向 发展。机构设置有培训部</span></p>
              </li>
              <li>
                <img :src="img.img5" alt="#">
                <p><span>破除快速致富的沉思，制定行之有效的目标计划</span></p>
              </li>
              <li>
                <img :src="img.img6" alt="#">
                <p><span>持续不断的创造经营，不断创新不断进取</span></p>
              </li>
              <li>
                <img :src="img.img7" alt="#">
                <p><span>持续不断的创造经营，不断创新不断进取</span></p>
              </li>
            </ul>
          </div>
        </div>

        <div id="product">
          <nav class="nav">产品体系</nav>
          <div class="product">
            <div><img :src="img.active" alt="#"></div>
            <div>
              <p>果粒橙口味纯正</p>
              <p>榨取快速卫生</p>
              <p>机器占地面积小</p>
            </div>
          </div>
          <div class="product">
            <div><img :src="img.active" alt="#"></div>
            <div>
              <p>果粒橙口味纯正</p>
              <p>榨取快速卫生</p>
              <p>机器占地面积小</p>
            </div>
          </div>
          <div class="product">
            <div><img :src="img.active" alt="#"></div>
            <div>
              <p>果粒橙口味纯正</p>
              <p>榨取快速卫生</p>
              <p>机器占地面积小</p>
            </div>
          </div>
          <div class="product">
            <div><img :src="img.active" alt="#"></div>
            <div>
              <p>果粒橙口味纯正</p>
              <p>榨取快速卫生</p>
              <p>机器占地面积小</p>
            </div>
          </div>
        </div>
        <div id="list">
          <nav class="nav">品相管理分类</nav>
          <ul>
            <li class="list">24小时智能无人超市</li>
            <li class="list">智能果汁机器人项目</li>
            <li class="list">原汁味，柠橙汁果粒橙果汁</li>
            <li class="list">绿色无公害脐橙</li>
            <li class="list">智能软硬件管理 </li>
            <li class="list">智能物料搬运机器人 </li>
            <li class="list">专业配送 </li>
            <li class="list">智能APP管理软件 </li>
          </ul>
        </div>
        <div id="odds">
          <nav class="nav">六大优势</nav>
          <div class="odds">
            <span>六大优势</span>
            <div class="odds_list">
              <div class="odds_num">1</div>
              <div class="odds_info">
                <p>强力吸粉</p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
            <div class="odds_list">
              <div class="odds_num">2</div>
              <div class="odds_info">
                <p>强大商业广告平台</p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
            <div class="odds_list">
              <div class="odds_num">3</div>
              <div class="odds_info">
                <p>时尚领导者</p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
            <div class="odds_list" >
              <div class="odds_num">4</div>
              <div class="odds_info">
                <p>互动性</p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
            <div class="odds_list">
              <div class="odds_num">5</div>
              <div class="odds_info">
                <p>摇一摇 </p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
            <div class="odds_list">
              <div class="odds_num">6</div>
              <div class="odds_info">
                <p>自动化管理</p>
                <span>扫描二维码免费送鲜榨橙汁.....</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">

        <div class="footer">
          <div class="footer_top">
            <div>关于我们</div>
            <div>产品下载</div>
            <div>技术支持</div>
            <div>商务合作</div>
            <div>加入我们</div>
          </div>
          <div>
            <p>联系电话：025-56566</p>
            <p>商务合作：025-56566</p>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "odds",
      data(){
          return {
              img:{
                img1:require('../../assets/img/shopping_03.jpg'),
                img2:require('../../assets/img/shopping_05.jpg'),
                img3:require('../../assets/img/shopping_07.png'),
                img4:require('../../assets/img/list_03.jpg'),
                img5:require('../../assets/img/list_05.jpg'),
                img6:require('../../assets/img/list_09.jpg'),
                img7:require('../../assets/img/list_10.jpg'),
                active:require('../../assets/img/active_03.png')
              }
          }
      }
    }
</script>

<style scoped>
  body{
    background: #efefef;
  }

  #target{
    padding: 0.3rem;
    background: #fff;
    margin-bottom: 0.3rem;
  }
  .nav{
    font-size: 0.3rem;
    padding-left: 0.25rem;
    border-left: 0.02rem solid #ff7500;
    margin-bottom: 0.3rem;
  }
  .target{
    color: #ff7500;
    font-size: 0.24rem;
  }
  .target_list{
    font-size: 0.24rem;
    line-height:0.7rem; ;
  }

  #shopping{
    background: #fff;
    padding:0.3rem;
  }
  .shopping{
    display: flex;
    justify-content: space-around;
  }
  .shopping img{
    width: 2.24rem;
    height: 1.54rem;
  }
  #shopping p{
    font-size: 0.24rem;
    color: #ff7500;
    padding-bottom: 0.2rem;
    text-align: center;
  }
  #content_item{
    padding: 0.3rem;
    background: #fff;
    margin-top: 0.3rem;
  }
  .item ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .item li{
    width:3.39rem ;
    height: 2.26rem;
    margin-top: 0.2rem;
    font-size: 0.24rem;
    color: #fff;
    position: relative;
  }
  .item img{
    width: 100%;
  }
  .item p{
    position: absolute;
    width:3.39rem ;
    height: 2.26rem;
    background:rgba(0,0,0,0.5) ;
    display: flex;
    top: 0;
    left: 0;
    align-items: flex-end;
  }
  .item span{
    display: inline-block;
    padding: 0.3rem;
  }

  #product{
    padding: 0.3rem;
    background: #fff;
    font-size: 0.24rem;
    margin-top: 0.3rem;
  }
  .product{
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
  }
  .product img{
    width: 2.78rem;
    height: 1.54rem;
  }
  .product>div:nth-of-type(2){
    flex-grow: 3;
    padding-left: 0.4rem;
  }
  .product p{
    line-height: 0.36rem;
  }

  #list{
    padding: 0.3rem;
    background: #fff;
    margin-top: 0.3rem;
  }
  .list{
    width: 3.36rem;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #fff;
    background: #ff7500;
    font-size: 0.24rem;
    border-radius: 0.04rem;
    margin-top: 0.2rem;
    text-align: center ;
  }
  #list ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  #odds{
    padding: 0.3rem;
    margin-top: 0.3rem;
    background: #fff;
  }




  .footer_top{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    color: #fff;
  }
  .footer{
    background: #737f95;
    padding: 1vh;
    font-size: 0.28rem;
    text-align: center;
    line-height: 36px;
    color: #fff;
  }

  .odds >span{
    display: inline-block;
    height: 0.7rem;
    width: 0.7rem;
    background: #ff7500;
    color: #fff;
    border-radius: 50%;
    font-size: 0.22rem;
    position: relative;
    text-align: center;
  }
  .odds >span:after{
    display: block;
    content: "";
    width:0;
    height:0;
    border-width:0.15rem 0.15rem 0;
    border-style:solid;
    border-color:#333 transparent transparent;/*灰 透明 透明 */
    margin:40px auto;
    position:absolute;
    top:-0.06rem;
    left: 0.2rem;
  }
  .odds_list{
    margin-top: 0.18rem;
    margin-left: 0.16rem;
    display: flex;
    justify-content: space-around;
  }
  .odds_num{
    height: 0.33rem;
    width: 0.33rem;
    background: #ff7500;
    color: #fff;
    font-size: 0.26rem;
    border-radius: 50%;
    text-align: center;
    margin-top: 0.08rem;
    position: relative;
  }
  .odds_num:after{
    display: block;
    content: '';
    height: 0.8rem;
    left: 0.15rem;
    position: absolute;
    border-left: 2px dashed #ff7500;
  }
  .odds_num:nth-of-type(6):after{
    display: block;
    height: 0;
    content: '';
  }
  .odds_info{

    flex-grow: 2;
    margin-left: 0.16rem;
    height: 1rem;
  }
  .odds_info p{
    font-size: 0.36rem;
    color: #ff7500;
  }
  .odds_info span{
    font-size: 0.24rem;
    width: 100%;
    display: inline-block;
    vertical-align: top;
    padding-top: 0.16rem;
  }
</style>
