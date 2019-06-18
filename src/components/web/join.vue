<template>
    <div class="web_join">
        <div id="banner">
            <img :src="msg.banner" alt="">
        </div>
        <div id="contents">
            <div class="content">
                <nav class="nav">
                    <p>战略目标</p>
                    <span>Strategic goals</span>
                </nav>
                <div class="content_item item">
                    <div>
                        <img :src="msg.item.img1" alt="#">
                    </div>
                    <div>
                        <img :src="msg.item.img2" alt="#">
                    </div>
                    <div>
                        <img :src="msg.item.img3" alt="#">
                    </div>
                    <div>
                        <img :src="msg.item.img4" alt="#">
                    </div>
                </div>

            </div>
            <div class="content">
                <nav class="nav">
                    <p>发展规划</p>
                    <span>The development plan</span>
                </nav>
                <div class="content_item plan">
                    <div>
                        <nav>销售额突破2.2亿</nav>
                        <div class="plan_info">
                            <p>2019年销售目标：400万</p>
                            <p>2020年销售目标：600万</p>
                            <p>2021-2023年销售目标：1200万</p>
                        </div>
                    </div>
                    <div>
                        <nav>加盟商超过500家</nav>
                        <div class="plan_info">
                            <p>加盟方式采取购买和租赁相结合，降低使用门槛，帮助加盟商实现盈利。</p>
                            <p>总部供应机器、原材料及耗材，提供数据管理系统，后期收取年服务费</p>
                        </div>
                    </div>
                    <div>
                        <nav>产品销售覆盖5个省</nav>
                        <div class="plan_info">
                            <p>2019-2020年，打入并占领南京市场，形成口碑；</p>
                            <p>2021-2023年，逐步向其他一二线城市渗透。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <nav class="nav">
                    <p>市场拓展计</p>
                    <span>Market expansion plan</span>
                </nav>
                <div class="content_item market">
                    <div class="market_left">
                        <div>
                            <p class="p_active">校园市场</p>
                        </div>
                        <div>
                            <p>企业市场</p>
                        </div>
                        <div>
                            <p>CBD市场</p>
                        </div>
                        <div>
                            <p>政府市场</p>
                        </div>
                    </div>
                    <div class="market_right">
                        <div>
                            <div class="market_list"><p>利用自有社会资源，以南京理工大学、南京大学等大学校园为第一批10台 “阿橙果啦”自助果粒橙机投放点，初步试水，观察市场反应。</p></div>
                            <div class="market_list"><p>与大型集团寻求合作，在其员工食堂及其他休闲区投放机器，后期可开发 集团员工卡直接在“阿橙果啦”机器上刷卡使用功能</p></div>
                            <div class="market_list"><p>人流量大、用户消费能力强、消费需求高的商业CBD市场，入驻成本较高， 作为后续开拓市场来计划</p></div>
                            <div class="market_list"><p>政府市场的合作要求相对严格，计划利用管委会支持资源，从园 区逐步向政府部门深入，探索合作可能，如参与赞助政府会议等</p></div>
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

                    item: {
                        img1: require('../../assets/img/join_item_03.jpg'),
                        img2: require('../../assets/img/join_item_06.jpg'),
                        img3: require('../../assets/img/join_item_12.jpg'),
                        img4: require('../../assets/img/join_item_10.jpg'),
                    },
                    data:{
                        name:{},
                        date:{},
                        daaress:{}
                    }
                }
            }
        },
        mounted(){
            var aItem=document.querySelectorAll('.market_left>div'),
             aP=document.querySelectorAll('.market_left p'),
            oBox=document.querySelector('.market_right>div');

            var oLast=aP[0];

            for(var i=0;i<aItem.length;i++){
                aItem[i].index=i;
                aItem[i].onclick=function () {
                    oLast.classList.remove('p_active');
                    oBox.style.top=-715*this.index+'px';
                    aP[this.index].classList.add('p_active');
                    oLast=aP[this.index];
                }
            }
        }
    }
</script>

<style scoped>
    .market_right{
        height: 715px;
        width: 682px;
        margin-left: 5px;
        position: relative;
        overflow: hidden;
    }
    .market_right>div{
        width: 682px;
        position: absolute;
        top: 0;
        transition: top 0.6s ease-out;
    }
    .market_list{
        height: 715px;
        width: 682px;
        text-indent: 2em;
        display: flex;
        align-items: center;
        color: #fff;
    }
    .market_list p{
        font-size: 24px;
        padding:  0 90px;
        line-height: 50px;
    }
    .market_list:hover{
    }
    .market_list:nth-of-type(1){
        background: url('../../assets/img/market1_1.png');
        background-size: cover;
    }
    .market_list:nth-of-type(2){
        color: #000;
        background: url('../../assets/img/market2_1.png');
        background-size: cover;
    }
    .market_list:nth-of-type(3){
        background: url('../../assets/img/market3_1.png');
        background-size: cover;
    }
    .market_list:nth-of-type(4){
        color: #000;
        background: url('../../assets/img/market4_1.png');
        background-size: cover;
    }
    .market{
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
    }
    .market_left>div{
        width: 100%;
        height: 175px;
        margin-bottom:5px ;
        position: relative;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }
    .market_left p{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 175px;
        text-align: center;
        background: rgba(0,0,0,0.6);
    }
    .market_left .p_active{
        background: none;
    }
    .market_left{
        display: flex;
        justify-content: space-between;
        width: 517px;
        flex-wrap: wrap;
    }
    .market_left>div:nth-of-type(1){
        background-size: cover;
        background: url("../../assets/img/market1.png") no-repeat;
    }
    .market_left>div:nth-of-type(2){
        background: url("../../assets/img/market2.png") no-repeat ;
        background-size: cover;
    }
    .market_left>div:nth-of-type(3){
        background-size: cover;
        background: url("../../assets/img/market3.png") no-repeat ;
        background-size: cover;
    }
    .market_left>div:nth-of-type(4){
        background: url("../../assets/img/market4.png") no-repeat ;
        background-size: cover;
    }
    .market_list{}
    .plan_info p{
        line-height: 48px;
        letter-spacing: 2px;
        z-index: 10;
        position: relative;
        text-align: left;
        font-size: 24px;
    }
    .plan nav{
        padding-top: 30px;
        font-size: 24px;
        text-align: center;
        color: #ff7500;
    }
    .plan_info{
        position: relative;
        margin-top: 60px;
        z-index: 10;
        background: #ffd7b6;
        padding: 50px;
    }
    .plan_info:after{
        position: absolute;
        width: 0;
        height: 0;
        display: block;
        content: '';
        border-width: 100px;
        border-style: solid;
        border-color: transparent transparent #ffd7b6 transparent;
        left: 50%;
        margin-left: -100px;
        top: -130px;
        z-index: 0;
    }

    .item{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 20px;
    }
    .item>div{
        overflow: hidden;
    }
    .item img{
        width: 590px ;
        height: 534px;
        margin-top: 20px;
        transform: scale(1);
        transition: 0.6s;
    }
    .item img:hover{
        transform: scale(1.2);
    }

    #banner img {
        width: 100%;
        margin-top: -25px;
    }

    #contents {
        width: 1200px;
        margin: 0 auto;
    }

    .nav {
        margin-top: 55px;
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

</style>
