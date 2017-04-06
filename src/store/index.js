import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

import {
  INCREMENT_STRING_COUNT,
  INCREMENTASYNC_STRING_COUNT,
  INCREMENTASYNC_DOUBLE_COUNT
} from './mutation-types'

const store = new Vuex.Store({
  state: {
    count: 1,
    stringCount: 2
  },
  getters: {
    todosCount: state => {
      return 'todosCount=' + state.count
    },
    todosCount2: (state, getters) => {
      return '第二个' + getters.todosCount
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    [INCREMENT_STRING_COUNT](state, payload) {
      state.stringCount += payload.step
    }
  },
  actions: {
    [INCREMENTASYNC_STRING_COUNT]({commit, state}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('INCREMENT_STRING_COUNT', payload)
          resolve('state.stringCount=' + state.stringCount)
        }, 1000)
      })
    },
    [INCREMENTASYNC_DOUBLE_COUNT]({commit, dispatch}, payload) {
      return dispatch('INCREMENTASYNC_STRING_COUNT', payload).then((value) => {
        console.log(value)
        setTimeout(() => {
          commit('increment')
        }, 500)
      })
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})

// 导出store对象实例
export default store
