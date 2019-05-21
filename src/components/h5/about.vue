<template>
    <div class="h5_about">

      <div id="content">
        <div class="banner"><img :src="banner" alt="#"></div>

        <div class="company_info">
          <nav>公司简介</nav>
          <p>  南京鑫倍泽物联科技有限公司总部位于紫金山脉之南麒麟科技创新园
            华清园。自成立后，一直以南理工为科研后盾，与该校的机器人研究
            所、自动化学院等有长期合作关系。目前已推出新零售模式下的果汁
            机器人+网红产品无人化购物场景，新产品落地正处于大力推广阶段。
            新配套-“拿了就走”、“关门结算”的自助贩售机（人脸识别技术、重力
            感应、红外扫码、后台数据采集、分析、结算）快速落地是我们团队
            经验整合所得，打造具有现代感的无人值守购物体验店。体现出鑫倍
            泽具有自动化核心技术与多层经验，最终实现新零售“无人果吧”,实现
            资源共享。·维空间·隶属于南京鑫倍泽物联科技有限公司 </p>
        </div>
        <div class="company_info">
          <nav>企业文化</nav>
          <p>以高品质的服务 / 稳健的技术 / 向用户提供 美味可口的饮品</p>
          <p>持续关注新的饮品走向 / 积极探索新的用户需求 / 不断为用户 提供创新的产品</p>
          <p>为用户设计优秀的橙汁新品 / 捕捉有效的客户信息 / 促进橙汁行 业的快速发展</p>
        </div>
        <div id="item">
          <div class="item">
            <img :src="company.img1" alt="">
            <p>品类介绍</p>
          </div>
          <div class="item">
            <img :src="company.img2" alt="">
            <p>公司优势</p>
          </div>
          <div class="item">
            <img :src="company.img3" alt="">
            <p>会员加盟</p>
          </div>
          <div class="item">
            <img :src="company.img4" alt="">
            <p>发展规划</p>
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
        name: "about",
        data(){
          return{
              banner:require('../../assets/img/banner_about.png'),
            company:{
                img1: require('../../assets/img/company_10.jpg'),
                img2: require('../../assets/img/company_07.jpg'),
                img3: require('../../assets/img/company_18.jpg'),
                img4: require('../../assets/img/company_15.png'),
            }
          }
        }
    }
</script>

<style scoped>

  body{
    background: #efefef;
  }

  /* content */

  .banner img{
    width: 100%;
  }
  .banner{
    padding-bottom: 0.3rem;
  }


  .company_info{
    background: #fff;
    padding: 0.3rem;
    font-size: 0.24rem;
    color: #333333;
  }
  .company_info nav{
    font-size: 0.3rem;
    padding-left: 0.25rem;
    border-left: 0.02rem solid #ff7500;
  }
  .company_info p{
    margin-top: 0.3rem;
    text-indent: 2em;
  }

  #item{
    padding: 0.3rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 0.3rem;
  }
  .item{
    position: relative;
    width:3.39rem;
    height: 2.44rem;
    margin-top: 0.2rem;
    overflow: hidden;
  }
  .item img{
    width: 100%;
  }
  .item p{
    position: absolute;
    bottom: 0;
    font-size:0.3rem;
    line-height: 0.6rem;
    width: 100%;
    background: #c85d00;
    text-align: center;
    color: #fff;
    opacity: 0.8;
  }



  /* footer*/


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
