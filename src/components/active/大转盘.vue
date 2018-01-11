<template>
  <div>
   

    <div class="oheader">
        <span class="title">大转盘列表</span>
        <div class="search">
          <el-input
            placeholder="搜索..."
            prefix-icon="el-icon-search" width="100">
          </el-input>
          <el-button  type="success" icon="el-icon-plus" >新建大转盘</el-button>
        </div>
    </div>
    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%">
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="开始时间">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="link"
        label="复制链接地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini">查看问卷</el-button>
          <el-button
            size="mini">编辑问卷</el-button>
          <el-button
            size="mini">编辑选项</el-button>
          <el-button
            size="mini">发布</el-button>
          <el-button
            size="mini">查看投票结果</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      
    }
  }
</script>