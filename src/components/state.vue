<!--
1.mapState() 辅助函数返回计算属性对象
2.对象展开运算符,在某一个对象前添加...
-->

<template lang="html">
  <div class="app">
    <div class="">
      {{arrowCount}}
    </div>
    <div class="">
      {{stringCount}}
    </div>
    <div class="">
      {{comptCountPlus}}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex' // mapState辅助函数的引入和声明
export default {
  data() {
    return {
      comptCount: 10
    }
  },
  // mapState() 辅助函数
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   arrowCount: state => state.count,
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   stringCount: 'stringCount',
  //   // 为了能够使用 `this` 获取组件局部状态，必须使用常规函数
  //   comptCountPlus(state) {
  //     return state.count + this.comptCount
  //   }
  // })

  // 对象展开运算符
  computed: {
    comptCountPlus() {
      return this.comptCount + 20
    },
    ...mapState({
      arrowCount: state => state.count,
      stringCount: 'stringCount'
    })
  }
}
</script>

<style lang="sass">
</style>
