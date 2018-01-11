<template>
    <div>
      <quill-editor v-model="content"></quill-editor>
      <el-button type="primary">保存</el-button>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        content: '亲爱的雇员：<br>如有任何问题，请拨打热线电话400-889-4545。<br>人工坐席服务时间：工作日8:30~17:00。',
        editorOption: {
        }
      }
    }
   
  }
</script>
<<style lang="scss" scoped>
  .wrapper div{
    background:#fff;
    padding:20px;
    button{
      margin-left:20px;
    }
  }
</style>