<template>
  <div>
    <top-tab></top-tab>
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
    import toptab from './top-tab'

    export default {
      components: {
        toptab
      },
      name: "info",
      mounted(){
        this.$router.go('/info/currencies')
      }
    }
</script>

<style scoped>
  top-tab{
    position: fixed;
  }
</style>
