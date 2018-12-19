<template>
  <div>
    <el-row class="searchinput" v-if="showup">
      <el-col :xs="22" :sm="22" :md="10" :lg="5" :offset="1">
        <el-input class="search-input" placeholder="请输入内容" v-model="search">
          <button><i class="el-icon-close"></i></button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "search",
        props:{
          showup:{
            type:Boolean,
            default:false
          }
        },
        data(){
          return {
            search:'',
          }
        }
    }
</script>

<style scoped lang="less">
  .search-input{
    padding-top: 12px;
    width:90%!important;
    height: 40px;
    background-color: #d1d5dd;
    border-radius: 4px;
  }

</style>
