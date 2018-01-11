<template>
  <div>
    <div class="oheader">
        <span class="title">系统账号列表</span>
        <div>
          <el-button type="success" @click="add">新建账号</el-button>
          <el-button @click="prohibit" :disabled="disabled?true:false">禁用选中</el-button>
        </div>
    </div>
    <el-table
    border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="40">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="data"
        label="最后操作时间">
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            size="mini"  @click="editor(scope.row)">编辑</el-button>
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
        disabled:false,
        visible:false,
        tableData: [{
          username: 'department10',
          name: '郝泳林',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department9',
          name: '蒋丹桦',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department8',
          name: '沈忱',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department7',
          name: '顾沈云',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department6',
          name: '郁骏',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department5',
          name: '娄晓蓉',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department4',
          name: '王晟',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department3',
          name: '申渊超',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department2',
          name: '孙舒',
          state: '正常',
          data:'2017/11/8 14:05:35'
        },{
          username: 'department1',
          name: '范菁',
          state: '正常',
          data:'2017/11/8 14:05:35'
        }]
      }
    },
    methods: {
      add(){
        this.$router.push({"path":"/addZh"})
      },
      editor(e){
        console.log(e,1223)
        this.$router.push({"path":"/editorZh"})
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val)
      },
      prohibit(){
        if(!this.multipleSelection){
            this.disabled=true;
            this.$notify.error({
                      message: '请选择需要禁用的条目',
                      showClose: false
            });
            setTimeout(()=>{
                this.disabled=false;
            },3000)
        }else{
          this.visible=true
        }
      }
    }
  }
</script>

<style lang="scss">
  
</style>