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
                    <div class="supply">
                        <div class="supply_list">
                            <nav>加盟商</nav>
                            <p>每台押金5万（五台以上）</p>
                            <p>加盟三年以上</p>
                            <p>押金逐年返还</p>
                            <p>合同到期后返还所有押金</p>
                            <p>返还每台机器利润的15%-20%（月结）</p>
                            <p>提供所有服务</p>
                        </div>
                        <div class="supply_list">
                            <nav>代理商</nav>
                            <p>每台榨汁机售价5万</p>
                            <p>选择代理区域</p>
                            <p>收缴每台机器利润的15%-20%</p>
                            <p>提供所有服务</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="item">
                <nav class="nav">
                    <p>先进的榨汁技术</p>
                    <span>Business processes and services</span>
                </nav>
                <div class="item_flex content">
                    <div class="img">
                        <img :src="item_img.img2" alt="#">
                    </div>
                    <div class="info">
                        <div class="infos">整机自主研发，创新性采用 机械手压力感应系统，产品技术行业领先。 先进的榨取方式，杜绝农药残留等安全隐患，最大程度的保存的橙子的果肉，以及高的出汁率。让果汁拥有无与伦比的口感</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <nav class="nav">
                    <p>免费服务</p>
                    <span>Business processes and services</span>
                </nav>

                <div class="item_flex content">
                    <div class="info">
                        <p> <i class="icon-0334"></i>商城平台：扩大销售渠道，提供更多的用户流量</p>
                        <p> <i class="icon-0334"></i>后台系统：实时统计分析销售数据，提供第一手市场情报反馈</p>
                        <p> <i class="icon-0334"></i>手操系统：远程调控机器，让您在家完成机器操作</p>
                        <p> <i class="icon-0334"></i>免费培训：针对渠道、代理商、集成商的产品、开发、使用培训</p>
                        <p> <i class="icon-0334"></i>供应链支持：精选来自各地橙子原产地直供。365天为您保障新鲜稳定货源供应，让您更加便捷。</p>
                        <p> <i class="icon-0334"></i>统一运营：对所有加盟商进行免费拿线上线下运行，提高用户数量。</p>
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
                    img1: require('../../assets/img/hezuo.png'),
                    img2: require('../../assets/img/web_11.jpg'),
                    img3: require('../../assets/img/web_15.jpg'),
                    img4: require('../../assets/img/web_item_07.jpg'),
                }
            }
        }
    }
</script>

<style scoped>
    .supple_list >p:nth-of-type(2n){
        color: #ff7500;
    }
    .supply{
        display: flex;
        color: #333333;
        justify-content: space-around;
    }
    .supply_list:nth-of-type(1){
        background: #ffe5df;
    }
    .supple_list:nth-of-type(1) nav{
        background: #ffc391;
    }
    .supply_list{
        font-size: 24px;
        height: 487px;
        width: 592px;
    }
    .supply_list nav{
       height: 80px;
        font-size: 28px;
        line-height: 80px;
    }
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
        line-height: 36px;
    }
    .info i{
        display: inline-block;
        padding-right: 15px;
        color: #ff7500;
    }
    .infos{
        height: 100%;
        display: flex;
        align-items: center;
        text-indent: 2em;
        line-height: 40px;
    }


</style>
