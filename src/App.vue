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
                        <router-link to="mall">产品介绍</router-link>
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
                                <router-link to="info">产品介绍</router-link>
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
                        <router-link to="condition">申请条件</router-link>
                    </li>
                    <li>
                        <router-link to="table">立刻申请</router-link>
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
                    <ul class="nav_list web_list">
                        <li @click="show_li(0)" >
                            <router-link to="index">首页</router-link>
                        </li>
                        <li @click="show_li(1)" >
                            <router-link to="product">产品一览</router-link>
                        </li>
                        <li @click="show_li(2)" >
                            <router-link to="server">服务支持</router-link>
                        </li>

                        <li @click="show_li(3)" >
                            <router-link to="mall">在线商城</router-link>
                        </li>

                        <li class="nav_item" @click="show_li(4)">
                            <nav>
                                <router-link to="about"><span>关于我们</span> <i></i></router-link>
                            </nav>
                            <ul class="menu6">
                                <li>
                                    <router-link to="odds">我们的优势</router-link>
                                </li>
                                <li>
                                    <router-link to="join">我们的目标</router-link>
                                </li>
                                <li>
                                    <router-link to="active">案例·活动</router-link>
                                </li>
                            </ul>
                        </li>
                        <li @click="show_li(5)">
                            <router-link to="contact">联系我们</router-link>
                        </li>
                        <li @click="show_li(6)" >
                            <router-link to="cooperation">商务合作</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <div id="content">
            <div class="nav_apply" v-if="data.table_h5">
                <div class="apply">
                    <div><router-link to="/h5/condition">如何申请</router-link></div>
                    <!--<div>常见问题</div>-->
                    <div><router-link to="/h5/table">在线申请</router-link></div>
                </div>

            </div>
            <router-view v-bind:datas="data"/>
        </div>

      <!--  <div id="ie">
            <h1>您当前的浏览器为ie或者为ie模式</h1>
            <div class="ie">
                <div>
                    <div>1、更换如下浏览器后重新进行访问</div>
                </div>
                <div></div>
            </div>
        </div>
