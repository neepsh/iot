<template>
    <div class="index">
        <div id="content">
            <!--    banner -->
            <section class="banner" ref="banner_content">
                <div class="btn_banner btn_left" ><i  ref="btn_left" class="icon-0243"></i></div>
                <div class="btn_banner btn_right" ><i class="icon-0244" ref="btn_right"></i></div>
                <div class="banner_ref" ref="banner">
                    <img :src="msg.banner" alt="#">
                    <img :src="msg.banner1" alt="#">
                    <img :src="msg.banner2" alt="#">
                    <img :src="msg.banner3" alt="#">
                </div>
                <div class="banner_line">
                    <div class="line_active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
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

                <!--   产品-->
                <div class="product" v-miss="'missflower'">
                    <div class="culture_name">
                        <p>Brand product</p>
                        <span>优质产品</span>
                    </div>
                    <div>
                        <div class="product_list">

                            <div>
                                <router-link to="info"><img :src="msg.product2" alt="product"></router-link>
                            </div>
                            <div class="product_info">
                                阿橙果啦·果汁机器人占地仅1.2平米，支持主流的快捷扫码支付，微信、支付宝等。可存放80套专用纸杯、杯盖和吸管，搭载160个鲜橙，24H待机状态，设备采用仿真人动作的机械手臂控制方式，装配了自动识别清洗系统。更进一步的严控果皮和要萃取果肉部分的相对间隔，触发指令后机械手臂会自动切半、钝刀低速正反转压力感应萃取、保证Vc的不流失，获取原汁原味的果粒，果肉，果纤维。灌装、封盖全程智能化生产流程，整个服务过程可以人机互动，给你解说每一步动作执行情况，并且还会告诉你“等你爱上维空间果粒橙”，给你带来的健康活力之佳语。完美的整个过程为你制作出的每杯果粒橙，都将充满新鲜、原汁原味。
                            </div>
                            <div class="product_name">
                                <p>阿橙果啦·果汁机器人介绍</p>
                                <span>Responsible for Our Life</span>
                            </div>
                        </div>
                        <div class="product_list">
                            <div><img :src="msg.product3" alt="product"></div>
                            <div class="product_info">
                                以物联技术为核心，运用自主研发物联智能化设备结合互联网，人工智能、大数据等技术手段。运用创新的模块化‘搭积木’体系，利用智慧科技，紧跟时代发展策略，对快消零售商品（如新鲜水果、蔬菜、网红产品等）实现人货精准、超值价格、模块化、以及全新的服务模式。打破原始的零售模式，，给你带来享受乐趣般的购物体验。
                            </div>
                            <div class="product_name">
                                <p>阿橙果啦·新零售</p>
                                <span>Responsible for Our Life</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--      公司地址  -->
             <!--   <div class="address">

                    <div class="address_name">
                        <p>Company address</p>
                        <span>公司地址</span>
                    </div>
                  &lt;!&ndash;  <div class="address_content">
                        <div class="address_map"><img :src="msg.map" alt="map"></div>
                        <div class="address_info">
                            <div class="address_item">
                                <i class="icon-0255"></i>
                                <p>联系方式</p>
                                <div>400-8288-251</div>
                            </div>
                            <div class="address_item">
                                <i class="icon-0956"></i>
                                <p>服务邮箱</p>
                                <div>zhangyueqing @njxz.online</div>
                            </div>
                            <div class="address_item">
                                <i class="icon-0504"></i>
                                <p>公司地址</p>
                                <div>南京麒麟科技创新园华清园5栋308</div>
                            </div>
                        </div>
                    </div>&ndash;&gt;
                </div>-->

                <!--我们的优势-->
                <div class="odds">

                    <div class="culture_name">
                        <p>Our advantage</p>
                        <span>我们的优势</span>
                    </div>
                    <div class="odds_content">
                        <div class="odds_list">

                            <div class="img">
                                <i class="icon-0524"></i>
                            </div>
                            <div>在线商城</div>
                        </div>
                        <div class="odds_list">

                            <div class="img">
                                <i class="icon-0545"></i>
                            </div>
                            <div>后台管理系统</div>
                        </div>
                        <div class="odds_list">

                            <div class="img">
                                <i class="icon-0531"></i>
                            </div>
                            <div>手操系统</div>
                        </div>
                        <div class="odds_list">

                            <div class="img">
                                <i class="icon-0823"></i>
                            </div>
                            <div>先进榨汁技术</div>
                        </div>
                        <div class="odds_list">

                            <div class="img">
                                <i class="icon-0949"></i>
                            </div>
                            <div>运维团队</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    </div>
