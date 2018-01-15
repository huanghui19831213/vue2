<template>
  <div class="logo-container">
    <div class="demo-ruleForm">
      <div class="title">系统登录</div>
    <el-form  status-icon label-width="100px" class="form">
      <el-form-item label-width="0">
        <el-input placeholder="用户名/邮箱" class="elinput"></el-input>
      </el-form-item>
      <el-form-item  label-width="0">
        <el-input type="password" placeholder="密码"  class="elinput"></el-input>
      </el-form-item>
      <el-form-item label-width="0" class="yanzhengma">
        <el-input placeholder="验证码" class="elinput"></el-input><div class="yz">12345</div>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      submitForm() {
        localStorage.a="2222"
        this.$router.push({"path":"/"})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo-container{
    background:#2d3a4b;
    height:100%;
   .title{
     font-size:26px;
     text-align:center;
     font-weight:bolder;
     margin-bottom:30px;
     color:#eee;
   }
   .demo-ruleForm{
     display: flex;
     align-items: center;
     flex-direction:column; 
     position: relative;
     top:30%;
     height:100%;
   }
   .elinput {
      height: 60px;
      width:100%;
      >*{
        font-size:18px;
      }
    }

    .form{
      width:520px;
      button{
        width:100%;
        height:50px;
        font-size:18px;
      }
    }
  }
 
</style>





