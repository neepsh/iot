<template>
    <div class="mall">
        <div class="banner"><img :src="banner" alt=""></div>
        <div class="nav">
            <p>在线商城</p>
            <span>online shopping mall</span>
        </div>
        <div class="img"><img :src="img" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "mall",
        data(){
            return {
                banner:require('../../assets/img/mall_banner.jpg'),
                img:require('../../assets/img/sc.png'),
            }
        }
    }
</script>

<style scoped>

    .banner img{
        width: 100%;
    }
    .img{
        text-align: center;
    }
    .img img{
        width: 1200px;
    }

    .nav{
        margin: 30px 0;
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
