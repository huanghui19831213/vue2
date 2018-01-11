<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <div>
          <el-button  type="success" >更新排序</el-button>
          <el-button  type="success" icon="el-icon-plus">新建服务导航</el-button>
        </div>
      </div>
      
      <el-input  placeholder="搜索名称..." prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>

      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%" class="mt20">
          <el-table-column
            prop="title"
            label="标题		">
          </el-table-column>
          <el-table-column
            prop="sort"
            label="排序号">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"  >编辑</el-button>
              <el-button
                size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        value: '',
         optionsType: [{
          value: '1',
          label: '所有分类'
        }, {
          value: '2',
          label: '在职证明'
        }, {
          value: '3',
          label: '离职证明'
        }, {
          value: '4',
          label: '收入证明'
        }],
         tableData: [{
          title: '12万个税申报',
          sort: 0,
          date:'2017/2/20 10:08:36'
        }]
      }
    }
  
  }
</script>
<style lang="scss" scoped>
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