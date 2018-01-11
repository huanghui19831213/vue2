<template>
  <div>
   

    <div class="oheader">
        <span class="title"></span>
        <div class="search">
          <el-input
            placeholder="搜索问卷内容..."
            prefix-icon="el-icon-search" width="100">
          </el-input>
          <el-button  type="success" icon="el-icon-plus" >新建调查问卷</el-button>
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
        label="标题">
      </el-table-column>
      <el-table-column
        width="130"
        label="链接">
        <template slot-scope="scope">
          <el-button
            size="mini">复制调用链接</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column label="操作" width="500">
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
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入标签名称', trigger: 'blur' },
            
            {max: 50, message: '长度不能超过50个字符', trigger: 'blur' }
          ],
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
        tableData: [{
          name: 'test'	,
          state: '未发布'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        },{
          name: 'test2',
          state: '已结束'
        }]
      }
    },
    methods: {
      submitForm(formName) {
        console.log(this.dialogFormVisible)
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            this.dialogFormVisible=false
          } else {
            console.log('error submit!!');
           return false;
          } 
        });
      },
    }
  }
</script>