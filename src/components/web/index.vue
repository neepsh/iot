<template>
    <div class="index">
      <div id="content">
        <!--    banner -->
        <section class="banner">
          <div><img :src="msg.banner" alt="#"></div>
        </section>
        <!--    banner 结束-->

        <section class="content">

          <!--        简介-->
          <div class="company_info">
            <div>
              <div class="company_name">
                <p>Company profile</p>
                <span>公司简介</span>
              </div>
              <div class="company_p">
                <p>
                  南京鑫倍泽物联科技有限公司总部位于紫金山脉之南麒麟科技创新园华清园。自成立后，一直以南理工为科研后盾，与该校的机器人研究所、自动化学院等有长期合作关系。目前已推出新零售模式下的果汁机器人+网红产品无人化购物场景，新产品落地正处于大力推广阶段。
                </p>
                <p>
                  新配套-“拿了就走”、“关门结算”的自助贩售机（人脸识别技术、重力感应、红外扫码、后台数据采集、分析、结算）快速落地是我们团队经验整合所得，打造具有现代感的无人值守购物体验店。体现出鑫倍泽具有自动化核心技术与多层经验，最终实现新零售“无人果吧”,实现资源共享。·维空间·隶属于南京鑫倍泽物联科技有限公司。
                </p>
              </div>
            </div>
            <div>
              <div class="company_img">
                <img :src="msg.product1" alt="xbz">
              </div>
            </div>
          </div>

          <!--        文化-->

          <div class="culture">
            <div class="culture_name">
              <p>The enterprise culture</p>
              <span>企业文化</span>
            </div>
            <div class="culture_list">
              <nav>我们的使命</nav>
              <div>以高品质的服务 / 稳健的技术 / 向用户提供 美味可口的饮品</div>
              <div>持续关注新的饮品走向 / 积极探索新的用户需求 / 不断为用户提供创新的产品</div>
              <div>为用户设计优秀的橙汁新品 / 捕捉有效的客户信息 / 促进橙汁行业的快速发展</div>
            </div>
            <div class="cul_type">
              <img :src="msg.culture" alt="culture">
            </div>
          </div>

          <!--        产品-->
          <div class="product">
            <div class="culture_name">
              <p>Brand product</p>
              <span>优质产品</span>
            </div>
            <div>
              <div class="product_list">
                <div ><img :src="msg.product2" alt="product"></div>
                <div class="product_info">
                  阿橙果啦·果汁机器人占地仅1.2平米，支持主流的快捷扫码支付，微信、支付宝等。可存放80套专用纸杯、杯盖和吸管，搭载160个鲜橙，24H待机状态，设备采用仿真人动作的机械手臂控制方式，装配了自动识别清洗系统。更进一步的严控果皮和要萃取果肉部分的相对间隔，触发指令后机械手臂会自动切半、钝刀低速正反转压力感应萃取、保证Vc的不流失，获取原汁原味的果粒，果肉，果纤维。灌装、封盖全程智能化生产流程，整个服务过程可以人机互动，给你解说每一步动作执行情况，并且还会告诉你“等你爱上维空间果粒橙”，给你带来的健康活力之佳语。完美的整个过程为你制作出的每杯果粒橙，都将充满新鲜、原汁原味。
                </div>
                <div class="product_name">
                  <p>阿橙果啦·果汁机器人介绍</p>
                  <span>
                            Responsible for Our Life
                        </span>
                </div>
              </div>
              <div class="product_list">
                <div ><img :src="msg.product3" alt="product"></div>
                <div class="product_info">
                  以物联技术为核心，运用自主研发物联智能化设备结合互联网，人工智能、大数据等技术手段。运用创新的模块化‘搭积木’体系，利用智慧科技，紧跟时代发展策略，对快消零售商品（如新鲜水果、蔬菜、网红产品等）实现人货精准、超值价格、模块化、以及全新的服务模式。打破原始的零售模式，，给你带来享受乐趣般的购物体验。
                </div>
                <div class="product_name">
                  <p>阿橙果啦·新零售</p>
                  <span>
                            Responsible for Our Life
                        </span>
                </div>
              </div>
            </div>
          </div>

          <!--      公司地址  -->
          <div class="address">
            <div class="address_name">
              <p>Company address</p>
              <span>公司地址</span>
            </div>
            <div class="address_content">
              <div class="address_map"><img :src="msg.map" alt="map"></div>
              <div class="address_info">
                <div>地址：江苏省南京市江宁区启迪科创园5栋</div>
                <div> 电话：1234567890</div>
                <div>电话：123456789</div>
                <div>手机：123456789121</div>
                <div>手机：123456789121</div>
                <div>微信：124245454524</div>
              </div>
            </div>
          </div>

        </section>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            msg:{
                banner:require('../../assets/img/banner.png'),
                product1:require('../../assets/img/index_product_03.jpg'),
                product2:require('../../assets/img/index_product_07.jpg'),
                product3:require('../../assets/img/index_product_11.jpg'),
                culture:require('../../assets/img/culture.png'),
                map:require('../../assets/img/adress.png')


            }
          }
      }
    }
