<template lang="html">
  <div class="app">
    <div class="">
      countA:{{countA}}
    </div>
    <div class="">
      countB:{{countB}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    countA() {
      return this.$store.state.a.count
    },
    countB() {
      return this.$store.state.b.count
    }
  }
}
</script>

<style lang="sass">
</style>
