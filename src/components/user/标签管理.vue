<template>
  <div>
    <el-dialog title="新建标签" :visible="dialogFormVisible?true:false">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
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
          <el-button @click="dialogFormVisible = true" type="success" icon="el-icon-plus" >新建标签</el-button>
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
            size="mini">重命名</el-button>
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
        dialogFormVisible: false,
        formLabelWidth: '120px',
        tableData: [{
          name: '巨蟹座'	,
          date: '2015/11/17 10:11'
        },{
          name: '双子座',
          date: '2015/11/17 10:11'
        },{
          name: '双鱼座',
          date: '2015/11/17 10:11'
        },{
          name: '水瓶座',
          date: '2015/11/17 10:11'
        },{
          name: '狮子座',
          date: '2015/11/17 10:11'
        },{
          name: '摩羯座',
          date: '2015/11/17 10:11'
        },{
          name: '金牛座',
          date: '2015/11/17 10:11'
        },{
          name: '白羊座',
          date: '2015/11/17 10:11'
        },{
          name: '天秤座',
          date: '2015/11/17 10:11'
        },{
          name: '处女座',
          date: '2015/11/17 10:11'
        },{
          name: '射手座',
          date: '2015/11/17 10:11'
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