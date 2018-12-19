<template>
  <div>
    <toptab></toptab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from './Mheader'
  import toptab from './top-tab'
  import shownews from './shownews'
  import BScroll from 'better-scroll'
  import {getNews, getChart} from '../api/'

  export default {
    name: "news",
    components: {
      Mheader,
      toptab
    },

    mounted(){
      this.$router.push('/news/global')
    }


    // mounted() {
    //   this.$nextTick(() => {
    //     console.log(this.$refs)
    //     let scroll = new BScroll(this.$refs.wrapper, {
    //       scrollX: true,
    //       click:true,
    //       eventPassthrough: 'vertical',
    //       bounce:{left:true, right:true}
    //     })
    //   })
    // }
  }
</script>

<style scoped lang="less">



</style>
