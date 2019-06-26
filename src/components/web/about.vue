<template>
    <div class="web_about">
        <div id="banner">
            <img :src="banner" alt="">
        </div>
        <div id="contents">

                <nav class="nav">
                    <p>公司简介</p>
                    <span>Company profile</span>
                </nav>
                <div class="content">
                    <div class="img">
                        <img :src="img.company" alt="company">
                    </div>
                    <div class="company_info">
                        <p>  南京鑫倍泽物联科技有限公司总部位于紫金山脉之南麒麟科技创新园华清园。自成立后，
                            一直以南理工为科研后盾，与该校的机器人研究所、自动化学院等有长期合作关系。目前已推
                            出新零售模式下的果汁机器人+网红产品无人化购物场景，新产品落地正处于大力推广阶段。
                            新配套-“拿了就走”、“关门结算”的自助贩售机（人脸识别技术、重力感应、红外扫码、
                            后台数据采集、分析、结算）快速落地是我们团队经验整合所得，打造具有现代感的无人值守
                            购物体验店。体现出鑫倍泽具有自动化核心技术与多层经验，最终实现新零售“无人果吧”,
                            实现资源共享。·维空间·隶属于南京鑫倍泽物联科技有限公司。</p>
                    </div>
                </div>
                <div class="content">

                    <div class="item">
                        <router-link to="odds">
                            <img :src="img.img2" alt="">
                            <p>公司优势</p>
                        </router-link>

                    </div>
                    <div class="item">
                        <router-link to="join">
                            <img :src="img.img3" alt="">
                            <p>我们的目标</p>
                        </router-link>

                    </div>
                    <div class="item" >
                        <router-link to="join">
                            <img :src="img.img4" alt="">
                            <p>活动 · 案例</p>
                        </router-link>

                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return{
                banner:require('../../assets/img/company_banner_02.jpg'),
                img:{
                    company:require('../../assets/img/banner_about.png'),
                    img1: require('../../assets/img/company_10.jpg'),
                    img2: require('../../assets/img/company_07.png'),
                    img3: require('../../assets/img/company_18.png'),
                    img4: require('../../assets/img/company_15.png'),
                }
            }
        }
    }
</script>

<style scoped>
    .img,.item{
        overflow: hidden;
    }
    #contents img:hover{
        transform: scale(1.2);
    }
    #contents img{
        transition: 0.6s;
        transform: scale(1);
    }
    #banner img{
        width: 100%;
    }
    #contents{
        width: 1200px;
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
    .content{
        margin: 30px 0;
        display: flex;
        justify-content: space-around;
    }
    .img img{
        width: 448px;
        height: 376px;
    }
    .company_info{
        margin-left: 30px;
    }
    .company_info p{
        text-indent: 2em;
        font-size: 16px;
        line-height: 48px;
        color: #656565;
    }
    .item{
        width: 287px;
        box-shadow: 0 0 10px #d3d3d3;
        display: flex;
       flex-direction: column;
    }
    .item img{
        width: 100%;
    }
    .item p{
        width: 100%;
        background:#404040;
        color: #fff;
        line-height: 54px;
        text-align: center;
        position: relative;
        z-index: 10;
        top: -5px;
    }
    .company_info p{
        width: 702px;
    }

</style>
