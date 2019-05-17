import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/web/index',
      component: resolve => require(['../components/web/index'], resolve),
      meta: {title: 'tab选项卡',
      }
    },
    {
      path: '/h5/index',
      component: resolve => require(['../components/h5/index'], resolve),
      meta: {title: 'tab选项卡',
      }
    }
  ]
})
