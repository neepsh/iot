<template>
    <div class="web_odds">
        <div id="banner">
            <img :src="msg.banner" alt="banner">
        </div>
        <nav class="nav">
            <p>我们的优势</p>
            <span>Our Advantages</span>
        </nav>
        <div id="contents">

            <div class="item">
                <div class="active">
                    <nav>微信商城</nav>
                    <div class="item_info">打通线上营销渠道结合后台大数据实现人货精准，更高程度的服务模式和增加客户的消费体验感 ，凭借微信高质量活跃用户，商城依托于微信公众号，持续为商城带来有效的用户，增加平台收入来源</div>
                    <div class="line" style="background: rgb(49, 83, 212)"></div>
                </div>
                <div>
                    <nav>先进钝刀榨取技术</nav>
                    <div class="item_info">创新性采用 机械手压力感应系统，搭配使用钝刀的机械手，做到了榨取过程中橙子果肉的完整性，颠覆原有鲜榨橙汁口感</div>
                    <div class="line" style="background: rgb(84, 196, 197)"></div>
                </div>
                <div>
                    <div class="line" style="background: rgb(254, 188, 0)"></div>
                    <nav>后台管理系统</nav>
                    <div class="item_info">拥有强大的数据统计和分析能力，对近期销售情况分类整理，让您把控第一手市场行情</div>
                </div>
                <div>
                    <div class="line" style="background: rgb(234, 105, 64)"></div>
                    <nav>手操系统</nav>
                    <div class="item_info">使用物联网技术将手机和机器实时相连，实现远程远程操控机器，让你在家也能高枕无忧</div>
                </div>
                <div>
                    <div class="line" style="background: rgb(195, 177, 171)"></div>
                    <nav>运维团队</nav>
                    <div class="item_info">高效的运维团队采用线上线下结合的方式，在增加曝光度的同时也增加产品的知名度，为您带来源源不断的客源</div>
                </div>
            </div>
            <div class="list">
                <div class="list_content">

                    <div class="list_img active">
                        <img :src="msg.img1" alt="#">
                    </div>
                    <div class="list_img"><img :src="msg.img2" alt="#"></div>
                    <div class="list_img"><img :src="msg.img3" alt="#"></div>
                    <div class="list_img"><img :src="msg.img4" alt="#"></div>
                    <div class="list_img"><img :src="msg.img5" alt="#"></div>

                </div>

            </div>
           <!-- <div class="item">
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
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "odds",
        data(){
            return{
                msg:{
                    banner:require('../../assets/img/odds_bg.jpg'),
                    img1:require('../../assets/img/odds3.png'),
                    img2:require('../../assets/img/odds5.png'),
                    img3:require('../../assets/img/odds1.png'),
                    img4:require('../../assets/img/odds2.png'),
                    img5:require('../../assets/img/odds4.png'),
                }
            }
        },
        mounted() {
            var aItem=document.querySelectorAll('.item>div'),
            aBox=document.querySelectorAll('.list_img');
            var oLast=aItem[0];

            for(var i=0;i<aItem.length;i++){
                aItem[i].index=i;
                aItem[i].onmouseover=function () {
                    for(var i=0;i<aBox.length;i++){
                        aBox[i].classList.remove('active');
                    }
                    aBox[this.index].classList.add('active');
                    oLast.classList.remove('active');
                    this.classList.add('active');
                    oLast=this
                }
            }
        }
    }
</script>

<style scoped>


    .list_content{
        width: 500px;
        height: 100%;
        margin: 0 auto;
        position: relative;
    }
    .list_img{
        height: 500px;
        width: 500px;
        display: none;
        text-align: center;
    }
    .list_img img{
        height: 100%;
    }
    .line{
        width: 6px;
        border-radius: 3px;
        height: 0;
        background: #d9d9d9;
        left: 0;
        position: absolute;
        top: 0;
        transition: 0.3s;
    }
    .active .line{
        height: 100%;
    }
    .active{
        display: block;
    }
    .active .item_info{
        display: block;
    }
    .item_info{
        padding-top: 20px;
        text-indent: 2em;
        font-size: 16px;
        line-height: 30px;
        display: none;
    }
    .item nav{
        margin-top: 60px;
        font-size: 24px;
        font-weight: bold;
    }
    #banner img{
        width: 100%;
    }
    .item>div{
        cursor: pointer;
        padding-left: 32px;
        position: relative;
    }
    #contents{
        width: 1200px;
        margin: 30px auto;
        display: flex;
        justify-content: space-between;
    }
    .item{
        color: #666666;
        width: 488px;
    }
    .list{
        flex-grow: 2;
    }
    .nav{
        margin-top: 20px;
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
        left: 45%;
        padding: 0 10px;
    }
   /* .content{
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
    }*/
</style>
