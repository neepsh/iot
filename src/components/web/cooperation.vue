<template>
    <div class="web_cooperation">
        <div id="banner">
            <img :src="data.banner" alt="">
        </div>
        <div id="content">
            <nav class="nav">
                <p>商务合作</p>
                <span>Business cooperation</span>
            </nav>
            <div class="item">
                <div class="item_img">
                    <img :src="data.item_img1" alt="">
                </div>
            </div>
            <div class="item">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperation",
        data(){
            return {
                data:{
                    banner:require('../../assets/img/hezuo_banner_02.jpg'),
                    item_img1:require('../../assets/img/web_07.jpg'),
                }
            }
        }
    }
</script>

<style scoped>


    #banner img{
        width: 100%;
    }

    #content{
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


</style>