</template>

<script>
    import { doMove } from "../../assets/js/move";

    export default {
        name: "index",
        directives:{
            miss:{
                bind:function (el,data) {
                    console.log(data)
                }
            }
        },
        data() {
            return {
                msg: {
                    banner: require('../../assets/img/banner.png'),
                    banner1: require('../../assets/img/index_banner.jpg'),
                    banner2: require('../../assets/img/index_banner1.jpg'),
                    banner3: require('../../assets/img/index_banner2.jpg'),
                    product1: require('../../assets/img/index_product_03.jpg'),
                    product2: require('../../assets/img/products.png'),
                    product3: require('../../assets/img/index_product_11.jpg'),
                    culture: require('../../assets/img/culture.png'),
                    map: require('../../assets/img/adress.png')
                }
            }
        },
        methods:{
            banner(){
                let oBox=this.$refs['banner'];
                oBox.innerHTML+=oBox.innerHTML;
                var aLine=document.querySelectorAll('.banner_line div');

                let aImg=oBox.querySelectorAll('img');

                var oW=this.$refs['banner_content'].clientWidth,oH=oW*647/1920;

                var timer=null,num=0,oLast=aLine[0];

                for(var i=0;i<aImg.length;i++){

                    aImg[i].style.width=this.$refs['banner_content'].clientWidth+'px';

                }
                this.$refs['banner_content'].style.height=oH+'px';

                this.$refs['btn_left'].onclick=function(){

                    if(num<=0){
                        console.log(num);
                        num=aImg.length/2;
                        oBox.style.left= -num*oW + 'px';
                    }
                    num--;
                    doMove(oBox,{left:-num*oW});
                    show_line(num)
                };
                this.$refs['btn_right'].onclick=function(){
                    num++;
                    doMove(oBox,{left:-num*oW},function () {
                        if(num>=aImg.length/2){
                            oBox.style.left=0;
                            num=0;
                        }
                    });
                    show_line(num)
                };
                oBox.onmouseover=function(){
                    clearInterval(timer);
                };
                oBox.onmouseout=function(){
                    timer=setInterval(show_banner,4000)
                };
                timer=setInterval(show_banner,4000);

                function show_banner() {
                    num++;
                    doMove(oBox,{left:-num*oW},function () {
                        if(num>=aImg.length/2){
                            oBox.style.left=0;
                            num=0;
                        }
                    });
                    show_line(num)

                }

                function show_line(num) {
                    oLast.classList.remove('line_active');
                    aLine[num%4].classList.add('line_active');
                    oLast=aLine[num%4];
                }

                for(var i=0;i<aLine.length;i++){
                    aLine[i].index=i;
                    aLine[i].onclick=function () {
                        num=this.index;
                        doMove(oBox,{left:-num*oW});
                        show_line(num)
                    }
                }

            }

        },
        mounted() {
            this.banner();
        }
    }
</script>

