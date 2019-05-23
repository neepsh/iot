<template>
    <!--商务合作-->
    <div class="h5_cooperation">

        <div id="banner">
            <img :src="banner" alt="*">
        </div>

        <div id="content">
            <div class="item">
                <nav class="nav">
                    <div class="nav_name">商务合作</div>
                    <div class="nav_info">一个分工明确，直达全国的商业模式</div>
                </nav>
                <div class="item_img">
                    <img :src="item_img.img1" alt="#">
                </div>
                <div class="item_flex">
                    <div>
                        <img :src="item_img.img2" alt="#">
                    </div>
                    <div>
                        <p>我们业务流程细化分工</p>
                        <p>最专业，最有效，最优质的各个环节</p>
                        <p>降低各环节成本</p>
                        <p>从而提高整个行业模式和效率...</p>
                    </div>
                </div>
            </div>

            <div class="item">
                <nav class="nav">
                    <div class="nav_name">我们提供的服务</div>
                    <div class="nav_info">一站式服务平台</div>
                </nav>
                <div class="server">
                    <div>
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                        <p> <i class="icon-0334"></i>提供物料到仓以及物料到点 ，两种第三方物流方案提供加盟商选择</p>
                    </div>
                    <div>
                        <img :src="item_img.img3" alt="#">
                    </div>
                </div>
            </div>

            <div class="item">
                <nav class="nav">
                    <div class="nav_name">完美一平米盈利空间一一新开机会点</div>
                    <div class="nav_info">我们的主要渠道</div>
                </nav>
                <div class="item_img">
                    <img :src="item_img.img4" alt="#">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Cooperation",
        data() {
            return {
                banner: require('../../assets/img/hezuo_banner_02.jpg'),
                item_img: {
                    img1: require('../../assets/img/web_item_03.jpg'),
                    img2: require('../../assets/img/web_11.jpg'),
                    img3: require('../../assets/img/web_15.jpg'),
                    img4: require('../../assets/img/web_item_07.jpg'),
                }
            }
        }
    }
</script>

<style scoped>
    #banner img {
        width: 100%;
    }
    #content{
        width: 1200px;
        margin: 0 auto;
    }
    .nav{
        text-align: center;
    }

</style>
