<template>
  <div>
    <div class="oheader">
        <span class="title">用户详细资料</span>
        <el-button @click="$router.go(-1) " type="success" icon="el-icon-arrow-left" >返回</el-button>
    </div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="400">
      <el-button type="text" @click="$router.push({'path':'/labelManager'})">管理标签</el-button>
       <el-checkbox-group v-model="checkList" v-if="title!='修改分组'">
        <el-checkbox label="0" >射手座</el-checkbox>
        <el-checkbox label="1">处女座</el-checkbox>
        <el-checkbox label="2">天秤座</el-checkbox>
        <el-checkbox label="3">白羊座</el-checkbox>
        <el-checkbox label="4">金牛座</el-checkbox>
        <el-checkbox label="5">摩羯座</el-checkbox>
        <el-checkbox label="6">狮子座</el-checkbox>
        <el-checkbox label="7">狮子座</el-checkbox>
        <el-checkbox label="8">水瓶座</el-checkbox>
        <el-checkbox label="9">双鱼座</el-checkbox>
        <el-checkbox label="10">双子座</el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group v-model="checkList" v-else>
        <el-checkbox label="0" >积极用户</el-checkbox>
        <el-checkbox label="1">活跃用户</el-checkbox>
        <el-checkbox label="2">热情用户</el-checkbox>
        <el-checkbox label="3">新创建分组</el-checkbox>
        <el-checkbox label="4">尝试分组</el-checkbox>
        <el-checkbox label="5">工会G分组</el-checkbox>
        <el-checkbox label="6">默认分组</el-checkbox>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    
    <div class="table-warpper">
       <ul class="tableOne">
         <li v-for="(item,index) in tableData" :key="index">
           <img :src='item.logo'/>
           <div class="info">
              <b>{{item.name}}</b>
              <span>信息状态：{{item.state}}</span>
              <div class="icon-plus">用户标签:<div @click="modfied('修改标签')"><i class="el-icon-plus" ></i>添加标签</div></div>
           </div>
           <div class="operation">
              <span @click="modfied('修改分组')">所在分组：<span class="grouptype">{{item.group}}</span><i class="el-icon-arrow-down"></i></span>
              <div>
                <el-button @click="seeUserMessage">查看消息</el-button>
              </div>
           </div>
         </li>
       </ul>
    </div>

    <div class="info-list mt20">
      <div class="title">微信信息 <el-button type="text">同步微信信息</el-button></div>
      <ul>
        <li><label>性别：</label>男</li>
        <li><label>国家：</label>中国</li>
        <li><label>地区：</label>上海-宝山</li>
        <li><label>语言：</label>中文</li>
      </ul>
      <div class="title">会员位置记录 </div>
      <span class="f12">最近获取位置：暂无记录</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title:"",
        checkList:[],
        dialogVisible: false,
        tableData: [{
          id:1,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组'
        }]
      }
    },
   
    methods: {
      modfied(e){
          this.title=e;
          this.dialogVisible = true;
          console.log(this.checkModel)
      },
      seeUserMessage(){
        this.$router.push({'path':'/userMessage/'+this.$route.params.id})
      }
    }
  }
 
</script>
<style lang="scss" scoped>

   
 .table-warpper {
   background:#fff;
   padding:20px 0px;
   li{
     display: flex;
     font-size:14px;
   }
   img{
     width:80px;
     height:80px;
     margin-left:20px;
     margin-right:20px;
   }
   .info{
     color:#999;
     flex:1;
     &>*{
       display:block;
       line-height:26px;
     }
     div{display:inline;}
     i{
       color:#67c23a;
       font-weight:bolder;
     }
     .icon-plus{
       cursor: pointer;
       div{
         color:#67c23a;
       }
     }
   }
   .operation{
     width:240px;

     i{
       color:#67c23a;
       margin-left:10px;
       font-weight:bolder;
     }
     span{
       padding-left:6px;
       cursor: pointer;
     }
     div{
       margin-top:20px;
     }
   }
   b{
     font-size:14px;
     color:#333;
   }
 }
 .el-checkbox-group label{
   margin-left:0px;
   width:50%;
 }
 .grouptype,.date{
   color:#999;
 }
 .tableTwo img{
   width:50px;
   height:50px;
 }
 .info-list {
   background:#fff;
   padding:20px 20px 40px 20px ;
   .title{
     font-size:14px;
     height: 48px;
     font-weight:bolder;
     padding-bottom:6px;
     margin-bottom:14px;
     border-bottom:1px solid #e6e6e6;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ul{
     margin-bottom:30px;
     overflow:hidden;
   }
   li{
     float: left;
     width:100%;
     font-size:12px;
     line-height:30px;
   }
   label{
     width:120px;
     display: inline-block;
   }
 }
</style>


