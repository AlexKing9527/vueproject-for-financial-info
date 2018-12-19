<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
  import tab from './router/tab'
  import {getNews, getChart} from './api'

  export default {
    name: 'App',
    data(){
      return {
      }
    },
    components:{
      tab
    },

}
</script>

<style>
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
  button{
    outline:none
  }
</style>
