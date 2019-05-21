<template>
  <!--商务合作-->
    <div class="h5_cooperation">


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
</style>
