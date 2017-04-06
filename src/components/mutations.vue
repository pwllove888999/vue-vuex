<!--
1. 巧妙的利用对象展开运算符，可以往对象中添加属性或扩展对象
2. vue不允许在已创建的对象上添加属性，需要使用Vue.set()方法解决，添加属性或扩展对象
3. 一个元素上面可以绑定多个事件，把绑定的事件写在数组中即可
4. mutations 中的方法调用是同步的
-->
<template lang="html">
  <div class="app">
    <div class="">
      {{count}}<br>
      {{stringCount}}
    </div>
    <div class="">
      <button type="button" name="button" @click="[addCount(), addStringCount()]">addCount</button>
    </div>
    <div class="" v-for="(item, key) in personObj">
      {{key}}:{{item}}
    </div>
    <div class="">
      <button type="button" name="button" @click="addPersonAttr">addPersonAttr</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      personObj: {
        name: 'pengwei',
        age: 26,
        job: 'it'
      }
    }
  },
  computed: {
    ...mapState([
      'count',
      'stringCount'
    ])
  },
  methods: {
    // addCount() {
    //   this.$store.commit('increment')
    //   // this.$store.commit('incrementStringCount', {step: 2})
    //   // 对象风格的提交方式
    //   this.$store.commit({
    //     type: 'INCREMENT_STRING_COUNT',
    //     step: 2
    //   })

    // 对象展开运算符
    ...mapMutations({
      addCount: 'increment'
    }),
    addStringCount() {
      this.$store.commit('INCREMENT_STRING_COUNT', {step: 2})
    },
    addPersonAttr() {
      // this.personObj = {
      //   ...this.personObj,
      //   interesting: 'sleep'
      // }
      this.$set(this.personObj, 'interesting', 'sleep')
    }
  }
}
</script>

<style lang="sass">
</style>
