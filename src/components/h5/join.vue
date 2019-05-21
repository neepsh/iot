<template>
    <div class="jion">
      <div id="content">
        <div id="product">
          <nav class="nav">会员加盟</nav>
          <div class="product">
            <div>
              <div class="product_name">智能果汁机 </div>
              <div class="product_price">会员价：<span>6.88万</span></div>
              <div class="product_type"> <p>加盟模式：</p> <span>加盟费20万（5台起）每台押金6.88万</span> </div>
              <div class="product_type"> <p>服务条款：</p> <span>软件后台收据服务支持</span> </div>
            </div>
          </div>
          <div class="product">
            <div>
              <div class="product_name">智能果汁机 </div>
              <div class="product_price">会员价：<span>6.88万</span></div>
              <div class="product_type"> <p>加盟模式：</p> <span>加盟费20万（5台起）每台押金6.88万</span> </div>
              <div class="product_type"> <p>服务条款：</p> <span>软件后台收据服务支持</span> </div>
            </div>
          </div>
          <div class="product">
            <div>
              <div class="product_name">智能果汁机 </div>
              <div class="product_price">会员价：<span>6.88万</span></div>
              <div class="product_type"> <p>加盟模式：</p> <span>加盟费20万（5台起）每台押金6.88万</span> </div>
              <div class="product_type"> <p>服务条款：</p> <span>软件后台收据服务支持</span> </div>
            </div>
          </div>
          <div class="product">
            <div>
              <div class="product_name">智能果汁机 </div>
              <div class="product_price">会员价：<span>6.88万</span></div>
              <div class="product_type"> <p>加盟模式：</p> <span>加盟费20万（5台起）每台押金6.88万</span> </div>
              <div class="product_type"> <p>服务条款：</p> <span>软件后台收据服务支持</span> </div>
            </div>
          </div>
        </div>



        <div id="growing">
          <nav class="nav">发展规划</nav>
          <div class="growing">
            <div class="growing_list">
              <div class="growing_icon">
                <img :src="icon.img1" alt="*">
                <span>服务站</span>
              </div>
              <p>
                <span>服务站投资10万</span>
                <span>品牌管理费1万</span>
              </p>
              <span>10000家</span>
            </div>
            <div class="growing_list">
              <div class="growing_icon">
                <img :src="icon.img2" alt="*">
                <span>专营店</span>
              </div>
              <p>
                <span>服务站投资10万</span>
                <span>品牌管理费1万</span>
              </p>
              <span>10000家</span>
            </div>
            <div class="growing_list">
              <div class="growing_icon">
                <img :src="icon.img3" alt="*">
                <span>旗舰店</span>
              </div>
              <p>
                <span>服务站投资10万</span>
                <span>品牌管理费1万</span>
              </p>
              <span>10000家</span>
            </div>
          </div>
          <div class="growing_img">
            <img :src="icon.img4" alt="#">
            <p>
              <span>跨界整合--生态平台</span>
              <span>诠释一种全新的营销思维方式 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "jion_us",
        data(){
            return {
              icon:{
                img1:require('../../assets/img/c_icon_03.png'),
                img2:require('../../assets/img/c_icon_05.png'),
                img3:require('../../assets/img/c_icon_07.png'),
                img4:require('../../assets/img/coorp_26.jpg'),
              }
            }
        }
    }
</script>

<style scoped>
  body{
    background: #efefef;
  }
  /*  content */

  .nav{
    font-size: 0.3rem;
    padding-left: 0.25rem;
    border-left: 0.02rem solid #ff7500;
    margin-bottom: 0.3rem;
  }

  #product{
    padding: 0.3rem;
    background: #fff;
    font-size: 0.24rem;
    margin-top: 0.3rem;
  }
  .product{
    padding: 0.3rem;
    width: 6.31rem;
    height: 2.32rem;
    color: #333333;
    background:url("../../assets/img/coorp_03.jpg") no-repeat 100%/100% ;
    border-radius:0.09rem ;
    margin-top: 0.3rem;
    box-shadow: 1px 2px 10px 0px rgba(6, 0, 1, 0.3);
  }
  .product:nth-of-type(2){
    background:url("../../assets/img/coorp_07.jpg") no-repeat 100%/100%  ;
  }
  .product:nth-of-type(3){
    background:url("../../assets/img/coorp_10.jpg") no-repeat 100%/100%  ;
  }
  .product:nth-of-type(4){
    background:url("../../assets/img/coorp_12.jpg") no-repeat 100%/100%  ;
  }
  .product_name{
    font-size: 0.36rem;
    color: #000;
    padding-top: 0.14rem;
  }
  .product>div{
    width: 3.6rem;
  }
  .product_price span{
    font-size: 0.36rem;
    color: #ff0000;
  }
  .product_type * {
    float: left;
  }
  .product_type:after{
    display: block;
    content: '';
    clear: both;
  }
  .product_type p{
    width: 1.2rem;
  }
  .product_type span{
    display: inline-block;
    width: 2.4rem;
  }
  .product_type{
    margin:0.2rem 0  ;
  }
  #growing{
    padding: 0.3rem;
    background: #fff;
    margin-top: 0.3rem;
    font-size: 0.24rem;
  }
  .growing_icon{
    height: 1.47rem;
    width: 1.47rem;
    border-radius: 50%;
    background: #ff7500;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 0.2rem;
    margin-top: 0.3rem;
  }
  .growing_icon img{
    margin-top: 0.2rem;
    width: 0.75rem;
    height: 0.65rem;
  }
  .growing_icon span{
    width: 100%;
  }
  .growing_list p span{
    display: block;
    line-height: 0.4rem;
    text-align: center;
  }
  .growing_list{
    margin-left: 0.2rem;
    width: 2.14rem;
    background: #efefef;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .growing_list:nth-of-type(1){
    margin-left: 0;
  }
  .growing{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 0.3rem;
  }
  .growing_list>span{
    display: block;
    color: #ff7500;
    line-height: 0.5rem;
  }
  .growing_img img{
    width: 6.91rem;
    height: 3.14rem;
  }
  .growing_img{
    position: relative;
  }
  .growing_img p{
    position: absolute;
    width: 6.91rem;
    height: 3.14rem;
    background: rgba(0,0,0,0.5);
    color: #fff;
    top: 0;
    left: 0;
  }
  .growing_img span{
    width: 100%;
    line-height: 0.4rem;
    display: inline-block;
    font-size: 0.28rem;
    text-align: center;
  }
  .growing_img span:nth-of-type(1){
    margin-top: 1.2rem;
  }

</style>
