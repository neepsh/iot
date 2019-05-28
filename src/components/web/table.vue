<template>
    <div class="table">
        <div class="content">
            <nav class="nav">在线申请</nav>
            <div id="table">
                <div class="name">
                    <span>申请类别</span>
                    <button>渠道合作</button>
                </div>
                <div class="item">
                    <div class="list">
                        <p>所在城市</p>
                        <div class="list_select">
                            <select name="" >
                                <option value="请选择" v-for="data in citys">{{data.name}}</option>
                            </select>
                            <select name="">
                                <option value="" v-for="data in  city_1">{{data}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="list">
                        <p>申请城市</p>

                        <div class="select_right list_select">
                            <select name="" >
                                <option value="请选择" v-for="data in citys">{{data.name}}</option>
                            </select>
                            <select name="">
                                <option value="" v-for="data in  city_1">{{data}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="list"><span class="input_name">姓名</span> <input type="text"></div>
                    <div class="list"><span class="input_name">手机号码</span> <input type="text"></div>
                    <div class="list"><span class="input_name">邮箱</span> <input type="text"></div>
                    <div class="list"><span class="input_name">所在地址</span> <input type="text"></div>
                    <div class="list last"><span class="input_name">职位</span> <input type="text"></div>
                </div>
                <div class="item">
                    <div class="list">
                        <div class="name">信息来源</div>
                        <div class="list_radio">
                            <p><input type="radio" class="radio"/> <b>网络搜索</b></p>
                            <p><input type="radio" class="radio"/> <b>网站新闻</b></p>
                            <p><input type="radio" class="radio"/> <b>朋友介绍</b></p>
                            <p><input type="radio" class="radio"/> <b>机身电话</b></p>
                            <p><input type="radio" class="radio"/> <b>微信</b></p>
                            <p><input type="radio" class="radio"/> <b>市场电话</b></p>
                            <p><input type="radio" class="radio"/> <b>其他</b></p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="name">关心问题</div>
                        <div class="list_radio">
                            <p><input type="radio" class="radio"/> <b>价格</b></p>
                            <p><input type="radio" class="radio"/> <b>合作方式</b></p>
                            <p><input type="radio" class="radio"/> <b>售后</b></p>
                            <p><input type="radio" class="radio"/> <b>培训</b></p>
                            <p><input type="radio" class="radio"/> <b>水果供给</b></p>
                            <p><input type="radio" class="radio"/> <b>设备性能</b></p>
                            <p><input type="radio" class="radio"/> <b>食品安全</b></p>
                            <p><input type="radio" class="radio"/> <b>其他 </b></p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="text_name">可用资金描述</div>
                    <div class="text"><textarea name=""  placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万"></textarea></div>
                </div>
                <div class="item">
                    <div class="text_name">渠道资源描述</div>
                    <div class="text"><textarea name="" id="" cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万"></textarea></div>
                </div>
                <div class="item">
                    <div class="text_name">管理资源描述</div>
                    <div class="text"><textarea name="" id="" cols="30" rows="10" placeholder="请简述您自己可直接使用的资金，以及可融资的金额。如;共200万，其中自有资金50万，引入合伙人投资150万"></textarea></div>
                </div>
                <div class="item">
                    <div class="text_name">其他信息</div>
                    <div class="text"><textarea name="" id="" cols="30" rows="10"></textarea></div>
                </div>
                <div class="item">
                    <div class="text_name">您从何总渠道了解到阿橙果啦</div>
                    <div class="from">
                        <div>
                            <div class="icon"><input type="radio"></div>
                            <div class="form_info">现场考察阿橙果啦销售终端</div>
                        </div>
                        <div>
                            <div class="icon"><input type="radio"></div>
                            <div class="form_info">加盟商引荐</div>
                        </div>
                        <div>
                            <div class="icon"><input type="radio"></div>
                            <div class="form_info">媒体报道</div>
                        </div>
                        <div>
                            <div class="icon"><input type="radio"></div>
                            <div class="form_info">其他</div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="text_name">您是否考察过阿橙果啦</div>
                    <div class="check">
                        <span><input type="radio" value="look">是</span>
                        <span><input type="radio" value="look">否</span>
                    </div>
                </div>
                <div class="btn">
                    <button>提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import  city from '../../assets/js/demo'
    export default {
        name: "table",
        data(){
            return {
                citys:city.city(),
                city_1:city.city()[0].city[0].area,
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>


    .btn button{
        width: 120px;
        height: 40px;
        background: #ff7500;
        color: #fff;
        border: none;
    }
    .btn{
        margin-top: 30px;
        text-align: center;
    }
    .icon{
        width: 40px;
        text-align: center;
    }
    .from>div{
        display: flex;
        justify-content: space-around;
    }
    .form_info{
        flex-grow: 3;
    }
    .from,.check{
        flex-grow: 3;
        margin-left: 30px;
    }
    .text textarea{
        resize: none;
        width: 880px;
        height: 138px;
    }
    .text{
        flex-grow: 3;
    }
    .text_name{
        width: 150px;
        color: #ff7500;
    }
    .list_radio{
        flex-grow: 3;
        margin-left: 30px;
    }
    .radio{
        color: #ff7500;
    }
    .list .input_name{
        width: 80px;
        display: inline-block;
        text-align: left;
    }
    .item:nth-of-type(3) .list{
        padding: 12px 0 ;
    }

    .list.last{
        flex-grow: 3;
        display: block;
    }
    .list>input {
        width: 384px;
        height: 43px;
        border: 1px solid #d9d9d9;
    }
    .select_right{
        margin-left: 30px;
    }
    .list>span{
        width: 100px;
        color: #ff7500;
        text-align: right;
    }
    .list_select{
        flex-grow: 3;
    }
    .list>p{
        color: #ff7500;
    }
    .list select{
        width: 183px;
        height: 43px;
        margin-left: 18px;
    }
    .list{
        line-height: 43px;
        display: flex;
        justify-content: space-around;
        text-align: left;
    }
    .item{
        flex-wrap: wrap;
        text-align: left;
        font-size: 18px;
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
        padding-top: 30px;
        border-bottom: 1px solid #d9d9d9;
    }
    .list{
        width: 50%;
        text-align: left;
    }
    .name{
        font-size: 18px;
        color: #ff7500;
    }
    .name button{
        border: none;
        width: 114px;
        height: 40px;
        background: #ff7500;
        color: #fff;
        margin-left: 12px;
    }
    .content{
        width: 1200px;
        margin: 0 auto;
        background: url("../../assets/img/table_bg.png") no-repeat ;
        background-size: 382px 2232px;
        padding-bottom: 30px;
    }
    #table {
        background: #fff;
        width: 1073px;
        margin:  0  auto;
        padding: 35px 30px;
        box-shadow: 0 0 46px 0 #0a0a0a38;
        margin-bottom: 50px;
    }
    .nav{
        text-align: center;
        color: #ff7500;
        font-size: 35px;
        line-height: 150px;
        margin-top: 20px;
    }
</style>
