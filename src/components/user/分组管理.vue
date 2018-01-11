<template>
  <div>
    <el-dialog :title="state=='add'?'新增用户分组':'编辑用户分组['+editorName+']'" :visible="dialogFormVisible?true:false">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="分组名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>

    <div class="oheader">
        <span class="title"></span>
        <div class="search">
          <el-input
            placeholder="搜索名称..."
            prefix-icon="el-icon-search" width="100">
          </el-input>
          <el-button @click="add" type="success" icon="el-icon-plus" >新建分组</el-button>
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
        label="标签名称">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"  @click="editor(scope.row)">重命名</el-button>
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
        state:'add',
        dialogFormVisible: false,
        formLabelWidth: '120px',
        tableData: [{
          name: '工会G分组'	,
          date: '2015/11/17 10:11'
        },{
          name: '尝试分组',
          date: '2015/11/17 10:11'
        },{
          name: '新创建分组',
          date: '2015/11/17 10:11'
        },{
          name: '热情用户',
          date: '2015/11/17 10:11'
        },{
          name: '活跃用户',
          date: '2015/11/17 10:11'
        },{
          name: '积极用户',
          date: '2015/11/17 10:11'
        }]
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible=false
           console.log(this.dialogFormVisible)
          } else {
            console.log('error submit!!');
           return false;
          } 
        });
      },
      add(){
        this.dialogFormVisible = true
        this.state="add"
        this.form.name=""
      },
      editor(val){
        this.dialogFormVisible=true
        this.state="editor"
        this.form.name=this.editorName=val.name
        console.log(this.dialogFormVisible)
        
      }
    }
  }
</script>