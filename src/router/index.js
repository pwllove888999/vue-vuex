import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Start from '@/components/start'
import State from '@/components/state'
import Getters from '@/components/getters'
import Mutations from '@/components/mutations'
import Actions from '@/components/actions'
import Modules from '@/components/modules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/state',
      name: 'State',
      component: State
    },
    {
      path: '/getters',
      name: 'Getters',
      component: Getters
    },
    {
      path: '/mutations',
      name: 'Mutations',
      component: Mutations
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    }
  ]
})
