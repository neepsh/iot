<template>
    <div class="h5_contact">


      <div id="content">
        <div id="banner">
          <img :src="banner" alt="*">
        </div>

        <div class="item">
          <nav>
            <div class="nav_name">联系我们</div>
            <div class="nav_info">Cantact Us</div>
          </nav>
          <div class="address">
            <div class="address_name">联系方式</div>
            <ul>
              <li>公司电话：400-828-8251</li>
              <li>公司地址：江苏省南京市江宁区麒麟科创园华清园5栋</li>
              <li>公司邮编：210000</li>
              <li>公司邮箱：bd@njxbz.online</li>
            </ul>
            <div class="map">< /div>
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
        name: "contact",
      data(){
          return {
            banner:require('../../assets/img/web_03.jpg')
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
