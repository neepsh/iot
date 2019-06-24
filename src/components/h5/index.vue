<template>
    <div class="h5_index">
        <!-- <header id="header">
           <div class="header_logo"></div>
           <div class="header_menu"><i class="icon-0210"></i></div>
           <div class="header_list">
             <ul class="nav_list">
               <li><router-link to="index">首页</router-link></li>
               <li><router-link to="index">产品介绍</router-link></li>
               <li><router-link to="server">服务支持</router-link></li>
               <li><router-link to="cooperation">商务合作</router-link></li>
               <li><router-link to="mall">在线商城</router-link></li>
               <li class="nav_item">
                   <nav>
                     <router-link to="about">关于我们</router-link>
                     <i class="icon-0252"></i>
                   </nav>
                   <ul class="item_ul">
                     <li><router-link to="index">产品介绍</router-link></li>
                     <li><router-link to="odds">公司优势</router-link></li>
                     <li><router-link to="join">会员加盟</router-link></li>
                     <li><router-link to="join">发展规划</router-link></li>
                   </ul>
               </li>
               <li><router-link to="contact">联系我们</router-link></li>
             </ul>
           </div>
         </header>-->

        <div id="banner">
            <div class="banner">
                <img :src="img.banner" alt="banner">
            </div>
        </div>

        <div id="item">
            <div class="item">
                <nav>阿橙果啦</nav>

                <p>一个分工明确，直达全国的商业模式</p>
                <img :src="img.item_banner" alt="#">
            </div>
            <div class="item">
                <img :src="img.culture" alt="culture">
            </div>
        </div>

        <div id="product">
            <div class="product_nav">阿橙果啦</div>
            <div class="product">
                <div>
                    <router-link to="info">
                        <div class="product_name">阿橙果啦 &nbsp 果汁机器人</div>
                        <div class="product_info"> 果汁机器人·维空间·果汁机器 人占地仅1.2平米......</div>
                        <div class="product_btn">点击详情</div>
                    </router-link>

                </div>
                <div class="product_img">
                    <img :src="product.product1" alt="xbz">
                </div>
            </div>
            <div class="product">
                <div>
                    <div class="product_name">阿橙果啦 &nbsp 无人空间</div>
                    <div class="product_info"> 果汁机器人·维空间·果汁机器 人占地仅1.2平米......</div>
                    <div class="product_btn">点击详情</div>
                </div>
                <div class="product_img">
                    <img style="width:3.25rem" :src="product.product2" alt="xbz">
                </div>
            </div>
            <div class="product_more">
                <button>查看更多</button>
            </div>
        </div>

        <div id="active">
            <div class="product_nav">活动展示</div>

            <div class="active">
                <div class="active_img"><img :src="active.img1" alt="#"></div>
                <div>
                    <div class="active_name">活动名称</div>
                    <div class="active_info">orem IpsumLorem Ipsumorem Ips umLorem Ipsum...</div>
                </div>
            </div>
            <div class="active">
                <div class="active_img"><img :src="active.img2" alt="#"></div>
                <div>
                    <div class="active_name">活动名称</div>
                    <div class="active_info">orem IpsumLorem Ipsumorem Ips umLorem Ipsum...</div>
                </div>
            </div>
            <div class="active">
                <div class="active_img"><img :src="active.img3" alt="#"></div>
                <div>
                    <div class="active_name">活动名称</div>
                    <div class="active_info">orem IpsumLorem Ipsumorem Ips umLorem Ipsum...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {
                img: {
                    banner: require('../../assets/img/banner_h5.png'),
                    banner1: require('../../assets/img/index_banner.jpg'),
                    banner2: require('../../assets/img/index_banner1.jpg'),
                    banner3: require('../../assets/img/index_banner2.jpg'),
                    item_banner: require('../../assets/img/item.png'),
                    culture: require('../../assets/img/culture.png')
                },
                product: {
                    product1: require('../../assets/img/product1.png'),
                    product2: require('../../assets/img/product2.png')
                },
                active: {
                    img1: require('../../assets/img/active_03.png'),
                    img2: require('../../assets/img/active_06.jpg'),
                    img3: require('../../assets/img/active_09.jpg'),
                }
            }
        },
        mounted() {
            var path = this.$router.history.current.path;
            if (path.indexOf('table') > 0 || path.indexOf('condition') > 0 || path.indexOf('position') > 0) {
                this.$parent.data.table_h5 = true;
            } else {
                this.$parent.data.table_h5 = false;
            }
        }
    }
</script>

