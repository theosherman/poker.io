import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Welcome')
    },
    {
      path: '/host',
      component: require('@/components/Host')
    },
    {
      path: '/player',
      component: require('@/components/Player')
    }
  ]
})
