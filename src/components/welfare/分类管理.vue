<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}列表</span>
        <el-input  placeholder="搜索..." prefix-icon="el-icon-search"  class="title-Input" ></el-input>
      </div>
      
      

      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%" class="mt20">
          <el-table-column
            prop="title"
            label="分类名称	">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建日期">
          </el-table-column>
          <el-table-column 
            width="80"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
         tableData: [{
          title: '体检',
          date: '2016/6/20 11:16:59'
        },
        {
          title: '体检',
          date: '2016/6/20 11:16:59'
        },{
          title: '体检',
          date: '2016/6/20 11:16:59'
        },{
          title: '体检',
          date: '2016/6/20 11:16:59'
        },]
      }
    }
  
  }
</script>
<style lang="scss" scoped>
  .el-button+.el-button{
    margin-left:3px;
  }
  .title-Input{
    width:auto;
  }
  .list{
    li{
      border:1px solid #e4e7ed;
      background:#fff;
      display:inline-block;
      margin:6px;
      width:235px;
    }
    img{
      width:215px;
      height:190px;
      padding:10px;
    }
    .title{
      font-size:14px;
      margin:0px 10px;
      padding-top:10px;
      padding-bottom:10px;
      border-top:1px solid #e4e7ed;
    }
    .icon{
      background:#eee;
      padding:6px 10px;
      line-height:30px;
      input{
        width: 35px;
        height: 20px;
        text-align: center;
      }
      .state{float:right;font-size:14px;}
    }
    i{
      font-size:18px;
      margin-right:6px;
      cursor: pointer;
    }
  }
</style>