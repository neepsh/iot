<template>
    <div class="h5_server">


      <div id="content">
        <div id="banner">
          <img :src="banner" alt="*">
        </div>

        <div class="item">
          <nav class="nav">
            <div class="nav_name">服务与支持</div>
            <div class="nav_info">Services Support</div>
          </nav>
          <div class="item">
            <div class="server_name">高保障多样化的报修服务</div>
            <ul>
              <li>1、开发与使用支持：通过远程、现场方式，提供软硬件开发的技术指导，产品使用答疑。</li>
              <li> 2、培训：针对渠道、代理商、集成商的产品、开发、使用培训。</li>
              <li>3、行业解决方案集成与推广：针对行业制定、征集行业解决方案。</li>
              <li>                    4、开发定制服务：根据客户需求，提供产品软硬件定制服务。</li>
            </ul>
          </div>
          <div class="item">
            <div class="server_name">服务内容</div>
            <ul>
              <li>1、培训支持：总部针对运营商进行统一运维技术培训，快速掌握设备运营基础技能。</li>
              <li>2、技术支持：7*24小时视频技术指导，终身免费软件升级服务。</li>
              <li>3、运营支持：总部针对运营商设备设备应用场景、营销活动、市场推广等营销型活动给予培训、策划、指导、更好打造区域消费理念。</li>
              <li>4、供应链支持：精选来自各地橙子原产地直供。365天为您保障新鲜稳定货源供应，让您更加便捷。</li>
              <li>5、服务支持：7*24h客服一对一服务。</li>
              <li>6、数据支持：总部定期利用大数据分析用户货品需求、用户习惯，实时优化投放，让运营利益得到最大化。</li>
              <li>7、全保VIP服务：返厂寄修、上门服务、意外保障、软件服务。</li>
              <li>8、延保服务： 在原有保修基础上，可增加1-4年保修服务，总体保修时间不超过5年。保修期内可无限次免费维修或更换整机部件（人为损坏除外）。保修范围涵盖整机核心部件。</li>
              <li>9、意外保障服务：服务有效期限为3年，服务到期或服务次数使用完毕服务自动终止；本服务是针对保内产品提供的意外保障，过保设备如需购买服务需同时购买延保服务。</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "server",
      data(){
          return {
            banner:require('../../assets/img/web_03.jpg')
          }
      },
        mounted() {
            var path = this.$router.history.current.path;
            if (path.indexOf('table') > 0 || path.indexOf('condition') > 0 || path.indexOf('position') > 0) {
                this.$parent.data.table_h5=true;
            }else {
                this.$parent.data.table_h5=false;
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
    width: 1.48rem;
    border-bottom: 0.02rem solid #8da3ae;
    position: relative;
  }
  .nav_name:after{
    content: "";
    display: block;
    position: absolute;
    bottom: -0.02rem;
    width: 1.48rem;
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
    padding: 0  0.3rem;
    font-size: 0.24rem;
  }
    .item li{
        padding: 0.06rem  0;
        line-height: 0.35rem;
    }

    .server_name{
        font-size: 0.3rem;
        line-height: 0.8rem;
        font-weight: bold;
    }
</style>
