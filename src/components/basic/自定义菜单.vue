<template>
    <div class="wrapper">
      <div class="left">
        <div class="title"><span>菜单管理</span><div><i class="el-icon-plus"></i><i class=" el-icon-menu"></i></div></div>
      </div>
      <div class="right">
        <div class="title">

        </div>
      </div>
    </div>
</template>


<script>
  export default {
    data () {
      return {
       
      }
    }
   
  }
</script>
<<style lang="scss" scoped>
  .wrapper {
    background:#fff;
    padding:20px;
    display:flex;
    font-size:12px;
    .left{
      width:400px;
      border:1px solid #e4e7ed;
      .title{
        height:34px;
        display:flex;
        justify-content: space-between;
        align-items:center;
      }
      span{padding-left:10px;}
      i{
        margin-right:10px;
        font-size:14px;
        cursor: pointer;
      }
    }
    .right{
      flex:1;
      border:1px solid #e4e7ed;
      border-left:0px;
      .title{
        height:34px;
        background:#fff;
      }
    }
  }
</style>