<template>
  <!--商务合作-->
    <div class="h5_cooperation">

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

      <div id="content">

        <div id="banner">
          <img :src="banner" alt="*">
        </div>
        <div class="item">
          <nav class="nav">
            <div class="nav_name">商务合作</div>
            <div class="nav_info">一个分工明确，直达全国的商业模式</div>
          </nav>
          <div class="item_img">
            <img :src="item_img.img1" alt="#">
          </div>
          <div class="item_flex">
            <div>
              <img :src="item_img.img2" alt="#">
            </div>
            <div>
              <p>我们业务流程细化分工</p>
              <p>最专业，最有效，最优质的各个环节</p>
              <p>降低各环节成本</p>
              <p>从而提高整个行业模式和效率...</p>
            </div>
          </div>
        </div>

        <div class="item">
          <nav class="nav">
            <div class="nav_name">我们提供的服务</div>
            <div class="nav_info">一站式服务平台</div>
          </nav>
          <div class="server">
            <div>
              <p>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
              <p>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
              <p>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
            </div>
            <div>
              <img :src="item_img.img3" alt="#">
            </div>
          </div>
        </div>

        <div class="item">
          <nav class="nav">
            <div class="nav_name">完美一平米盈利空间一一新开机会点</div>
            <div class="nav_info">我们的主要渠道  </div>
          </nav>
          <div class="item_img">
            <img :src="item_img.img4" alt="#">
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
        name: "Cooperation",
      data(){
          return {
            banner:require('../../assets/img/web_03.jpg'),
            item_img:{
              img1:require('../../assets/img/web_07.jpg'),
              img2:require('../../assets/img/web_11.jpg'),
              img3:require('../../assets/img/web_15.jpg'),
              img4:require('../../assets/img/web_19.jpg'),
            }

          }


      }
    }
</script>

<style scoped>

  body{
    background: #efefef;
  }
  .header_logo{
    height: 0.56rem;
    width: 1.9rem;
    background: url("../../assets/img/new_logo.png") no-repeat;
    background-size: 100%;
    margin-left:0.3rem; ;
  }
  #header{
    height: 1.04rem;
    background: #000;
    opacity: 0.9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .header_menu{
    font-size: 0.44rem;
    color: #fff;
    text-align: right;
    padding-right: 0.44rem;
    flex-grow: 3;
  }
  .nav_list{
    position: fixed;
    top: 1.04rem;
    right: -60%;
    width: 60%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    color: #fff;
    font-size: 0.4rem;
    transition: 0.6s;
  }
  .nav_list li{
    padding: 0 0.4rem;
    line-height: 0.8rem;
    border-bottom: 1px solid;
  }

  #banner img{
    width: 100%;
  }
  #banner{
    margin-bottom: 0.3rem;
  }
  .nav{
    text-align: center;
  }
  .nav_name{
    font-size: 0.28rem;
    display: inline-block;
    padding: 0 0.41rem 0.15rem 0.41rem;
    width: 1.28rem;
    border-bottom: 0.02rem solid #8da3ae;
    position: relative;
  }
  .nav_name:after{
    content: "";
    display: block;
    position: absolute;
    bottom: -0.02rem;
    width: 1.28rem;
    height: 0.04rem;
    background: #ff7500;
    left: 0.41rem;
    z-index: 1;
  }
  .nav_info{
    font-size: 0.24rem;
    margin-top: 0.16rem;
    margin-bottom: 0.2rem;
  }
  .item{
    background: #fff;
    margin-bottom: 0.3rem;
    padding: 0.3rem;
    font-size: 0.24rem;
  }
  .item_img img{
    width: 80%;
  }
  .item_img{
    text-align: center;
  }
  .item_flex{
    display: flex;
    justify-content: space-around;
  }
  .item_flex img{
    width:2.9rem; ;
  }
  .item_flex>div:nth-of-type(2){
    flex-grow: 2;
    margin-left: 0.3rem;
    font-size: 0.24rem;
  }
  .item_flex p{
    line-height: 0.4rem;
  }
  .server{
    font-size: 0.24rem;
    display: flex;
    justify-content: space-around;
  }
  .server img{
    width: 2.18rem;
  }
  .server p{
    line-height: 0.4rem;
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
</style>