<style scoped>
    /* @import url('../../assets/css/icom.css');

     body{
       background: #efefef;
     }
     .header_logo{
       height: 0.56rem;
       width: 1.9rem;
       background: url('../../assets/img/new_logo.png') no-repeat;
       background-size: 100%;
       margin-left:0.3rem; ;
     }
     #header{
       height: 1.04rem;
       background: #000;
       display: flex;
       justify-content: space-between;
       align-items: center;
       position: fixed;
       width: 100%;
       top: 0;
       left: 0;
       z-index: 10000;
     }
     .header_menu{
       font-size: 0.44rem;
       color: #fff;
       text-align: right;
       padding-right: 0.44rem;
       flex-grow: 3;
     }
     #header .nav_item{
       border: none;
       padding: 0;
     }
     .nav_item nav{
       padding: 0 0.4rem;
       line-height: 0.8rem;
       border-bottom: 1px solid;
       display: flex;
       justify-content: space-around;
       text-align: left;
       align-content: center;
     }
     .nav_item nav a{
       text-align: left;
       flex-grow: 3;
     }
     .nav_item i{
       line-height: 0.8rem;
       transition: 0.2s;
       transition: 0.2s;
       font-size: 0.3rem;

       text-align: right;
     }
     .nav_list .nav_item li{
       padding-left: 0.6rem;
     }
     .nav_item ul{
       height: 0;
       transition: 0.2s;
       overflow: hidden;
     }
     .nav_list{
       position: fixed;
       top: 1.04rem;
       right: -60%;
       width: 60%;
       height: 100%;
       background: #000;
       color: #fff;
       font-size: 0.4rem;
       transition: 0.6s;
     }
     .nav_list li{
       padding: 0 0.4rem;
       line-height: 0.8rem;
       border-bottom: 1px solid;
     }*/

    /* banner */
    .banner img {
        width: 100%;
    }

    #banner {
        padding-bottom: 0.28rem;
        background: #efefef;
    }

    /*  item */

    .item {
        padding: 0 0.3rem;
        background: #fff;
        text-align: center;
        margin-bottom: 0.3rem;
    }

    .item nav {
        display: inline-block;
        padding: 0 0.41rem 0.15rem 0.41rem;
        width: 1.28rem;
        font-size: 0.32rem;
        border-bottom: 0.02rem solid #8da3ae;
        position: relative;
    }

    .item nav:after {
        content: "";
        display: block;
        position: absolute;
        bottom: -0.02rem;
        width: 1.28rem;
        height: 0.04rem;
        background: #ff7500;
        left: 0.41rem;
        z-index: 1;
    }

    .item img {
        width: 100%;
    }

    .item p {
        font-size: 0.28rem;
        padding: 0.1rem 0 0.22rem 0;
    }

    /* product */

    #product {
        padding: 0.3rem;
        background: #fff;
        font-size: 0.24rem;
        margin-top: 0.3rem;
    }

    .product_nav {
        border-left: 0.04rem solid #ff7500;
        padding-left: 0.25rem;
        font-size: 0.3rem;
    }

    .product {
        display: flex;
        justify-content: space-around;
        padding: 0.2rem;
        border-radius: 0.09rem;
        background: #feefda;
        margin-top: 0.3rem;
        box-shadow: 1px 2px 10px 0px rgba(6, 0, 1, 0.3);
    }

    .product_img {
        flex-grow: 2;
    }

    .product_name {
        font-size: 0.36rem;
        color: #ff7500;
        padding-top: 0.14rem;
    }

    .product_img img {
        width: 1.8rem
    }

    .product > div:nth-of-type(1) {
        width: 3.6rem;
    }

    .product_img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product_info {
        padding-top: 0.4rem;
    }

    .product_btn {
        width: 1.8rem;
        font-size: 0.3rem;
        background: #ff7500;
        color: #fff;
        line-height: 0.48rem;
        border-radius: 0.24rem;
        text-align: center;
        margin-top: 0.45rem;
    }

    .product_more {
        padding-top: 30px;
        text-align: center;
        font-size: 0.3rem;
    }

    .product_more button {
        width: 1.8rem;
        height: 0.48rem;
        background: #ff7500;
        border-radius: 0.24rem;
        color: #fff;
        padding: 0;
        margin: 0;
        border: none;
    }

    /*  active  */

    #active {
        margin-top: 0.3rem;
        padding: 0.3rem;
        background: #fff;;
    }

    .active {
        display: flex;
        justify-content: space-around;
        margin-top: 0.3rem;
        font-size: 0.24rem;
    }

    .active_img img {
        width: 2.78rem;
    }

    .active > div:nth-of-type(2) {
        flex-grow: 3;
        padding-left: 0.3rem;
    }

    .active_name {
        padding-top: 0.2rem;
        font-size: 0.3rem;
    }

    .active_info {
        padding-top: 0.16rem;
    }


</style>
