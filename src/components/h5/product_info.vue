<template>
    <div class="product_info">

        <div class="banner">
            <img :src="msg.banner" alt="">
        </div>
        <div class="content">
            <div class="name">阿橙果啦·果汁机器人</div>
            <div class="item">
                <nav class="nav">产品参数</nav>
                <div class="info">
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
            <div class="item">
                <nav class="nav">核心优势 </nav>
                <div class="list">
                    <p>机械手压力感应技术，果皮果肉分离，杜绝农药残留</p>
                    <p>钝刀柔性萃取方式，保留果粒果肉果纤维，锁住VC</p>
                    <p>臭氧+紫外线24h消毒，保证无菌</p>
                    <p> 自动清洗系统，2分钟清洗一次，确保卫生</p>
                    <p>占地仅1.2m²，应用场景丰富</p>
                </div>
            </div>
            <div class="item">
                <nav class="nav">产品明细  </nav>
                <div class="list">
                    <p>机械手压力感应技术，果皮果肉分离，杜绝农药残留</p>
                    <p>钝刀柔性萃取方式，保留果粒果肉果纤维，锁住VC</p>
                    <p>臭氧+紫外线24h消毒，保证无菌</p>
                    <p> 自动清洗系统，2分钟清洗一次，确保卫生</p>
                    <p>占地仅1.2m²，应用场景丰富</p>
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
                    banner:require('../../assets/img/product_info_02.png'),
                    img:require('../../assets/img/product_info_04.jpg'),
                }
            }
        },
        mounted() {
            var path = this.$router.history.current.path;
            if (path.indexOf('table') > 0 || path.indexOf('condition') > 0 || path.indexOf('position') > 0) {
                this.$parent.data.table_h5=true;
            }else {
                this.$parent.data.table_h5=false;
            }
        }
    }
</script>

<style scoped>
    .banner img{
        width: 100%;
    }
    .content{
        padding: 0.3rem;
        color: #666666;
        background: #fff;
    }
    .name{
        font-size: 0.28rem;
        padding-bottom: 0.28rem;
        color: #333333;
    }
    .item{
        padding: 22px 0;
        border-top: 1px solid #999999;
    }
    .nav{
        font-size: 0.26rem;
        padding-bottom: 0.2rem;
    }
    .info{
        display: flex;
        justify-content: center;
        font-size: 0.24rem;
    }
    .info ul{
        width: 50%;
    }
    .info span{
        width: 35%;
        display: inline-block;
    }
    .info ul:nth-of-type(2){
        margin-left: 0.1rem;
    }
    .info li{
        line-height: 0.5rem;
    }
    .list{
        font-size: 0.24rem;
    }
    .list p{
        line-height: 0.5rem;
    }
</style>
