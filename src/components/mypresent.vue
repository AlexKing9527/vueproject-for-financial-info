<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="top-left">
          <img style="width: inherit;height: inherit" src="https://wpimg.wallstcn.com/ivanka_avatar_6.png?imageView2/1/w/400/h/400">
        </div>
        <div class="top-right">
          <h1 class="name"> AlexKing</h1>
          <h2 style="color: #eee;margin-top: 2px">my Github</h2>
          <a class="github" href="https://github.com/AlexKing9527" style="color: #6288dd;font-size: 13px">
            https://github.com/AlexKing9527
          </a>
        </div>
      </div>
    </div>
    <div class="line">
      关于
    </div>
    <p class="info">
      本网站(针对移动端)基于Vue框架制作,除首页下方文章为静态数据外，其他都是动态接口(金十和华尔街的接口)
      <br><br>
      <b>各页面一些设计思路</b><br/><br>
      <b>--后端：</b>用的是axios和express，开发阶段，文章静态部分用的是express进行跨域，动态端口则是
      用moduel.export输出axios.all接口(如行情页中数据需要打包发送).<br/>
      <b>--首页：</b>轮播图插件用的是vant ui库，而滚动部分用的是vue-scroll插件，文章部分用的是v-for循环
      router-link，路由指向的是不同query的文章页面，数据是json格式。而文章是数组格式，到页面中再用v-for
      通过p格式导入<br/>
      <b>--快讯：</b>自己写了一个简单的js左右切换，用的是v-on的touch事件触发，下拉刷新用的是better-scroll,
      数据获取中，我先判断路由中参数，再用switch来获取对应数据，可以避免一次导入数据，导致卡顿现象<br>
      <b>--行情：</b>页面滚动用的是iview插件中的无限滚动，所以貌似用不了touch方法，就没做左右滑动。数据导入
      与快讯页面相似，但是渲染时我用了过滤器filter来设置不同数据的小数位<br><br>
      具体源码可联系我 QQ 837128944，望提供修改宝贵意见(上线时源码尚未同步到Github)
    </p>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
    import tab from '../router/tab'

    export default {
        name: "mypresent",
        components:{
          tab
        },
    }
</script>

<style scoped lang="less">
  .header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;
    background-color: rgb(74,71,70);
    padding-top: 50px;
    .top{
      width: 100%;
      height: 90px;
      margin-top: 10px;
      display: flex;
      .top-left{
        display: inline-block;
        width: 90px;
        height: 90px;
        margin-left: 30px;
      }
      .top-right{
        display: inline-block;
        margin-top: 5px;
        margin-left: 15px;
        width: 200px;
      }
      .name{
        font-size: 22px;
        color: #fff;
      }
    }
  }
  .line{
    position: absolute;
    top: 200px;
    width: 100%;
    height: 40px;
    background-color: rgba(0,0,0,0.1);
    padding-left: 20px;
    color: #110;
    font-size: 13px;
    word-spacing: 1px;
    line-height: 40px;
    font-weight: bold;
  }
  .info{
    font-family: '宋体';
    position: absolute;
    display: block;
    top: 240px;
    margin-top: 10px;
    margin-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    font-size: 14px;
    color: #000;
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
    text-indent: 1rem;
    word-break: break-all;
    overflow: auto;
  }
</style>
