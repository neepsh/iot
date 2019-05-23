import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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

      /*h5*/
    {
      path: '/h5/index',
      component: resolve => require(['../components/h5/index'], resolve),
      meta: {title: '主页'}
    },
    {
      path:'/h5/about',
      component:resolve => require(['../components/h5/about'],resolve),
      meta:{title:'关于我们'}
    },
    {
      path:'/h5/contact',
      component:resolve => require(['../components/h5/contact'],resolve),
      meta:{title:'联系我们'}
    },
    {
      path:'/h5/cooperation',
      component:resolve => require(['../components/h5/cooperation'],resolve),
      meta:{title:'商务合作'}
    },
    {
      path:'/h5/join',
      component:resolve => require(['../components/h5/join'],resolve),
      meta:{title:'加入我们'}
    },
    {
      path:'/h5/odds',
      component:resolve => require(['../components/h5/odds'],resolve),
      meta:{title:'优势'}
    },
    {
      path:'/h5/server',
      component:resolve => require(['../components/h5/server'],resolve),
      meta:{title:'服务'}
    }
  ]
})
