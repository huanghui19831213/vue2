<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <el-button  type="success" icon="el-icon-plus" >新建规则</el-button>
      </div>
      <div>
        <el-select v-model="state" placeholder="请选择状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="type" placeholder="请选择回复类型">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      

    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;margin-top:20px;">
      <el-table-column
        prop="name"
        label="规则名称">
      </el-table-column>
      <el-table-column
        prop="iName"
        label="关键词">
      </el-table-column>
      <el-table-column
        prop="type"
        label="回复类型">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            size="mini">编辑</el-button>
          <el-button
            size="mini">禁用</el-button>
          <el-button
            size="mini">设置权限</el-button>
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
        state:'',
        options: [{
          value: '1',
          label: '所有状态'
        }, {
          value: '2',
          label: '启用'
        }, {
          value: '3',
          label: '禁用'
        }],
        type:'',
        options2:[{
          value: '1',
          label: '所有回复类型'
        }, {
          value: '2',
          label: '文本'
        }, {
          value: '3',
          label: '图片'
        },{
          value: '4',
          label: '语音'
        }, {
          value: '5',
          label: '视频'
        }, {
          value: '6',
          label: '单图文'
        },{
          value: '7',
          label: '多图文'
        }, {
          value: '8',
          label: '模块'
        }],
        tableData: [{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        },{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        },{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        },{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        },{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        },{
          name: 'fhr',
          iName: '测试',
          type: '文本',
          state:'启用'
        }]
      }
    }
   
  }
</script>
<style lang="scss" scoped>
</style>