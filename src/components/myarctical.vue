<template>
  <div>
    <Mheader></Mheader>
    <div class="artival">
      <div class="header">
        <div class="artical-title">{{data1.title}}</div>
        <div class="author">{{data1.author}}</div>
        <div class="abstract">摘要：{{data1.abstract}}</div>
      </div>
      <div class="content">
        <p v-for="(item,index) in data1.content">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import {getArtical} from '../api'
    import Mheader from './Mheader'

    export default {
      name: "myartical",
      data(){
        return{
          data1:[],id:0
        }
      },
      components:{
        Mheader
      },
      watch:{
        $route(){
          this.id = this.$route.query.id
          this.getpage();
        }
      },
      created(){
        this.id = this.$route.query.id
        this.getpage();
      },
      methods:{
        async getpage(){
          let data = await getArtical();
          this.data1 = data.filter((item)=>{
            return item.id === parseInt(this.id);
          });
          this.data1 = this.data1[0];
        },

      }
    }
</script>

<style scoped lang="less">
  .artival{
    position: absolute;
    bottom: 80px;
    top:45px;
    width: 100%;
    .header{
      padding: 0 20px 0 20px;
      .artical-title{
        margin-top: 30px;
        font-size: 23px;
        font-weight: bold;
        line-height: 32px;
        color: #333;
        margin-bottom: 16px;
        word-break: normal;
      }
      .author{
        margin-bottom: 10px;
        padding-left: 16px;
      }
      .abstract{
        padding: 10px 20px 10px 20px;
        color: #999;
        font-size: 14px;
        line-height: 24px;
      }
    }
    .content{
      margin-top: 10px;
      padding: 0 20px 0 20px;
      margin: 25px 0 60px 0;
    }
    .content p{
      text-align: left;
      word-break: break-all;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      line-height: 1.5rem;
    }
  }

</style>
