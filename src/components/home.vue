<template>
  <div>
    <keep-alive>
      <div class="swiper-container">
      <van-swipe class="swiper-wrapper" :autoplay="3000">
        <van-swipe-item v-for="(item,index,key) in data1" class="swiper-slide" v-if="index!=4" :key="key">
          <div :style="{backgroundImage:imageurl(item.resource.image_uri)}" class="swipeimg">
            <div class="itemcontent">
              <span class="swipespan">{{item.resource.title}}</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    </keep-alive>
    <div class="artical-wrapper" ref="articalwrapper">
      <ul>
      <router-link :to="{name:'artical',query:{id:item.id}}" class="artical-item" v-for="(item,key) in data2" tag="a" :key="key" >
        <div class="artical-item-main">
          <div class="left">
            <div class="left-title">
              {{item.title}}
            </div>
            <div class="left-author">{{item.author}}</div>
          </div>
          <div class="right" :style="{backgroundImage:imageurl(item.titleimage)}"></div>
        </div>
      </router-link></ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import search from './search'
  import bscroll from 'better-scroll'
  import { Swipe, SwipeItem } from 'vant/lib/';
  import 'vant/lib/button/style';
  import {slideNews1,slideNews2,getArtical} from '../api'

    export default {
        name: "home",
        components:{
          search,
        },
        data(){
            return{
              data1:[],data2:[]
            }
        },
      computed: {
      },
      created(){
         this.getslide1();
         this.getpage();
      },
      methods:{
          async getslide1(){
            let {data} = await slideNews1();
            this.data1 = data.items;
            if (typeof this.data1 === 'undefined'){
              this.getslide2()
            }
          },
          //api不可用时启动
          async getslide2(){
            let {data} = await slideNews2();
            this.data1 = data.items;
          },

          async getpage(){
            this.data2 =  await getArtical();
          },

        imageurl(val){
          return 'url('+val+')'
        }
      },
      mounted(){
        this.$nextTick(()=>{
          if (!this.scroll) {
            this.scroll = new bscroll(this.$refs.articalwrapper, {
              click: true
            });
          } else {
            this.scroll.refresh();
          };
        })
      },
    }
</script>

<style scoped lang="less">
  .swiper-container{
    position: absolute;
    width:100%;
    height: 185px;
    z-index: 100;
    .swiper-wrapper{
      width:100%;
      height: 184px;
      top: 0;
      .swiper-slide{
        width: 100%;
        height: 170px;
        //set slider center
        text-align: center;
        .swipeimg{
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .itemcontent{
          position: absolute;
          bottom: 14px;
          left: 12px;
          right: 12px;
          .swipespan{
            font-size: 17px;
            line-height: 24px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
      .swiper-pagination{
        display: flex;
        position: absolute;
        width: 100%;
        height: 14px;
        bottom: 0;
        left: 0;
        text-align: center;
      }
    }
  }
  .artical-wrapper{
    position:absolute;
    top: 186px;
    bottom: 52px;
    width: 100%;
    .artical-item{
      display: block;
      width: 100%;
      height: 109px;
      padding: 10px 15px 0 15px;
      .artical-item-main{
        display: flex;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        margin-bottom: 10px;
        .left{
          display: flex;
          width: 66%;
          height: 100%;
          flex-direction: column;
          .left-title{
            width: 100%;
            height: 80%;
            font-size: 16px;
            line-height: 22px;
            max-height: 66px;
            font-weight: bold;
            color: #333;
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-all;
          }
          .left-author {
            height: 20%;
            font-size: 12px;
            line-height: 16px;
            color: #999;
          }
        }
        .right{
          display: flex;
          width: 30%;
          height: 100%;
          margin-left: 12px;
          padding-bottom: 10px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
    }
  }
</style>
