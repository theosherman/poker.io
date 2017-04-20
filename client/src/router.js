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
      name: 'host',
      path: '/host/:gameId',
      component: require('@/components/Host')
    },
    {
      name: 'player',
      path: '/player/:gameId',
      component: require('@/components/Player')
    }
  ]
})
