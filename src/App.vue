<template>
    <div id="app">
        <header v-if="data.web_type=='h5'" id="header">
            <div class="header_logo"></div>
            <div class="header_menu"><i class="icon-0210"></i></div>
            <div class="header_list">
                <ul class="nav_list">
                    <li>
                        <router-link to="index">首页</router-link>
                    </li>
                    <li>
                        <router-link to="index">产品介绍</router-link>
                    </li>
                    <li>
                        <router-link to="server">服务支持</router-link>
                    </li>
                    <li>
                        <router-link to="cooperation">商务合作</router-link>
                    </li>
                    <li>
                        <router-link to="mall">在线商城</router-link>
                    </li>
                    <li class="nav_item">
                        <nav>
                            <router-link to="about">关于我们</router-link>
                            <i class="icon-0252"></i>
                        </nav>
                        <ul class="item_ul">
                            <li>
                                <router-link to="index">产品介绍</router-link>
                            </li>
                            <li>
                                <router-link to="odds">公司优势</router-link>
                            </li>
                            <li>
                                <router-link to="join">会员加盟</router-link>
                            </li>
                            <li>
                                <router-link to="join">发展规划</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="contact">联系我们</router-link>
                    </li>
                </ul>
            </div>
        </header>
        <header v-if="data.web_type=='web'" id="header">
            <div class="header">
                <div class="logo">
                    <img :src="data.logo" alt="logo">
                </div>
                <div class="nav">
                    <ul class="nav_list">
                        <li> <router-link to="index">首页</router-link></li>
                        <li> <router-link to="product">产品</router-link></li>
                        <li> <router-link to="server">服务支持</router-link></li>
                        <li> <router-link to="cooperation">商务合作</router-link></li>
                        <li> <router-link to="mall">在线商城</router-link></li>

                        <li class="nav_item">
                            <nav><router-link to="about"><span>关于我们</span> <i class="icon-0252"></i></router-link></nav>
                            <ul class="menu6">
                                <li>
                                    <router-link to="index">产品介绍</router-link>
                                </li>
                                <li>
                                    <router-link to="odds">公司优势</router-link>
                                </li>
                                <li>
                                    <router-link to="join">会员加盟</router-link>
                                </li>
                                <li>
                                    <router-link to="join">发展规划</router-link>
                                </li>
                            </ul>
                        </li>
                        <li><router-link to="contact">联系我们</router-link> </li>
                    </ul>
                </div>
            </div>
        </header>

        <div id="content">
            <router-view/>
        </div>

        <footer v-if="data.web_type=='h5'" id="footer">

            <div class="footer">
                <div class="footer_top">
                    <div>关于我们</div>
                    <div>产品下载</div>
                    <div>技术支持</div>
                    <div>商务合作</div>
                    <div>加入我们</div>
                </div>
                <div>
                    <p>联系电话：025-56566</p>
                    <p>商务合作：025-56566</p>
                </div>
            </div>
        </footer>
        <footer v-if="data.web_type=='web'" id="footer">
            <div class="footer">
                <div class="footer_top">
                    <div>网站首页</div>
                    <div>产品介绍</div>
                    <div>服务支持</div>
                    <div>商务合作</div>
                    <div>在线商城</div>
                    <div>品牌故事</div>
                    <div>加入我们</div>
                    <div>联系我们</div>
                </div>
                <div class="footers">
                    <div class="footer_item">
                        <nav>关于我们</nav>
                        <div>公司介绍</div>
                        <div>企业文化</div>
                        <div>我们的团队</div>
                        <div>公司地址</div>
                    </div>
                    <div class="footer_item">
                        <nav>在线商城</nav>
                        <div>免零钱交易</div>
                        <div>快速注册</div>
                        <div>消费查询</div>
                        <div>不定期优惠</div>
                    </div>
                    <div class="footer_item">
                        <nav>品牌故事</nav>
                        <div>公司新闻</div>
                    </div>
                    <div class="footer_item">
                        <nav>联系我们</nav>
                        <div>地址：南京市江宁区麒麟街道华清园5栋308室</div>
                        <div>电话：88888888</div>
                        <div>网址：www.njxbz.com</div>
                    </div>
                </div>
            </div>
            <div class="footer_wz">
                © Copyright © 2018 - 2020 luidea.com All rights reserved. 备案编号：苏ICP备18032956号
            </div>

        </footer>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                data: {
                    logo: require('./assets/img/logo.png'),
                    web_type: "h5"
                }
            }
        },
        methods: {
            isphone() {
                var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
                var ua = navigator.userAgent;
                var res = mobileArry.filter(function (arr) {
                    return ua.indexOf(arr) > 0;
                });
                /*return res.length > 0;*/
                if (res.length > 0) {

                    if (this.$router.history.current.path.indexOf('phone') == -1) {
                        this.$router.push({path: '/h5/index'});
                        this.data.web_type = "h5"
                    }

                } else {
                    if (this.$router.history.current.path.indexOf('web') == -1) {
                        this.$router.push({path: '/web/index'});
                        this.data.web_type = "web"
                    }

                }
            },
            set_size() {
                var oW = document.documentElement.clientWidth / 7.5;

                document.querySelector('html').style.fontSize = oW + 'px';
            }
        },
        mounted() {
            this.isphone();
            this.set_size();


            var oMenu = document.querySelector('.header_menu'),
                oList = document.querySelector('.nav_list'),
                oIcon = document.querySelector('.icon-0252'),
                oUl = document.querySelector('.item_ul');

            var nav_status = false, ul_status = false, status = true;

            oMenu.onclick = function () {

                if (nav_status) {
                    oList.style.right = '-60%';
                    nav_status = false
                } else {
                    oList.style.right = 0;
                    nav_status = true
                }
            };

            oIcon.addEventListener('click', function (e) {
                status = false;
                if (ul_status) {
                    oUl.style.height = "0";
                    ul_status = false;
                    this.style.transform = "rotate(0deg)";
                } else {
                    ul_status = true;

                    this.style.transform = "rotate(90deg)";
                    oUl.style.height = "3.27rem";
                }
            }, false);

            oList.onclick = function () {
                if (status) {
                    oList.style.right = '-60%';
                    nav_status = false
                }
                status = true;
            };
        }
    }
