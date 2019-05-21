<template>
  <div id="app">
    <header v-if="data.web_type=='h5'" id="header">
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
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      data:{
        web_type:"h5"
      }
    }
  },
  methods:{
    isphone() {
        var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
        var ua = navigator.userAgent;
        var res = mobileArry.filter(function (arr) {
            return ua.indexOf(arr) > 0;
        });
        /*return res.length > 0;*/
        if(res.length>0){

            if(this.$router.history.current.path.indexOf('phone')==-1){
                this.$router.push({path: '/h5/index'});
                this.data.web_type="h5"
            }

        }else {
            if(this.$router.history.current.path.indexOf('web')==-1){
                this.$router.push({path: '/web/index'});
              this.data.web_type="web"
            }

        }
    },
    set_size(){
      var oW=document.documentElement.clientWidth/7.5;

      document.querySelector('html').style.fontSize=oW+'px';
    }
  },
  mounted(){
    this.isphone();
    this.set_size();

    var oMenu=document.querySelector('.header_menu'),
      oList=document.querySelector('.nav_list'),
      oIcon=document.querySelector('.icon-0252'),
      oUl=document.querySelector('.item_ul');

    var nav_status=false,ul_status=false;

    oMenu.onclick=function () {
      if(nav_status){
        oList.style.right='-60%';
        nav_status=false
      }else{
        oList.style.right=0;
        nav_status=true
      }
    };
    oIcon.onclick=function () {
      if(ul_status){
        oUl.style.height="0";
        ul_status=false;
        this.style.transform="rotate(0deg)";
      }else {
        ul_status=true;

        this.style.transform="rotate(90deg)";
        oUl.style.height="3.2rem";
      }
    }
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/icom.css');

  /* h5 header*/
  .header_logo{
    height: 0.56rem;
    width: 1.9rem;
    background: url('assets/img/new_logo.png') no-repeat;
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
  }
</style>
