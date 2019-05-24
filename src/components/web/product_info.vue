<template>
    <div class="product_info">
      <!--  <div class="banner"><img :src="msg.banner" alt=""></div>-->
        <nav class="nav">
            <p>阿橙果啦 果汁机器人</p>
            <span>Our products</span>
        </nav>
        <div class="content">
             <div class="img"><img :src="msg.product" alt=""></div>

            <div class="info">
                <div class="item">
                    <nav class="name"><span>产品参数</span> <p></p></nav>
                    <div class="info_ul">
                        <ul>
                            <li><span>型号</span>  <b>XBZ-JU-OA</b></li>
                            <li><span>规格尺寸</span>  <b>1.5m*1.0m*2.1m</b></li>
                            <li><span>控制面板</span>  <b>前方液晶荧幕</b></li>
                            <li><span>自动落杯</span>  <b>有</b></li>
                            <li><span>储存量</span>  <b>80个（满载）</b></li>
                            <li><span>供水方式</span>  <b>自带饮水桶18升</b></li>
                        </ul>
                        <ul>
                            <li><span>操作方式</span> <b>触控型</b></li>
                            <li><span>防触电</span> <b>1级</b></li>
                            <li><span>原料储存</span> <b>水果160个</b></li>
                            <li><span>防护等级</span> <b>IP50</b></li>
                            <li><span>制冷温度</span> <b>2-8摄氏度</b></li>
                            <li><span>自动灌装</span> <b>有</b></li>
                        </ul>
                    </div>
                </div>
                <div class="item active">
                    <nav class="name"><span>核心优势</span> <p></p></nav>
                    <div class="info_content">
                        <p>机械手压力感应技术，果皮果肉分离，杜绝农药残留</p>
                        <p>钝刀柔性萃取方式，保留果粒果肉果纤维，锁住VC</p>
                        <p>臭氧+紫外线24h消毒，保证无菌</p>
                        <p> 自动清洗系统，2分钟清洗一次，确保卫生</p>
                        <p>占地仅1.2m²，应用场景丰富</p>
                    </div>
                </div>

                <div class="item active">
                    <nav class="name"><span>产品明细</span> <p></p></nav>
                    <div class="info_content">
                        <p>机械手压力感应技术，果皮果肉分离，杜绝农药残留</p>
                        <p>钝刀柔性萃取方式，保留果粒果肉果纤维，锁住VC</p>
                        <p>臭氧+紫外线24h消毒，保证无菌</p>
                        <p> 自动清洗系统，2分钟清洗一次，确保卫生</p>
                        <p>占地仅1.2m²，应用场景丰富</p>
                    </div>
                </div>

            </div>

        </div>
        <div class="banner"><img :src="msg.img" alt=""></div>

    </div>
</template>

<script>
    export default {
        name: "product_info",
        data(){
            return {
                msg:{
                    product:require('../../assets/img/index_banner_05.jpg'),
                    img:require('../../assets/img/product_info_04.jpg')
                }
            }
        },
        mounted() {
            var aBox=document.querySelectorAll('.name'),parent=document.querySelectorAll('.item');

            var last=parent[0];
            for(var i=0;i<aBox.length;i++){
                aBox[i].index=i;
                aBox[i].onclick=function () {
                    last.classList.add('active');
                    parent[this.index].classList.remove('active');

                    last=parent[this.index];
                }
            }
        }
    }
</script>

<style scoped>
    .info_content{
        line-height: 36px;
        padding: 12px 0;
    }
    .banner img{
        width: 1200px;
    }.banner{
        text-align: center;
         }
    .active{
        height: 41px;
        overflow: hidden;

    }
    .info_ul{
        display: flex;
        justify-content: space-around;
    }
    .info_ul ul{
        width: 50%;
    }
    .info_ul li{
        line-height: 36px;
    }
    .info_ul span{
        width: 20%;
        display: inline-block;
    }
    .active  .name p:after{

        transform: rotate(90deg);
        top:0px
    }
    .name{
        display: flex;
        justify-content: space-around;
        text-align: left;
        border-bottom: 1px solid #c5c5c5;
        border-top: 1px solid #c5c5c5;
        align-content: center;
        height: 40px;
        cursor: pointer;
    }
    .item:nth-of-type(1) .name{
        border-top: none;
    }
    .item:nth-last-of-type(1) .name{
        border-bottom: none;
    }
    .name span{
        flex-grow: 3;
        font-size: 22px;
    }
    .name p{
        top: 20px;
        width: 20px;
        position: relative;
    }
    .name p:after{
        width: 100%;
        border-top: 2px solid #666;
        display: block;
        content: '';
        position: absolute;
        top: 0px;
    }
    .name p:before{
        width: 100%;
        border-top: 2px solid #666;
        display: block;
        content: '';
        margin-bottom: 10px;
    }
    .content{
        display: flex;
        justify-content: space-around;
        width: 1200px;
        margin: 30px auto;
        color: #666666;
    }
    .img img{
        width: 301px;
        height: 407px;
    }
    .img{
        flex-grow: 2;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
    .info{
        width: 700px;
    }
    .nav{
        text-align: center;
        position: relative;
    }
    .nav p {
        font-size: 24px;
        padding: 0 200px 22px 200px;
        width: 280px;
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
</style>
