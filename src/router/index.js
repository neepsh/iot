import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
var router=new Router({
    routes: [
        {
            path: '/', redirect: '/web/index'
        },
        {
            path: '/web/index',
            component: resolve => require(['../components/web/index'], resolve),
            meta: {title: '主页'}
        },
        {
            path: '/web/server',
            component: resolve => require(['../components/web/server'], resolve),
            meta: {title: '服务支持'}
        },
        {
            path: '/web/product',
            component: resolve => require(['../components/web/product'], resolve),
            meta: {title: '产品'}
        },
        {
            path: '/web/cooperation',
            component: resolve => require(['../components/web/cooperation'], resolve),
            meta: {title: '合作'}
        },
        {
            path: '/web/about',
            component: resolve => require(['../components/web/about'], resolve),
            meta: {title: '关于我们'}
        },
        {
            path: '/web/odds',
            component: resolve => require(['../components/web/odds'], resolve),
            meta: {title: '优势'}
        },
        {
            path: '/web/join',
            component: resolve => require(['../components/web/join'], resolve),
            meta: {title: '加盟'}
        },
        {
            path: '/web/contact',
            component: resolve => require(['../components/web/contact'], resolve),
            meta: {title: '联系我们'}
        },
        {
            path: '/web/info',
            component: resolve => require(['../components/web/product_info'], resolve),
            meta: {title: '产品详情'}
        },
        {
            path: '/web/mall',
            component: resolve => require(['../components/web/mall'], resolve),
            meta: {title: '商城'}
        },
        {
            path: '/web/table',
            component: resolve => require(['../components/web/table'], resolve),
            meta: {title: '表格'}
        },{
            path: '/web/condition',
            component: resolve => require(['../components/web/condition'], resolve),
            meta: {title: '申请流程'}
        },

        /*h5*/
        {
            path: '/h5/index',
            component: resolve => require(['../components/h5/index'], resolve),
            meta: {title: '主页'}
        },
        {
            path: '/h5/about',
            component: resolve => require(['../components/h5/about'], resolve),
            meta: {title: '关于我们'}
        },
        {
            path: '/h5/contact',
            component: resolve => require(['../components/h5/contact'], resolve),
            meta: {title: '联系我们'}
        },
        {
            path: '/h5/cooperation',
            component: resolve => require(['../components/h5/cooperation'], resolve),
            meta: {title: '商务合作'}
        },
        {
            path: '/h5/join',
            component: resolve => require(['../components/h5/join'], resolve),
            meta: {title: '加入我们'}
        },
        {
            path: '/h5/odds',
            component: resolve => require(['../components/h5/odds'], resolve),
            meta: {title: '优势'}
        },
        {
            path: '/h5/server',
            component: resolve => require(['../components/h5/server'], resolve),
            meta: {title: '服务'}
        },
        {
            path: '/h5/info',
            component: resolve => require(['../components/h5/product_info'], resolve),
            meta: {title: '产品详情'}
        },
        {
            path: '/h5/mall',
            component: resolve => require(['../components/web/product'], resolve),
            meta: {title: '商城'}
        },
        {
            path: '/h5/table',
            component: resolve => require(['../components/h5/table'], resolve),
            meta: {title: '申请表格'}
        },
        {
            path: '/h5/condition',
            component: resolve => require(['../components/h5/condition'], resolve),
            meta: {title: '申请流程'}
        },{
            path: '/h5/question',
            component: resolve => require(['../components/h5/Question'], resolve),
            meta: {title: '常见问题'}
        },
        {
            path:'*',
            component: resolve => require(['../components/err'], resolve),
            meta: {title: '404'}
        }
    ]
});

router.beforeEach((to,form,next)=>{
    window.scrollTo(0,0)

    var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
    var ua = navigator.userAgent;
    var res = mobileArry.filter(function (arr) {
        return ua.indexOf(arr) > 0;
    });
    if( res.length > 0 ){
        if( to.path.indexOf('web')>0){
            let address=to.path.replace('/web','/h5');

            next(address)
        }else {
            next();
        }
    }else {
        if (to.path.indexOf('h5')>0){
            let w_address=to.path.replace('/h5','/web')
            if(w_address.indexOf('question')>0){
                w_address=w_address.replace('question','condition');
            }

            next(w_address)
        }else {
            next();
        }

    }
    next()
})

export default router