</script>

<style>
    @import url('assets/css/reset.css');
    @import url('assets/css/icom.css');

    @media screen  and (max-width: 1170px) {

        #app{
            background: #efefef;
        }
        /* h5 header*/
        .header_logo {
            height: 0.56rem;
            width: 1.9rem;
            background: url('assets/img/new_logo.png') no-repeat;
            background-size: 100%;
            margin-left: 0.3rem;;
        }

        #header {
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

        .header_menu {
            font-size: 0.44rem;
            color: #fff;
            text-align: right;
            padding-right: 0.44rem;
            flex-grow: 3;
        }

        #header .nav_item {
            border: none;
            padding: 0;
        }

        .nav_item nav {
            padding: 0 0.4rem;
            line-height: 0.8rem;
            border-bottom: 1px solid;
            display: flex;
            justify-content: space-around;
            text-align: left;
            align-content: center;
        }

        .nav_item nav a {
            text-align: left;
            flex-grow: 3;
        }

        .nav_item i {
            line-height: 0.8rem;
            transition: 0.2s;
            font-size: 0.3rem;

            text-align: right;
        }

        .nav_list .nav_item li {
            padding-left: 0.6rem;
        }

        .nav_item ul {
            height: 0;
            transition: 0.2s;
            overflow: hidden;
        }

        .nav_list a {
            display: inline-block;
            height: 100%;
            width: 100%;
            color: #ffffff;
        }

        .nav_list {
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

        .nav_list li {
            padding: 0 0.4rem;
            line-height: 0.8rem;
            border-bottom: 1px solid;
        }

        /*  h5 content*/
        #content {
            margin-top: 1.0rem;
        }


        /*h5 footer*/
        .footer_top {
            display: flex;
            justify-content: space-around;
            font-size: 14px;
            color: #fff;
        }

        .footer {
            background: #737f95;
            padding: 1vh;
            font-size: 0.28rem;
            text-align: center;
            line-height: 36px;
            color: #fff;
        }
    }

    @media screen  and ( min-width: 1170px) {

        .nav_item:hover .menu6 li:first-of-type {
            animation: menu6 0.3s ease-in-out forwards;
            animation-delay: 0.2s;
        }
        .nav_item:hover .menu6 li:nth-of-type(2) {
            animation: menu6 0.3s ease-in-out forwards;
            animation-delay: 0.4s;
        }
        .nav_item:hover .menu6 li:nth-of-type(3) {
            animation: menu6 0.3s ease-in-out forwards;
            animation-delay: 0.6s;
        }
        .nav_item:hover .menu6 li:last-of-type {
            animation: menu6 0.3s ease-in-out forwards;
            animation-delay: 0.8s;
        }
        .nav_item:hover .icon-0252{
            transform:rotate(70deg);
        }
        .menu6 li{
            opacity: 0;
            line-height: 36px;
            background: #FFF;
            width: 100px;
            padding:  0 14px;
        }
        .menu6 a{
            color: #000;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        .menu6{
            padding-top: 28px;
            position: absolute;
            top: 100%;
            z-index: -10;
            width: 100%;
            left: -2px;
            text-align: center;
        }
        .nav_item .icon-0252{
            color: #7e8c8d;
            transition: 0.3s;
            transform:rotate(7deg);
        }
        .nav_item:hover .menu6{
            z-index: 10;
        }
        .nav_item{
            position: relative;
            cursor: pointer;
        }
        @keyframes menu6 {
            0% {
                opacity: 0;
                transform: scale(2);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        #app {
            font-size: 12px;
        }

        .header {
            width: 1200px;
            margin: 0 auto;
            line-height: 82px;
            font-size: 19px;
            display: flex;
            justify-content: space-between;
        }

        .nav_list {
            height: 82px;
            justify-content: flex-end;
            display: flex;
            align-items: center;
        }

        .logo {
            height: 82px;
        }

        .logo img {
            height: 82px;
        }

        .nav_list>li {
            line-height: normal;
            padding: 0 14px;
            border-right: 2px solid #958c8c;
        }


        .footer {
            background: #2f2727;
            color: #fff;
        }

        .footer_top > div {
            float: left;
            font-size: 24px;
            padding: 0 15px;
            border-right: 2px solid #fff;
        }

        .footer_top > div:nth-last-of-type(1) {
            border: none;
        }

        .footer_top:after {
            display: block;
            content: "";
            clear: both;
        }

        .footer_top {
            width: 1200px;
            margin: 0 auto;
            padding-top: 100px;
        }

        .footers {
            display: flex;
            width: 1200px;
            margin: 60px auto 0;
            justify-content: space-around;
        }

        .footer_item {
            font-size: 14px;
            color: #fff;
            line-height: 36px;
        }

        .footer_item > nav {
            font-size: 18px;
        }

        .footer_wz {
            text-align: center;
            line-height: 72px;
            background: #1f2022;
            font-size: 18px;
            color: #fff;
        }

    }
</style>
