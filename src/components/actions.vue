<!--
1.actions 中的异步方法需要dispatch()方法来触发
-->
<template lang="html">
  <div class="app">
    <div class="">
      {{count}}
    </div>
    <div class="">
      {{stringCount}}
    </div>
    <div class="">
      <button type="button" name="button" @click="[addCount(), addStringCount()]">addCount+addStringCount</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'count',
      'stringCount'
    ])
  },
  methods: {
    ...mapMutations({
      addCount: 'increment'
    }),
    // addStringCount() {
    //   let $this = this
    //   this.$store.dispatch('INCREMENTASYNC_STRING_COUNT', {step: 10}).then((value) => {
    //     console.log(value)
    //     $this.addCount()
    //   })
    // }

    // 调用一个 actions 中的异步方法，实现异步执行完 stringCount 状态的增加后再增加 count 状态
    addStringCount() {
      this.$store.dispatch('INCREMENTASYNC_DOUBLE_COUNT', {step: 10})
    }
  }
}
</script>

<style lang="sass">
</style>
