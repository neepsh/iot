<template>
    <div class="table_h5">
         <div class="table_content">
             <ul class="table_ul">
                 <li>
                     <div class="ul_name"> 申请类别</div>
                     <div class="ul_content">
                         <button>渠道合作</button>
                     </div>
                 </li>
                 <li>
                     <div class="ul_name">所在城市</div>
                     <div class="ul_content">
                         <select name="" >
                             <option value="请选择" v-for="data in citys">{{data.name}}</option>
                         </select>
                         <select name="">
                             <option value="" v-for="data in  city_1">{{data}}</option>
                         </select>
                     </div>
                 </li>
                 <li>
                     <div class="ul_name">申请城市</div>
                     <div class="ul_content">
                         <select name="" >
                             <option value="请选择" v-for="data in citys">{{data.name}}</option>
                         </select>
                         <select name="">
                             <option value="" v-for="data in  city_1">{{data}}</option>
                         </select>
                     </div>
                 </li>
                 <li>
                     <div class="ul_name">姓名</div>
                     <div class="ul_content"><input type="text"></div>
                 </li>
                 <li>
                     <div class="ul_name">邮箱</div>
                     <div class="ul_content"><input type="text"></div>
                 </li>
                 <li>
                     <div class="ul_name">职位</div>
                     <div class="ul_content"><input type="text"></div>
                 </li>
                 <li>
                     <div class="ul_name">地址</div>
                     <div class="ul_content"><input type="text"></div>
                 </li>
                 <li>
                     <div class="ul_name">手机号码</div>
                     <div class="ul_content"><input type="text"></div>
                 </li>
             </ul>
             <div class="table_radio">
                <div>
                    <div class="radio_name">信息来源</div>
                    <div class="radio_content">
                        <div><input type="radio"> <span>网络搜索</span></div>
                        <div><input type="radio"> <span>网站新闻</span></div>
                        <div><input type="radio"> <span>朋友介绍</span></div>
                        <div><input type="radio"> <span>机身电话</span></div>
                        <div><input type="radio"> <span>微信</span></div>
                        <div><input type="radio"> <span>市场活动</span></div>
                    </div>
                </div>
                 <div>
                     <div class="radio_name">关心问题</div>
                     <div class="radio_content">
                         <div><input type="radio"> <span>价格</span></div>
                         <div><input type="radio"> <span>合作方式</span></div>
                         <div><input type="radio"> <span>售后</span></div>
                         <div><input type="radio"> <span>培训</span></div>
                         <div><input type="radio"> <span>水果供给</span></div>
                         <div><input type="radio"> <span>设备性能</span></div>
                         <div><input type="radio"> <span>食品安全</span></div>
                         <div><input type="radio"> <span>其他</span></div>
                     </div>
                 </div>

             </div>
             <div class="table_text">
                 <div>
                     <span>可用资金描述</span>
                     <textarea name="" cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万。"></textarea>
                 </div>
                 <div>
                     <span>渠道资金描述</span>
                     <textarea name=""  cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万。"></textarea>
                 </div>
                 <div>
                     <span>管理资源描述</span>
                     <textarea  cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万。"></textarea>
                 </div>
                 <div>
                     <span>其他资源</span>
                     <textarea   cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万。"></textarea>
                 </div>

             </div>
             <div class="item">
                 <div>
                    <div class="item_name">您从何种渠道了解到【阿橙 果啦】</div>
                     <div class="item_content">
                         <div><input type="radio"> <span>现场考察【阿橙果啦】销售终端</span></div>
                         <div><input type="radio"> <span>【阿橙果啦】运营商,加盟商引荐</span> <!--<input type="text" placeholder="【阿橙果啦】运营商,加盟商引荐">--></div>
                         <div><input type="radio"> <span>媒体报道</span> <!--<input type="text" placeholder="媒体名称">--></div>
                         <div><input type="radio"> <span>其他</span> <!--<input type="text" placeholder="">--></div>
                     </div>
                 </div>
                 <div>
                     <div class="item_name">您是否考察【阿橙果啦】销售终端</div>
                     <div class="item_contents">
                         <div><input type="radio"> <span>是</span> <input type="radio"> <span>否</span> <!--<input type="text" placeholder="终端名称">--></div>
                     </div>
                 </div>
             </div>
         </div>
        <div class="btn">
            <button>提交 </button>
        </div>
    </div>
</template>

<script>
    import city from '../../assets/js/demo'
    export default {
        name: "table_h5",
        data(){
            return {
                citys:city.city(),
                city_1:city.city()[0].city[0].area,
            }
        },
        mounted(){
            var path = this.$router.history.current.path;
            if (path.indexOf('table') > 0 || path.indexOf('condition') > 0 || path.indexOf('position') > 0) {
                this.$parent.data.table_h5=true
            }
        }
    }
</script>

<style scoped>
    .btn{
        padding: 0.3rem;
        text-align: center;
    }
    .btn button{
        width: 1.21rem;
        height: 0.41rem;
        border: none;
        color: #fff;
        background: #ff7500;
    }
    .item>div{
        display: flex;
        justify-content: space-around;
    }
    .item_contents{
        flex-grow: 3;
        margin-left: 0.3rem;
    }
    .item_content{
        flex-grow: 3;
        margin-left: 0.3rem;
    }
    .item{
        padding-bottom: 0.3rem;
    }
    .item_content>div{
        padding-bottom: 0.3rem;
    }
    .item_content input[type=text]{
        width: 4rem;
        border:1px solid #d9d9d9;
        height: 0.43rem;
    }
    .item{
        margin-top: 0.3rem;
    }
    .item_name{
        width: 100px;
        color: #ff7500;
    }
    .table_text{
        margin-top: 0.3rem;
        border-bottom: 1px solid #a6a6a6;
    }
   .table_text span{
       width: 1rem;
       color: #ff7500;
   }
    .table_text textarea{
        resize: none;
        width: 5.25rem;
        height: 1.31rem;
    }
    .table_text>div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.3rem;
    }
    .radio_name{
        width: 1rem;
        color: #ff7500;
    }
    .radio_content{
        margin-left: 0.3rem;
        flex-grow: 3;
    }
    .radio_content >div{
        padding-bottom: 0.26rem;
    }
    .table_radio{
        margin-top: 0.26rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #a6a6a6;
    }
    .table_radio>div{
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    .table_ul{
        border-bottom: 1px solid #a6a6a6;
    }
    .ul_name{
        color: #ff7500;
        width: 1rem;
        text-align: right;
    }
    .ul_content input{
        width: 3.84rem;
        height: 0.43rem;
        border: 1px solid #d9d9d9 ;
    }
    .ul_content select{
        width: 1.83rem;
        height: 0.43rem;
        margin-right: 0.18rem;
    }
    .ul_content button{
        width: 1.43rem;
        height:0.4rem;
        color: #fff;
        background: #ff7500;
        border: none;
    }
    .ul_content{
        flex-grow: 3;
        margin-left: 0.35rem;
        margin-bottom: 0.24rem;
    }
    .table_ul li{
        display: flex;
        justify-content: space-around;
    }
    .table_h5{
        padding:0 0.3rem;
        font-size: 0.24rem;
        background: #fff;
    }
</style>
