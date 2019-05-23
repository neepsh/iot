<template>
    <!--商务合作-->
    <div class="h5_cooperation">

        <div id="banner">
            <img :src="banner" alt="*">
        </div>

        <div id="content">
            <div class="item">
                <nav class="nav">
                    <p>商务合作</p>
                    <span>supply chain</span>
                </nav>
                <div class="item_img content">
                    <img :src="item_img.img1" alt="#">
                </div>

            </div>
            <div class="item">
                <nav class="nav">
                    <p>业务流程及服务</p>
                    <span>Business processes and services</span>
                </nav>
                <div class="item_flex content">
                    <div class="img">
                        <img :src="item_img.img2" alt="#">
                    </div>
                    <div class="info">
                        <p>我们业务流程细化分工</p>
                        <p>最专业，最有效，最优质的各个环节</p>
                        <p>降低各环节成本</p>
                        <p>从而提高整个行业模式和效率...</p>
                    </div>
                </div>
                <div class="item_flex content">
                    <div class="info">
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                    </div>
                    <div class="img">
                        <img :src="item_img.img3" alt="#">
                    </div>
                </div>
            </div>

            <div class="item">
                <nav class="nav">
                    <p>我们的主要渠道</p>
                    <span>Our main channel</span>
                </nav>
                <div class="item_img content">
                    <img :src="item_img.img4" alt="#">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Cooperation",
        data() {
            return {
                banner: require('../../assets/img/hezuo_banner_02.jpg'),
                item_img: {
                    img1: require('../../assets/img/web_item_03.jpg'),
                    img2: require('../../assets/img/web_11.jpg'),
                    img3: require('../../assets/img/web_15.jpg'),
                    img4: require('../../assets/img/web_item_07.jpg'),
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
        position: relative;
        bottom: 12px;
        background: #fff;
        margin: 0 auto;
        padding: 0 10px;
    }
    .content{
        margin: 30px 0;
    }
    .item_img img{
        width: 1079px;
    }
    .item_img{
        padding: 20px 0;
        text-align: center;
    }
    .item_flex{
        display: flex;
        justify-content: space-around;
    }
    .item_flex:nth-of-type(1) img{
        width: 400px;
        height: 341px;
    }
    .item_flex:nth-of-type(2) img{
        width: 390px;
        height: 390px;
    }
    .item_flex>div{
        width: 600px;
    }
    .img{

        text-align: center;
    }
    .info{
        font-size:18px ;
        padding-left: 30px;
    }
    .info p{
        padding:  15px 0;
    }
    .info{
        margin-top: 30px;
    }
    .info i{
        display: inline-block;
        padding-right: 15px;
        color: #ff7500;
    }


</style>
