<template>
    <div class="web_server">
        <div id="banner">
            <img :src="banner" alt="">
        </div>

        <div id="contents">
            <div class="servers">
                <nav class="nav">
                    <p>服务与支持</p>
                    <span>Service and Support</span>
                </nav>
                <!--<div class="servers_content">
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
                    <p>9、意外保障服务：服务有效期限为3年，服务到期或服务次数使用完毕服务自动终止；本服务是针对保内产品 提供的意外保障，过保设备如需购买服务需同时购买延保服务。</p>
                </div>-->
                <div class="item">
                    <div v-for="obj in item">
                        <div class="item_img" :class="obj.img"></div>
                        <div class="item_name">{{obj.name}}</div>
                        <div class="item_info">{{obj.info}}</div>
                    </div>

                </div>
                <div class="list">
                    <div v-for="obj in list">
                        <div class="list_img" :class="obj.style"></div>
                        <div class="list_content">
                            <nav>{{obj.name}}</nav>
                            <div>{{obj.info}}</div>
                        </div>
                    </div>
                </div>
                <div class="notes">注：如需咨询更详细的服务内容，请来电咨询我们 <input type="tel" value="400-8288-251"></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "server",
        data(){
            return {
                banner:require('../../assets/img/server_banner_02.jpg'),
                item:[
                    {
                        name:"开发与使用",
                        img:"item_img1",
                        info:"通过远程、现场方式，提供软硬件开发的技术指导，产品使用答疑。"
                    },
                    {
                        name:"培训",
                        img:"item_img2",
                        info:"针对渠道、代理商、集成商的产品、开发、使用培训。"
                    },
                    {
                        name:"集成与推广",
                        img:"item_img3",
                        info:"针对行业制定、征集行业解决方案。"
                    },{
                        name:"开发定制服务",
                        img:"item_img4",
                        info:"根据客户需求，提供产品软硬件定制服务。"
                    }
                ],
                list:[
                    {
                        name:"手操支持",
                        style:"list_img1",
                        info:"手机上操作机器更加方便快捷"
                    },
                    {
                        name:"运营支持",
                        style:"list_img2",
                        info:"总部针对运营商进行统一运维技术培训"
                    },
                    {
                        name:"技术支持",
                        style:"list_img3",
                        info:"7*24小时视频技术指导，终身免费"
                    },
                    {
                        name:"后台支持",
                        style:"list_img4",
                        info:"通过后台管理系统等快更准确了解详情"
                    },
                    {
                        name:"供应链支持",
                        style:"list_img5",
                        info:"精选来自各地橙子原产地直供"
                    },
                    {
                        name:"商城支持",
                        style:"list_img6",
                        info:"购物商城极大的方便了消费者"
                    },
                    {
                        name:"客服支持",
                        style:"list_img7",
                        info:"7*24h客服一对一服务。"
                    },
                    {
                        name:"vip服务支持",
                        style:"list_img8",
                        info:"返厂寄修、上门服务、意外保障、软件服务"
                    },
                    {
                        name:"保障支持",
                        style:"list_img9",
                        info:"保修期内可无限次免费 维修或更换"
                    }

                ]
            }
        }
    }
</script>

<style scoped>

    .notes{
        margin-top: 20px;
    }
    .notes input{
        color: #ff7500;
    }
    .list_content nav{

    }
    .list{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        flex-wrap: wrap;
        padding: 25px;
        background:#ededed ;
    }
    .list>div{
        width: 377px;
        height: 152px;
        background: #fff;
        margin-top: 15px;
        display: flex;
        cursor: pointer;
        justify-content: space-between;
    }
    .list>div:hover{
        box-shadow: 0 0 8px #656161;
        border-radius: 4px;
    }
    .list_content{
        flex-grow: 2;
        margin-left:30px ;
    }
    .list_content nav{
        margin-top: 38px;
        font-size: 22px;
        font-weight: bold;
    }
    .list_content div{
        width: 190px;
        color: #666666;
        margin-top: 8px;
        font-size: 18px;
        line-height: 30px;
    }
    .list_img1{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -672px;
    }
    .list_img2{
         background: url("../../assets/img/server_bg.png") no-repeat;
         background-position-y: -785px;
     }
    .list_img3{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -900px;
    }
    .list_img4{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1013px;
    }
    .list_img5{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1129px;
    }
    .list_img6{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1243px;
    }
    .list_img7{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1357px;
    }
    .list_img8{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1471px;
    }
    .list_img9{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -1585px;
    }

    .list_img{
        height: 76px;
        width: 76px;
        border-radius: 50%;
        margin:40px 0 0 35px ;
    }
    .item_img1{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: 0;
    }
    .item_img2{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -170px;
    }
    .item_img3{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -340px;
    }
    .item_img4{
        background: url("../../assets/img/server_bg.png") no-repeat;
        background-position-y: -510px;
    }
    .item_info{
        width: 216px;
        margin: 20px auto;
        text-indent: 2em;
        font-size: 18px;
        color: #666666;
        text-align: left;
        line-height: 36px;
    }
    .item_name{
        font-size: 22px;
        font-weight: bold;
        margin-top: 15px;
    }
    .item{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        text-align: center;
    }
    .item_img{
        margin: 40px auto 0;
        height: 130px;
        width: 130px;
        border-radius: 50%;
    }
    .item>div{
        width:292px ;
        height: 351px;
        background: #ededed;
        cursor: pointer;
    }
    .item>div:hover{
        box-shadow: 0 0 8px #c5a4a4;
    }
    #banner img{
        width: 100%;
    }

    #contents{
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





</style>
