<template>
    <div class="web_join">
        <div id="banner">
            <img :src="msg.banner" alt="">
        </div>
        <div id="content">
            <div class="content">
                <nav class="nav">
                    <p>案例活动</p>
                    <span>Case activity</span>
                </nav>
                <div class="product">
                    <div class="item">
                        <img :src="msg.bg_product1" alt="">
                        <div class="info">
                            <div class="price">会员价： <span>6.88万</span></div>
                            <p>加盟模式: 加盟费20万（5台起）每台押金6.88万</p>
                            <p>服务条款：软件后台收据服务支持</p>
                        </div>
                    </div>
                    <div class="item">
                        <img :src="msg.bg_product2" alt="">
                        <div class="info">
                            <div class="price">会员价： <span>6.88万</span></div>
                            <p>加盟模式: 加盟费20万（5台起）每台押金6.88万</p>
                            <p>服务条款：软件后台收据服务支持</p>
                        </div>

                    </div>
                    <div class="item">
                        <img :src="msg.bg_product3" alt="">
                        <div class="info">
                            <div class="price">会员价： <span>6.88万</span></div>
                            <p>加盟模式: 加盟费20万（5台起）每台押金6.88万</p>
                            <p>服务条款：软件后台收据服务支持</p>
                        </div>
                    </div>
                    <div class="item">
                        <img :src="msg.bg_product4" alt="">
                        <div class="info">
                            <div class="price">会员价： <span>6.88万</span></div>
                            <p>加盟模式: 加盟费20万（5台起）每台押金6.88万</p>
                            <p>服务条款：软件后台收据服务支持</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jion",
        data() {
            return {
                msg: {
                    banner: require('../../assets/img/odds_banner.png'),
                    bg_product1: require('../../assets/img/bg_product3.png'),
                    bg_product2: require('../../assets/img/bg_product4.png'),
                    bg_product3: require('../../assets/img/bg_product1.png'),
                    bg_product4: require('../../assets/img/bg_product2.png'),
                    icon: {
                        img1: require('../../assets/img/c_icon_03.png'),
                        img2: require('../../assets/img/c_icon_05.png'),
                        img3: require('../../assets/img/c_icon_07.png'),
                        img4: require('../../assets/img/coorp_26.jpg'),
                    }
                }
            }
        }
    }
</script>

<style scoped>

    #banner img {
        width: 100%;
    }

    #content {
        width: 1200px;
        padding-top: 55px;
        margin: 0 auto;
        margin-bottom: 60px;
    }

    .nav {
        text-align: center;
        position: relative;
    }

    .nav p {
        font-size: 24px;
        padding: 0 200px 22px 200px;
        width: 180px;
        margin: 0 auto;
        border-bottom: 2px solid #ff7500;
    }

    .nav span {
        display: inline-block;
        font-size: 18px;
        color: #656565;
        position: absolute;
        bottom: -10px;
        background: #fff;
        left: 43%;
        padding: 0 10px;
    }

    .product {
        margin: 30px 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .product > .item img {
        width: 592px;
    }

    .product > .item {
        margin-bottom: 15px;
    }

    .info {
        color: #333333;
        margin-top: -146px;
        padding-left: 20px;
        font-size: 18px;
    }

    .price {
        font-size: 24px;
        padding-bottom: 18px;
    }

    .price span {
        font-size: 36px;
        color: #ff0000;
    }

    .info p {
        padding-bottom: 16px;
    }
    .growing{
        margin: 30px 0;
        display: flex;
        justify-content: space-around;
    }
    .growing_list{
        width: 372px;
        height: 440px;
        background: #efefef;
        text-align: center;
    }
    .growing_list>p >span{
        font-size: 18px;
        display: inline-block;
        width: 100%;
        padding-bottom: 20px;
        color: #333333;
    }
    .growing_icon{
        width: 225px;
        height: 225px;
        background: #ff7500;
        color: #fff;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 18px auto 30px;
    }
    .growing_icon img{
        width:129px ;
        height: 114px;
    }
    .growing_icon  span{
        font-size: 42px;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    .growing_list>span{
        display: inline-block;
        width: 100%;
        font-size: 30px;
        color: #ff7500;
    }
    .growing_img img{
        width: 100%;
    }
    .growing_img{
        position: relative;
    }
    .growing_img p{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:50px;
        align-content: center;
        flex-wrap: wrap;
    }
    .growing_img span{
        text-align: center;
        display: inline-block;
        width: 100%;
    }
</style>
