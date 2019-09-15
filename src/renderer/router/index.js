import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: require('@/pages/Nav').default,
      children: [
        {
          path: '/',
          name: 'home',
          component: require('@/pages/Home').default
        },
        {
          path: '/keywords',
          name: 'keywords',
          component: require('@/pages/Keywords').default
        },
        {
          path: '/report',
          name: 'report',
          component: require('@/pages/Report').default
        },
        {
          path: '/alarm',
          name: 'alarm',
          component: require('@/pages/Alarm').default
        },
      ],
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
