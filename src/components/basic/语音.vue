<template>
  <div>
    <div class="oheader">
        <span class="title">语音列表</span>
        <div>
          <el-button type="success" icon="el-icon-plus" >新建语音</el-button>
        </div>
    </div>
    <div>
        <el-select  placeholder="请选择分组">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker
          align="right"
          type="date"
          placeholder="按时间筛选">
        </el-date-picker>


        <el-input
          placeholder="请输入标题"
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>
    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange" class="mt20">
      <el-table-column
        prop="title"
        label="语音标题">
      </el-table-column>
      <el-table-column
        prop="group"
        label="所属分组">
      </el-table-column>
      <el-table-column label="预览" width="80">
        <template slot-scope="scope">
          <i class="el-icon-caret-right"></i>
        </template>
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
         options: [{
          value: '1',
          label: '所有分组'
        }, {
          value: '2',
          label: '默认分组'
        }, {
          value: '3',
          label: '雇员活动'
        }, {
          value: '4',
          label: '精彩活动'
        }],
        tableData: [{
          title: '语音新建',
          group: 'test',
          data: '2015/11/26 14:06',
        },{
          title: '语音新建',
          group: 'test',
          data: '2015/11/26 14:06',
        },{
          title: '语音新建',
          group: 'test',
          data: '2015/11/26 14:06',
        },{
          title: '语音新建',
          group: 'test',
          data: '2015/11/26 14:06',
        },{
          title: '语音新建',
          group: 'test',
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