<style scoped>

    /* banner */

    .banner_line{
        display: flex;
        justify-content: center;
        z-index: 10;
        position: absolute;
        bottom: 10px;
        width: 100%;
    }
    .banner_line div{
        height: 10px;
        width: 20px;
        border-radius: 5px;
        background: #fff;
        margin-left: 12px;
        cursor: pointer;
        transition: 0.6s;
    }
    .banner .line_active{
        width: 40px;
        background: #ff7500;
    }
    .btn_banner{
        position: absolute;
        width: 30%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .btn_banner:hover i{
        opacity: 1;
    }
    .btn_banner i:hover{
        transform: scale(1.4);
    }

    .btn_banner i{
        transition: 0.6s;
        font-size: 50px;
        color: #fff;
        opacity: 0.4;
        cursor: pointer;
    }
    .btn_right{
        left: 70%;
    }
    .banner_ref{
        width: 20000px;
        display: flex;
        position: absolute;
    }
    .banner{
        position: relative;
        overflow: hidden;
        height: 500px;
    }

    .content {
        width: 1200px;
        margin: 0 auto;
    }

    .company_info {
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
        padding-bottom: 55px;
        border-bottom: 3px solid #f87704;
    }

    .company_img img {
        width: 430px;
        height: 430px;
        transform: scale(1);
        transition: 0.6s;
    }
    .company_img img:hover{
        transform: scale(1.1);
    }
    .company_img {
        margin-left: 66px;
        overflow: hidden;
    }

    .company_p {
        font-size: 16px;
        color: #656565;
        text-indent: 2em;
        margin-top: 55px;
        line-height: 30px;
    }

    .company_name {
        width: 270px;
        height: 50px;
        border: 2px solid #f88015;
        text-align: center;
        position: relative;
    }

    .company_name p {
        font-size: 19px;
        color: #656565;
    }

    .company_name span {
        font-size: 28px;
        color: #000;
        display: inline-block;
        background: #fff;
        padding: 0 50px;
    }

    .company_p p{
        width: 700px;
    }

    /*企业文化*/
    .culture_name {
        width: 270px;
        height: 50px;
        border: 2px solid #f88015;
        text-align: center;
        position: relative;
    }

    .culture_name p {
        font-size: 19px;
        color: #656565;
    }

    .culture_name span {
        font-size: 28px;
        color: #000;
        display: inline-block;
        background: #fff;
        padding: 0 50px;
    }

    .culture {
        padding: 50px 0;
        border-bottom: 3px solid #f87704;

    }

    .culture_list {
        margin-top: 100px;
        background: #fff0d7;
        margin-bottom: 25px;
        padding: 35px 200px 60px 200px;
    }

    .culture_list nav {
        text-align: center;
        font-size: 30px;
        padding-bottom: 60px;
    }

    .culture_list div {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .cul_type img {
        width: 100%;
    }

    /* 产品*/
    .product {
        margin-top: 30px;
    }

    .product_info {
        width: 281px;
        line-height: 24px;
        color: #101010;
    }

    .product_list:nth-of-type(2n+1) .product_info {
        border-top: 3px solid #b5b5b5;
        border-right: 3px solid #b5b5b5;
        padding: 25px;
    }
    .product_list>div{
        overflow: hidden;
    }

    .product_list:nth-of-type(2n+1) .product_name:after {
        content: '';
        display: block;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background: #000;
        position: absolute;
        bottom: -7.5px;
        right: -7.5px;
    }

    .product_list:nth-of-type(2n) .product_info {
        border-left: 3px solid #b5b5b5;
        border-bottom: 3px solid #b5b5b5;
        padding: 25px;
    }

    .product_list:nth-of-type(2n) .product_name:after {
        content: '';
        display: block;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background: #000;
        position: absolute;
        bottom: -7.5px;
        left: -7.5px;
    }

    .product_list {
        display: flex;
        font-size: 14px;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;
    }

    .product {
        padding-bottom: 50px;
        border-bottom: 3px solid #f87704;
    }

    .product_list img {
        width: 429px;
        transition: 0.6s;
        transform: scale(1);
    }
    .product_list img:hover{
        transform: scale(1.4);
    }

    .product_list:nth-of-type(2n) {
        flex-direction: row-reverse;
    }

    .product_name p {
        padding-bottom: 5px;
        font-size: 24px;
        color: #414141;
    }

    .product_name span {
        color: #414141;
    }

    .product_name {
        padding-left: 12px;
        position: relative;
        padding-bottom: 10px;
        border-bottom: 2px solid #b5b5b5;
        width: 303px;
    }

    /* 公司地址 */

    .address_name p {
        font-size: 19px;
        color: #656565;
    }
    /*

    .address_name span {
        font-size: 28px;
        color: #000;
        display: inline-block;
        background: #fff;
        padding: 0 50px;
    }

    .address_name {
        width: 270px;
        height: 50px;
        border: 2px solid #f88015;
        text-align: center;
        position: relative;
        margin: 50px auto;
    }

    .address_content {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .address_info {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        padding-left: 20px;
        padding-top: 30px;
    }
    .address_item{
        text-align: center;
        width: 30%;
        color: #ff7500;
    }
    .address_item i{
        font-size: 64px;
    }
    .address_item p{
        font-size: 16px;
        padding: 20px 0;
    }
    .address_item div{
        font-size: 18px;
    }
    .address {
        margin-bottom: 30px;
    }*/

    /*公司优势*/

    .odds{
        padding-top: 30px;
    }
    .odds_content{
        margin: 30px 0 50px;
        display: flex;
        height: 351px;
        background: #fff0d7;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .odds_list{
        font-size: 24px;
        color: #000;
    }
    .odds_list i{
        color: #ff7500;
        display: inline-block;
        padding-bottom: 30px;
        font-size:60px ;
    }

</style>
