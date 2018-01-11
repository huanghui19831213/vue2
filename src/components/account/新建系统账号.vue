<template>
  <div  class="mt20">
    <div class="tr mb20"><el-button   icon="el-icon-arrow-left" @click="goBack()">返回</el-button></div>
    <el-row> 
      <el-col :span="12">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item label="负责人" prop="administrator">
              <el-input v-model="ruleForm.administrator"></el-input>
            </el-form-item>
            <el-form-item label="所在部门" prop="department">
              <el-input v-model="ruleForm.department"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="tel">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="iphone">
              <el-input v-model="ruleForm.iphone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail">
              <el-input v-model="ruleForm.mail"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="states">
               <el-radio-group  v-model="ruleForm.states">
                  <el-radio :label="1">正常</el-radio>
                  <el-radio :label="2">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="goBack('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
      </el-col>
    </el-row>
  </div>
  
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
          administrator: '',
          department: '',
          tel: '',
          iphone: '',
          mail: '',
          states:1
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          administrator: [
            { type: 'date', required: true, message: '请输入负责人', trigger: 'blur' }
          ],
          department: [
            { type: 'date', required: true, message: '请输入部门', trigger: 'blur' }
          ],
          tel: [
            { type: 'array', required: true, message: '请输入电话', trigger: 'blur' }
          ],
          iphone: [
            { required: true, message: '请输入手机', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goBack(formName) {
        // this.$refs[formName].resetFields();
        this.$router.go(-1) 
      }
    }
  }
</script>

<style>
 
</style>