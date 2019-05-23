<template>
    <div class="web_odds">
        <div id="banner">
            <img :src="msg.banner" alt="banner">
        </div>
        <div id="content">
            <div class="item">
                <nav class="nav">
                    <p>公司简介</p>
                    <span>Company profile</span>
                </nav>
                <div class="content">
                    <div class="img"><img :src="msg.img1" alt=""></div>
                    <div class="info">
                        <p>破除快速致富的迷思，制定行之有效的目标计划沉淀出一定的口碑，转介绍 升级</p>
                        <p>超高度专业，高度附加值方向发展。机构设置有培训部，营销中心，活动推广中心</p>
                        <p>持续不断的创造经营，不断进取，智能服务，精简流程，超前技术模式，绿 色环境配套人员</p>
                        <p>没有找出店铺在市场上的区隔定位 </p>
                    </div>
                </div>
            </div>
            <div class="item">
                <nav class="nav">

                    <p>我们的目标</p>
                    <span>Our goal</span>
                </nav>
                <div class="content">
                    <div class="content_img">
                        <img :src="msg.img2" alt="">
                    </div>
                </div>
            </div>
            <div class="item">
                <nav class="nav">
                    <p>消费模式</p>
                    <span>Consumption patterns</span>

                </nav>
                <div class="content">
                     <div class="item">
                         <img :src="msg.img3" alt="">
                     </div>
                    <div class="item">
                        <img :src="msg.img4" alt="">
                    </div>
                    <div class="item">
                        <img :src="msg.img5" alt="">
                    </div>
                </div>

            </div>
            <div class="item">
                <nav class="nav">
                    <p>六大优势</p>
                    <span>Six major advantages</span>
                </nav>
                <div class="content">
                    <div class="content_img">
                        <img :src="msg.img6 " alt="">
                    </div>
                </div>
            </div>
            <div class="item">
                <nav class="nav">
                    <p>产品体系</p>
                    <span>Product system</span>
                </nav>
                <div class="content">
                    <div class="items">
                        <div>
                            <img :src="msg.product1" alt="">
                        </div>
                        <p><i class="icon-0350"></i> 果粒橙口味纯正 </p>
                        <p><i class="icon-0350"></i> 榨取快速卫生 </p>
                        <p><i class="icon-0350"></i> 机器占地面积小 </p>
                    </div>
                    <div class="items">
                        <div>
                            <img :src="msg.product2" alt="">
                        </div>
                        <p><i class="icon-0350"></i> 果粒橙口味纯正 </p>
                        <p><i class="icon-0350"></i> 榨取快速卫生 </p>
                        <p><i class="icon-0350"></i> 机器占地面积小 </p>
                    </div>
                    <div class="items">
                        <div>
                            <img :src="msg.product2" alt="">
                        </div>
                        <p><i class="icon-0350"></i> 果粒橙口味纯正 </p>
                        <p><i class="icon-0350"></i> 榨取快速卫生 </p>
                        <p><i class="icon-0350"></i> 机器占地面积小 </p>
                    </div>
                    <div class="items">
                        <div>
                            <img :src="msg.product2" alt="">
                        </div>
                        <p><i class="icon-0350"></i> 果粒橙口味纯正 </p>
                        <p><i class="icon-0350"></i> 榨取快速卫生 </p>
                        <p><i class="icon-0350"></i> 机器占地面积小 </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "odds",
        data(){
            return{
                msg:{
                    banner:require('../../assets/img/odds_banner.png'),
                    img1:require('../../assets/img/odds1.png'),
                    img2:require('../../assets/img/odds3.png'),
                    img3:require('../../assets/img/odds4.png'),
                    img4:require('../../assets/img/odds5.png'),
                    img5:require('../../assets/img/odds6.png'),
                    img6:require('../../assets/img/odds2.png'),
                    product1:require('../../assets/img/product1.png'),
                    product2:require('../../assets/img/product2.png'),

                }
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
    .content{
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
        flex-wrap: nowrap;
    }
    .img img{
        width:327px ;
        height: 327px;
    }
    .info{
        flex-grow: 3;
        margin-left: 120px;
    }
    .info p{padding-bottom:42px;line-height: 36px;color: #666666; font-size: 18px;}
    .info p:nth-last-of-type(1){padding-bottom: 0}
    .content_img {padding:  30px 0}
    .items:nth-of-type(1) img{
        width:108px ;
        height: 144px;
    }
    .items>div{
        text-align: center;
        width: 267px;
        display: flex;
       align-items: center;
        justify-content: center;
        height: 167px;
        background: #ffecd6;
    }
    .items{
        padding: 12px;
        border: 1px solid #d3d3d3;
    }
    .items img{
        width:150px ;
        height: 100px;
    }
    .items i{
        display: inline-block;
        color: #ff0000;
        margin-right: 15px;
        padding-left: 8px;
    }
    .items p{
        margin-top: 20px;
        font-size: 18px;
    }
</style>
