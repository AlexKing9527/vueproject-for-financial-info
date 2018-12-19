<template>
  <div class="tab">
    <router-link to="/home" class="tab-item" tag="a">首页</router-link>
    <router-link to="/news" class="tab-item" tag="a">快讯</router-link>
    <router-link to="/info" class="tab-item" tag="a">行情</router-link>
    <router-link to="/me" class="tab-item" tag="a">我</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "tab"
    }
</script>

<style scoped lang="less">

  .tab{
    width: 100%;
    height:50px;
    position: fixed;
    border-radius: 4px;
    bottom:0;
    left: 0;
    display: flex;
    border-top: 1px solid rgba(0,0,0,0.4);
    background-color: #fff;
    z-index: 100;
    .tab-item{
      display: flex;
      width: 25%;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 15px;
      color: #999;
    }
    .router-link-active{
      color: #1478f0;
    }
  }
</style>
