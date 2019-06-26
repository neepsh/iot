<template>
    <div class="web_product">

        <div id="banner">
            <router-link to="info">
                <img :src="data.img1" alt="xbz">
                <img :src="data.img2" alt="xbz">
                <img :src="data.img3" alt="xbz">
            </router-link>

        </div>

       <!-- <div id="content">
            <div class="item">
                <nav class="nav">
                    <p>产品介绍</p>
                    <span>Product introduction</span>
                </nav>
                <div class="item_info">
                    <nav>· 阿橙果啦 · 新零售系列产品</nav>
                    <p>
                        企业以互联网为依托，运用物联网、大数据、人工智能等先进技术手段，对商品的生产、流通与销售过程进行升级改造，进而重塑业态结构与生态圈，
                        并对线上服务、线下体验以及现代物流进行深度融合的零售新模式。</p>
                </div>

                <div class="product">
                    <div class="product_content">
                        <div class="product_name">· 阿橙果啦· 智能机器人水果吧</div>
                        <p>· 阿橙果啦·果汁机器人自2017年初投入研发，是国内首创的能实现自动萃取果粒橙自助销售终端，· 维空间·果汁机器人目前可以实现原味橙汁和橙柠味橙汁。· 维空间·果汁机器人占地仅1.2平米，支持主流的快捷扫码支付，微信、支付宝等。
                            每个终端机器占地仅1.2平米，具备微信等主流消费自助收银功能，可容纳80套专用纸杯、杯盖和吸管，搭载160个鲜橙，完成自动切半、萃取、装杯、封盖一体化生产流程。支持24小时待机状态，设备采用仿真人动作的机械手臂控制方式，配置自动识别清洗系统。
                            更进一步的严控果皮和要萃取果肉部分的相对间隔，触发指令后机械手臂会自动切半、钝刀低速正反转压力感应萃取、保证Vc的不流失，获取原汁原味的果粒，果肉，果纤维。

                            灌装、封盖全程智能化生产流程，整个服务过程可以人机互动，给你解说每一步动作执行情况，并且还会告诉你“等你爱上维空间果粒橙”给你带来的健康活力之佳语。完美的整个过程为你制作出的每杯果粒橙都将充满新鲜、原汁原味。</p>

                    </div>
                    <div class="product_img">
                        <img :src="data.product1" alt="">
                    </div>
                </div>

                <div class="product">
                    <div class="product_content">
                        <div class="product_name">· 阿橙果啦· 果汁机器人</div>
                        <p>由公司核心团队精心研发，南理工多位行业内教授共同协作，解决和突破多项科技难点技术，已经完成第一代（无人果吧）产品的研发工作。
                            该产品能够实现：机器人全程陪同购物，点击屏幕图片（您所需要的水果品种和数量），机器人自动识别你的所选，帮你自动取货，全程你只需手指点点触摸货品按钮。
                            系统智能结算，陪同购物完成，机器人会给你进行自动包装，将您的购物清单及精美的包装递交给你。  </p>
                    </div>
                    <div class="product_img">
                        <img :src="data.product2" alt="">
                    </div>
                </div>

                <div class="product">
                    <div class="product_content">
                        <div class="product_name">· 阿橙果啦 · 智能货柜</div>
                        <p>手机扫码关注 · 维空间 · ，注册 · 维空间 · 会员，开启微信免密功能，进行智能识别解锁，打开柜门，选择属于你的货品。
                            取走货品自动关门，利用“刷脸识别，红外感应等技术”进行结算并瞬间生成购物清单发送你的手机、给你感受“拿了就走”。</p>
                    </div>
                    <div class="product_img">
                        <img :src="data.product2" alt="">
                    </div>
                </div>
                <div class="product">
                    <div class="product_content">
                        <div class="product_name">· 阿橙果啦· 智能机器人水果吧</div>
                        <p>由公司核心团队精心研发，南理工多位行业内教授共同协作，解决和突破多项科技难点技术，已经完成第一代（无人果吧）产品的研发工作。
                            该产品能够实现：机器人全程陪同购物，点击屏幕图片（您所需要的水果品种和数量），机器人自动识别你的所选，帮你自动取货，全程你只需手指点点触摸货品按钮。
                            系统智能结算，陪同购物完成，机器人会给你进行自动包装，将您的购物清单及精美的包装递交给你。 </p>
                    </div>
                    <div class="product_img">
                        <img :src="data.product1" alt="">
                    </div>
                </div>s
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "web_product",
        data(){
            return {
                data:{
                    img1:require('../../assets/img/procut_info.png'),
                    img2:require('../../assets/img/products2.png'),
                    img3:require('../../assets/img/products3.png'),
                }
            }
        }
    }
</script>

<style scoped>
    #banner img{
        width: 100%;
    }

   /* #content{
        width: 1200px;
        padding-top: 55px;
        margin: 0 auto;
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

    .product{
        padding: 24px;
        display: flex;
        justify-content: space-around;
    }
    .product_name{
        font-size: 24px;
        padding-bottom:20px ;
    }
    .product_content{
        width: 659px;
    }
    .product_content p{
        line-height: 30px;
    }
    .item_info{
        margin-top: 40px;
        text-align: center;
    }
    .item_info nav{
        font-size: 24px;
        margin-bottom: 10px;
    }
    .item_info p{
        font-size: 18px;
        color: #656565;
        line-height: 36px;
    }
    .product_img{
        width: 359px;
        height: 359px;
        border-radius:50%;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #fff;
    }
    .product{
        background:#ffecd6;
        margin-top: 30px;
    }
    .product:nth-last-of-type(1){
        margin-bottom: 30px;
    }
    .product:nth-of-type(2n){
        flex-direction: row-reverse;
        background: none;
    }
    .product:nth-of-type(2n) .product_img{
        background:#ffecd6;
    }

*/
</style>
