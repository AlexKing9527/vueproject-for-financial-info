<template>
  <div class="header">
      <Icon type="md-arrow-back" class="left-back" @click="goback"></Icon>
      <!--<Icon type="el-icon-search right-search"></Icon>-->
  </div>
</template>

<script>
    export default {
        name: "mheader",
        data(){
          return {
            showup:false
          }
        },
        components:{
        },
        methods:{
          goback(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    height:45px;
    position: fixed;
    border-radius: 4px;
    top:0;
    left: 0;
    background-color: #d1d5dd;
    z-index: 100;
    .left-back{
      position: absolute;
      top: 9px;
      left: 14px;
      font-size: 27px;
      font-weight: bold;
      padding:2px
    }
  }

</style>
