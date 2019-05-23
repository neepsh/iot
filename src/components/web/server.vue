<template>
    <div class="web_server">
        <div id="banner">
            <img :src="banner" alt="">
        </div>

        <div id="content">
            <div class="servers">
                <nav class="nav">
                    <p>服务与支持</p>
                    <span>Service and Support</span>
                </nav>
                <div class="servers_content">
                    <nav> <i class="icon-0838"></i> 高保障多样化的保修服务</nav>
                    <p>1、开发与使用支持：通过远程、现场方式，提供软硬件开发的技术指导，产品使用答疑。</p>
                    <p>2、培训：针对渠道、代理商、集成商的产品、开发、使用培训。</p>
                    <p>3、行业解决方案集成与推广：针对行业制定、征集行业解决方案。</p>
                    <p>4、开发定制服务：根据客户需求，提供产品软硬件定制服务。</p>
                </div>
                <div class="servers_content">
                    <nav> <i class="icon-0329"></i> 服务内容</nav>
                    <p>1、培训支持：总部针对运营商进行统一运维技术培训，快速掌握设备运营基础技能。</p>
                    <p>2、技术支持：7*24小时视频技术指导，终身免费软件升级服务。</p>
                    <p>3、运营支持：总部针对运营商设备设备应用场景、营销活动、市场推广等营销型活动给予培训、策划、指导 更好打造区域消费理念。</p>
                    <p>4、供应链支持：精选来自各地橙子原产地直供。365天为您保障新鲜稳定货源供应，让您更加便捷。</p>
                    <p>5、服务支持：7*24h客服一对一服务。</p>
                    <p>6、数据支持：总部定期利用大数据分析用户货品需求、用户习惯，实时优化投放，让运营利益得到最大化。</p>
                    <p>7、全保VIP服务：返厂寄修、上门服务、意外保障、软件服务。</p>
                    <p>8、延保服务： 在原有保修基础上，可增加1-4年保修服务，总体保修时间不超过5年。保修期内可无限次免费 维修或更换整机部件（人为损坏除外）。保修范围涵盖整机核心部件。</p>
                    <p>8、延保服务： 在原有保修基础上，可增加1-4年保修服务，总体保修时间不超过5年。保修期内可无限次免费 维修或更换整机部件（人为损坏除外）。保修范围涵盖整机核心部件。</p>
                    <p>9、意外保障服务：服务有效期限为3年，服务到期或服务次数使用完毕服务自动终止；本服务是针对保内产品 提供的意外保障，过保设备如需购买服务需同时购买延保服务。</p>
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
                banner:require('../../assets/img/hezuo_banner_02.jpg'),
            }
        }
    }
</script>

<style scoped>
    #banner img{
        width: 100%;
    }

    #content{
        width: 1200px;
        padding-top: 55px;
        margin: 0 auto;
        margin-bottom: 60px;
    }
    .nav{
        text-align: center;
        position: relative;
    }
    .nav p{
        font-size: 24px;
        padding:0  200px 22px 200px;
        width: 180px;
        margin: 0 auto;
        border-bottom: 2px solid #ff7500;
    }
    .nav span{
        display: inline-block;
        font-size: 18px;
        color: #656565;
        position: absolute;
        bottom: -10px;
        background: #fff;
        left: 43%;
        padding: 0 10px;
    }
    .servers_content nav{
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    .servers_content{
        margin-top: 40px;
    }
    nav>i{
        color: #ff7500;
        display: inline-block;
        padding-right: 14px;
    }
    .servers_content p{
        line-height: 36px;
        font-size: 14px;
        color: #656565;
    }




</style>
