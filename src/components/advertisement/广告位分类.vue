<template>
  <div>
       <div class="oheader">
        <span class="title">分类列表</span>
        <div>
          <el-button  type="success" icon="el-icon-plus" >更新排序 </el-button>
          <el-button  type="success" icon="el-icon-plus" >新建分类 </el-button>
        </div>
      </div>
      

    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;margin-top:20px;">
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="类别名称">
      </el-table-column>
      <el-table-column
        prop="par"
        label="所属父类">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序">
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            size="mini">添加子类</el-button>
          <el-button
            size="mini">编辑</el-button>
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
        tableData: [{
          id: '4',
          name: '首页广告位',
          par: '无父类',
          sort:'1'
        }]
      }
    }
   
  }
</script>
<style lang="scss" scoped>
</style>