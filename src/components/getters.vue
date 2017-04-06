<!--
1.store 中的 getters 属性等同于组件中的 computed 属性，能对 store 中的 state 进行处理
2.getters 中的每个计算属性都可以接受 (state, getters) 两个参数
3.mapGetters 与 mapState 用法相同
-->
<template lang="html">
  <div class="app">
    <div class="">
      {{count}}
    </div>
    <div class="">
      {{count2}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.getters.todosCount
  //   },
  //   count2() {
  //     return this.$store.getters.todosCount2
  //   }
  // }

  // mapGetters() 辅助函数
  // computed: mapGetters({
  //   count: 'todosCount',
  //   count2: 'todosCount2'
  // })

  // ...mapGetters() 对象展开运算符
  computed: {
    ...mapGetters({
      count: 'todosCount',
      count2: 'todosCount2'
    })
  }
}
</script>

<style lang="sass">
</style>
