<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
            }

        }else {
            if(this.$router.history.current.path.indexOf('web')==-1){
                this.$router.push({path: '/web/index'});
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
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/icom.css');
</style>
