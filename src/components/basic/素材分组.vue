<template>
  <div>
    <div class="oheader">
        <span class="title">素材分组列表</span>
        <div>
          <el-button type="success" icon="el-icon-plus" >新建分组</el-button>
        </div>
    </div>
    <div class="overflow">
        <el-input
          placeholder="搜索分组名称"
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>
    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;" class="mt20" >
      <el-table-column
        prop="title"
        label="分组名称">
      </el-table-column>
      <el-table-column
        prop="data"
        label="创建时间">
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"  >编辑</el-button>
          <el-button
            size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        }]
      }
    }
  }
</script>

<style lang="scss">
  
  .title-Input{
    width:auto;
    display:inline-block;
    float:right;
  }
</style>