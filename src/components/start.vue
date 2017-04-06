<!--
主要的功能模拟
1.完成从store中拿取state状态对象中的值给到组件中-从store中获取状态值
2.从组件中提交动作改变store中的state
-->

<template lang="html">
  <div class="app">
    count:{{count}}
    <button type="button" name="button" @click="addCount">addCount</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    count() {
      return this.$store.state.count // store 中的state 变量的改变只有在组件中的computed属性中才能检测到
    }
  },
  methods: {
    addCount() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="sass">
</style>
