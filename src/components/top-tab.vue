<template>
  <div ref="topwrapper" class="top-wrapper">
    <ul class="container" ref="container">
      <router-link :to="{name:name,params:{page:page}}" tag="li" class="taglink" v-for="(page,index) in pages" :key="index">
        <span style="font-size: 18px">{{pageclass[index]}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import bsroll from "better-scroll";

    export default {
        name: "top-tab",
        props:{
          name:{
            type:String
          },
          pages:{
            type:Array
          },
          pageclass:{
            type:Array
          }
        },

        data(){
          return {
          }
        },
        mounted(){
          this.$nextTick(()=>{
            let scroll = new bsroll(this.$refs.topwrapper,{
              scrollX: true,
              click: true,
              eventPassthrough:"vertical"
            })
          })
        }

    }
</script>

<style scoped lang="less">
  .top-wrapper{
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 48px;
    .container {
      overflow: hidden;
      white-space: nowrap;
      display: flex;
    .router-link-active{
      color:dodgerblue;
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .taglink {
      width: 22%;
      height: 35px;
      text-align: center;
      margin: 9px 8px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }
  }
  }
</style>