-->

        <div id="sidebar">
            <div class="sidebar">
                <router-link to="/web/table">立刻申请</router-link>
            </div>
            <div class="sidebar">
                <router-link to="/web/condition">申请条件</router-link>
            </div>
            <div class="sidebar" @click="side">
                <i class="icon-0482"></i>
                <p> 回到顶部</p>
            </div>
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
                    <p>联系电话：025-8652-8059</p>
                    <p>公司邮箱：zhangyueqing@njxbz.online</p>
                </div>
            </div>
        </footer>
        <footer v-if="data.web_type=='web'" id="footer">
            <div class="footer">
                <div class="footer_top">
                    <div><router-link to="index">网站首页</router-link></div>
                    <div> <router-link to="product">优质产品</router-link></div>
                    <div><router-link to="odds">我们的优势</router-link> </div>
                    <div><router-link to="about">关于我们</router-link> </div>
                    <div><router-link to="server">服务支持</router-link> </div>
                    <div><router-link to="cooperation">商务合作</router-link> </div>

                </div>
                <div class="footers">
                    <div>
                        <i class="icon-0255"></i>
                        <p>联系方式</p>
                        <div>400-8288-251</div>
                    </div>
                    <div>
                        <i class="icon-0956"></i>
                        <p>服务邮箱</p>
                        <div>zhangyueqing @njxz.online</div>
                    </div>
                    <div>
                        <i class="icon-0504"></i>
                        <p>公司地址</p>
                        <div>南京麒麟科技创新园华清园5栋308</div>
                    </div>
                </div>
            </div>
            <div class="footer_wz">
                © Copyright © 2018 - 2020 阿橙果啦 版权所有. 备案编号：苏ICP备18032956号
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
                    logo: require('./assets/img/logo.jpg'),
                    web_type: "h5",
                    table_h5: false
                },
                name:"miss"
            }
        },
        methods: {
            show_li(num){
                var aLi=document.querySelectorAll('.web_list>li');

                for(var i=0;i<aLi.length;i++){
                    aLi[i].classList.remove('nav_active');
                }

                aLi[num].classList.add('nav_active')

            },
            side() {
                function smoothscroll() {

                    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                    if (currentScroll > 0) {
                        window.requestAnimationFrame(smoothscroll);
                        window.scrollTo(0, currentScroll - (currentScroll / 5));
                    }
                }
                smoothscroll();
            },
            isphone() {
                var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
                var ua = navigator.userAgent;
                var res = mobileArry.filter(function (arr) {
                    return ua.indexOf(arr) > 0;
                });
                this.data.table_h5 = false;
                var oSide = document.querySelector('#sidebar');
                /*return res.length > 0;*/
                if (res.length > 0) {
                    var path = this.$router.history.current.path;

                    if (path.indexOf('phone') == -1) {
                        this.data.web_type = "h5"
                    }
                    oSide.style.display='none';

                } else {
                    if (this.$router.history.current.path.indexOf('web') == -1) {
                        this.data.web_type = "web"
                    }
                    oSide.style.display='none'

                    if (oSide) {
                        oSide.style.left = (document.documentElement.clientWidth - 1200) / 2 + 1200 + "px";
                        window.addEventListener("scroll", function () {
                            var top = document.documentElement.scrollTop;
                            if (top > 300) {
                                oSide.style.display = 'block';
                            } else {
                                oSide.style.display = 'none';
                            }
                        });

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

            if (!!window.ActiveXObject || "ActiveXObject" in window){

                document.querySelector('#ie').style.display='block';
            }

            var nav_status = false, ul_status = false, status = true;
            var oMenu = document.querySelector('.header_menu'),
                oList = document.querySelector('.nav_list'),
                oIcon = document.querySelector('.icon-0252'),
                oUl = document.querySelector('.item_ul');


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

        .nav_apply {
            margin: 0 auto;
            background: #fff;
            padding: 0.3rem 0;
            display: flex;
            justify-content: space-around;
        }

        .nav_apply > div {
            width: 4.5rem;
            display: flex;
            justify-content: space-around;
        }

        .apply div {
            font-size: 0.24rem;
            padding-bottom: 0.16rem;
        }

        .nav_apply .active {
            color: #ff7500;
            border-bottom: 1px solid;
        }

        #app {
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

        #ie h1{
            font-size: 26px;
            color: #ff7500;
            margin-top: 150px;
        }
        #ie p{
            font-size: 20px;
            margin-top: 60px;
        }
        #sidebar {
            position: fixed;
            bottom: 300px;
            height: 300px;
            width: 80px;
            background: #ff7500;
            color: #fff;
            font-size: 20px;
            text-align: center;

        }
        .nav_active nav a{
            color: #ff7500;
        }
        .nav_active a{
            color: #ff7500;
        }
        .web_list a:hover{
            color: #ff7500;
        }
        .sidebar a {
            color: #fff;
            display: inline-block;
            padding-top: 20px;
        }
        .sidebar i {
            font-size: 30px;
            line-height: 40px;
        }
        .sidebar:nth-last-of-type(1){
            border: none;
        }
        .sidebar {
            display: inline-block;
            width: 40px;
            cursor: pointer;
            text-align: center;
            height: 100px;
            border-bottom: 1px solid #fff;
        }

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

       /* .nav_item:hover .menu6 li:last-of-type {
            animation: menu6 0.3s ease-in-out forwards;
            animation-delay: 0.8s;
        }*/

        .nav_item:hover i{
            transform: rotate(135deg);
        }
        .menu6 li{
            border-bottom: 1px solid #d9d9d9;
        }
        .menu6 li:nth-last-of-type(1){
            border-bottom: none;
        }

        .menu6 li {
            opacity: 0;
            line-height: 36px;
            background: #FFF;
            width: 100px;
            padding: 0 14px;
        }

        .menu6 a {
            color: #000;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        .menu6 {
            padding-top: 28px;
            position: absolute;
            top: 100%;
            z-index: -10;
            width: 100%;
            left: -2px;
            text-align: center;
        }

        .nav_item i {
            color: #7e8c8d;
            transition: 0.3s;
            display: inline-block;
            height: 10px;
            width: 10px;
            border-top: 3px solid;
            border-right: 3px solid;
            transform: rotate(45deg);
        }

        .nav_item:hover .menu6 {
            z-index: 10;
        }

        .nav_item {
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
        #header{
            border-bottom: 1px solid #e6e3e3;
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
        .nav_list > li {
            line-height: normal;
            padding: 0 14px;
            border-right: 2px solid #958c8c;
        }



        .footer {
            background: #2f2727;
            color: #fff;
        }
        .footer_top {
            font-size: 24px;
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding-top: 100px;
        }
        .footers{
            width: 1100px;
            margin: 50px auto 0;
            display: flex;
            text-align: center;
            color: #ff7500;
            font-size: 18px;
            justify-content: space-between;
            padding-bottom: 30px;
        }
        .footers i{
            font-size: 64px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
           /* background: #fff;*/
        }

        .footers p{
            padding: 20px 0;
        }

        .footer_wz {
            text-align: center;
            line-height: 72px;
            background: #1f2022;
            font-size: 18px;
            color: #fff;
        }
        .menu6 li{
            box-shadow: 3px 5px 5px #b5a9a9;
        }

    }
</style>