</script>

<style scoped>

  /* banner */

  .banner img{
    width: 100%;
  }

  .content{
    width: 1200px;
    margin: 0 auto;
  }
  .company_info{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    padding-bottom: 55px;
    border-bottom:3px solid #f87704 ;
  }
  .company_img img{
    width: 430px;
    height: 430px;
  }
  .company_img{
    margin-left: 66px;
  }
  .company_p{
    font-size: 16px;
    color: #656565;
    text-indent: 2em;
    margin-top: 55px;
    line-height: 30px;
  }
  .company_name{
    width: 270px;
    height: 50px;
    border: 2px solid #f88015;
    text-align: center;
    position: relative;
  }
  .company_name p{
    font-size: 19px;
    color: #656565;
  }
  .company_name span{
    font-size: 28px;
    color: #000;
    display: inline-block;
    background: #fff;
    padding: 0  50px;
  }


  /*企业文化*/
  .culture_name{
    width: 270px;
    height: 50px;
    border: 2px solid #f88015;
    text-align: center;
    position: relative;
  }
  .culture_name p{
    font-size: 19px;
    color: #656565;
  }
  .culture_name span{
    font-size: 28px;
    color: #000;
    display: inline-block;
    background: #fff;
    padding: 0  50px;
  }
  .culture{
    padding: 50px 0;
    border-bottom: 3px solid #f87704;

  }
  .culture_list{
    color: #fff;
    margin-top:100px;
    background: #68573c;
    margin-bottom: 25px;
    padding:35px  200px 60px  200px;
  }
  .culture_list nav{
    text-align:center;
    font-size: 30px;
    padding-bottom: 60px;
  }
  .culture_list div{
    font-size: 20px;
    margin-bottom: 30px;
  }
  .cul_type img{
    width: 100%;
  }

  /* 产品*/
  .product_info{
    width: 281px;
    line-height: 24px;
    color: #101010;
  }
  .product_list:nth-of-type(2n+1) .product_info{
    border-top: 3px solid #b5b5b5;
    border-right: 3px solid #b5b5b5;
    padding: 25px;
  }
  .product_list:nth-of-type(2n+1) .product_name:after{
    content: '';
    display: block;
    height: 13px;
    width: 13px;
    border-radius:50%;
    background: #000;
    position: absolute;
    bottom: -7.5px;
    right: -7.5px;
  }
  .product_list:nth-of-type(2n) .product_info{
    border-left: 3px solid #b5b5b5;
    border-bottom: 3px solid #b5b5b5;
    padding: 25px;
  }
  .product_list:nth-of-type(2n) .product_name:after{
    content: '';
    display: block;
    height: 13px;
    width: 13px;
    border-radius:50%;
    background: #000;
    position: absolute;
    bottom: -7.5px;
    left: -7.5px;
  }
  .product_list{
    display: flex;
    font-size: 14px;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;

  }
  .product{
    padding-bottom: 50px;
    border-bottom: 3px solid #f87704;
  }
  .product_list img{
    width: 429px;
  }
  .product_list:nth-of-type(2n){
    flex-direction: row-reverse;
  }
  .product_name p{
    font-size: 24px;
    color: #414141;
  }
  .product_name span{
    color: #414141;
  }
  .product_name{
    position: relative;
    border-bottom: 2px solid #b5b5b5;
    width: 303px;
  }

  /* 公司地址 */

  .address_name p{
    font-size: 19px;
    color: #656565;
  }
  .address_name span{
    font-size: 28px;
    color: #000;
    display: inline-block;
    background: #fff;
    padding: 0  50px;
  }
  .address_name{
    width: 270px;
    height: 50px;
    border: 2px solid #f88015;
    text-align: center;
    position: relative;
    margin: 50px auto;
  }
  .address_content{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  .address_info{
    margin-top: 30px;
    background: #e8e8e8;
    width: 390px;
    padding-left: 20px;
    padding-top: 30px;
    line-height: 36px;
  }
  .address{
    margin-bottom: 30px;
  }
</style>
