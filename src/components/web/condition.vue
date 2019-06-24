<template>
    <div class="condition">
        <div class="nav">
            <p>申请条件</p>
            <span>Application conditions</span>
        </div>
        <div class="item">
            <nav>阿橙果啦理想的【运营商】需要具备以下基本条件</nav>
            <div class="content">
                <div>
                    <div class="name">良好的商业意识和经验</div>
                    <div class="list">
                        <p><i class="icon-0345"></i> 有成功的经商经历</p>
                        <p><i class="icon-0345"></i> 具有创业精神</p>
                        <p><i class="icon-0345"></i> 充分理解阿橙果啦商业模式</p>
                        <p><i class="icon-0345"></i> 具备餐饮/饮料/零售行业经验为佳</p>
                    </div>
                </div>
                <div>
                    <div class="name">卓越的运营管理能力</div>
                    <div class="list">
                        <p> <i class="icon-0345"></i> 有招募及管理团队的经验</p>
                        <p><i class="icon-0345"></i> 重视员工的培养与团队建设</p>
                        <p><i class="icon-0345"></i> 可胜任繁杂的的日常运营工作</p>
                        <p><i class="icon-0345"></i> 善于处理政府及消费者关系</p>
                    </div>
                </div>
            </div>

            <div class="content">
                <div>
                    <div class="name">优秀的渠道拓展能力</div>
                    <div class="list">
                        <p><i class="icon-0345"></i> 有招募及管理团队的经验</p>
                        <p><i class="icon-0345"></i> 重视员工的培养与团队建设</p>
                        <p><i class="icon-0345"></i> 可胜任繁杂的的日常运营工作</p>
                        <p><i class="icon-0345"></i> 善于处理政府及消费者关系</p>
                    </div>
                </div>
                <div>
                    <div class="name">具备长远发展潜力</div>
                    <div class="list">
                        <p><i class="icon-0345"></i> 对特许经营事业有长远规划</p>
                        <p><i class="icon-0345"></i> 具备管理更大规模市场的潜质</p>
                    </div>
                </div>


            </div>
        </div>
        <div  class="nav">
            <p>申请流程</p>
            <span>application process</span>
        </div>
        <div class="item">
            <div class="img">
                <div class="info">这将是一项重大的投入和长期的合作，双方都应慎重评估。在我们收到您填写的申请后，将按以下流程进行评估。</div>
                <div class="ctrl">
                    <ul>
                        <li>
                            <b></b>
                            <span>1、申请人登陆官网申请页面，在线填写/提交表格。</span>
                        </li>
                        <li>
                            <b></b>
                            <span>2、公司招商部门电话回访。</span>
                        </li>
                        <li>
                            <b></b>
                            <span>3、公司对申请人运营资质进行评估。</span>
                        </li>
                        <li>
                            <b></b>
                            <span>4、评估通过，公司邀请运营商前来参观和洽谈。</span>
                        </li>
                        <li>
                            <b></b>
                            <span>5、双方签约，运营商付款。</span>
                        </li>
                        <li>
                            <b></b>
                            <span>6、运营商员工前往总部参加培训。</span>
                        </li>
                        <li>
                            <b></b>
                            <span> 7、终端交付，开始运营。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="note">注：阿橙果啦 理想的【加盟商】的符合标准，将由运营商基于以上基本原则、根据各地市场实际情形另行制订。</div>
    </div>
</template>

<script>
    export default {
        name: "condition",
    }
</script>

<style scoped>
    .note{
        line-height: 100px;
        font-size: 18px;
        width: 1200px;
        margin:  0 auto;
    }
    .ctrl b{
        height: 80px;
        width: 20px;
        position: absolute;
        bottom: 0;
        display: inline-block;
        background: #ff7500;
    }
    .ctrl b:before{
        display: block;
        content:"";
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: #fff transparent transparent transparent;
        position: absolute;
        top: 0px;
        z-index: 10;
    }
    .ctrl b:after{
        display: block;
        content:"";
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: #ff7500 transparent transparent transparent;
        position: absolute;
        bottom: -20px;
        z-index: 10;
    }
    .ctrl span{
        display: inline-block;
        margin-left: 50px;
        font-size:18px ;
    }

    .ctrl li{
        font-size: 0;
        position: relative;
        line-height: 80px;
        margin-top: 10px;
    }
    .ctrl{
        margin: 30px auto;
        width: 600px;
    }
    .img{
        margin-top: 30px;
    }
    .list{
        font-size: 16px;
        margin-left: -50px;
        width: 260px;
    }
    .list i{
        color: #ff7500;
    }
    .info{
        font-size: 24px;
        color: #ff7500;
        line-height: 50px;
        border-bottom: 1px solid #d9d9d9;
    }
    .content{
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
    }
    .content>div{
        width: 45%;
        padding-left: 5%;
        justify-content: space-around;
        display: flex;
        line-height: 36px;
    }
    .name{
        font-size: 18px ;
        color: #ff7500;
        flex-grow: 2;
    }
    .item>nav{
        font-size: 24px;
        color: #ff7500;
        line-height: 50px;
        border-bottom: 1px solid #d9d9d9;
    }
    .item {
        width: 1200px;
        margin:  0 auto;
        border-bottom: 1px solid #d9d9d9;
    }

    .nav {
        text-align: center;
        position: relative;
        margin-top: 30px;
    }

    .nav p {
        font-size: 24px;
        padding: 0 200px 22px 200px;
        width: 180px;
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
