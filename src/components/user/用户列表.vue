<template>
  <div>
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
    <div class="oheader">
        <span class="title"></span>
        <div class="search">
          <el-button  type="success"  >导入所有粉丝</el-button>
        </div>
    </div>
    <div class="content">
        <transition>
          <ul :class="isOpen ? 'active ' : ''">
              <li>
                <div>分组：</div>
                <span>积极用户</span><span>活跃用户</span> <span>热情用户</span><span> 新创建分组</span> <span>尝试分组</span><span> 工会G分组</span><span> 默认分组</span>
              </li>
              
              <li>
                <div>标签:</div>
                <span>射手座</span><span>处女座</span> <span>天秤座</span><span> 白羊座</span> <span>金牛座</span><span> 摩羯座</span><span> 狮子座</span><span> 水瓶座</span><span> 双鱼座</span><span> 双子座</span><span> 巨蟹座</span>
              </li>
              
              <li>
                <div>会员属性：</div>
                <span>注册会员</span><span>非注册会员</span> 
              </li>
              <li>
                <div>回复状态：</div>
                <span>已回复</span><span>未回复</span> <span>已过期</span><span> 未回复已过期</span> <span>暂无</span>
              </li>
              <li>
                <div>性别：</div>
                <span>男</span><span> 女 </span> <span>未知</span>
              </li>
              <li>
                <div>信息包含：</div>
                <span>手机  </span><span> 姓名 </span> <span>身份证</span>
              </li>
              <li>
                <div>用户昵称：</div>
                <el-input placeholder="用户昵称"></el-input>
              </li>
              <li>
                <div>关注时间：</div>
                <el-date-picker
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  default-value="2010-10-01">
                </el-date-picker>
              </li>
          </ul>
        </transition>
        <div  class="actBtn">
          <el-button @click="open" v-if="!isOpen" >展开</el-button>
          <el-button @click="open" v-if="isOpen" >收缩</el-button>
        </div>
    </div>
    <div class="btns">
      <div>
        <input type="checkbox" v-model="checkedAll" @change='handlerChange'/>全选
      </div>
      <div>
        <el-button @click="modfied('批量修改标签')">批量修改标签</el-button>
        <el-button @click="modfied('批量增加标签')">批量增加标签</el-button>
        <el-button @click="modfied('批量删除标签')">批量删除标签</el-button>
        <el-button @click="modfied('修改分组')">批量分组</el-button>
      </div>
    </div>
    <div class="table-warpper">
       <ul>
         <li v-for="(item,index) in tableData" :key="index">
           <input type="checkbox" v-model="checkModel" :value="item.id"/> 
           <img :src='item.logo'/>
           <div class="info">
              <b>{{item.name}}</b>
              <span>信息状态：{{item.state}}</span>
              <div class="icon-plus">用户标签:<div><i class="el-icon-plus"></i>添加标签</div></div>
           </div>
           <div class="operation">
              <span @click="modfied('修改分组')">所在分组：{{item.group}}<i class="el-icon-arrow-down"></i></span>
              <div>
                <el-button @click="seeUserMessage(item.id,item.state)" >查看消息</el-button>
                <el-button @click="seeUserInfo(item.id)">查看资料</el-button>
              </div>
           </div>
         </li>
       </ul>
       <el-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title:"",
        checkList: ['0'],
        dialogVisible: false,
        checkedAll:false,
        checkModel:[],
        isOpen:false,
        tableData: [{
          id:1,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组'
        },{
          id:2,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组'
        },{
          id:3,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组',
          checked: false
        },{
          id:4,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组',
          checked: false
        },{
          id:5,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组',
          checked: false
        },{
          id:6,
          name:'吴承蔚~招聘中',
          logo: require('../../images/logo.jpg')	,
          state: '暂无',
          group:'默认分组',
          checked: false
        }]
      }
    },
    watch: {
      checkModel:{
        handler(){
          if(this.checkModel.length==this.tableData.length){
            this.checkedAll=true
          }else{
            this.checkedAll=false;
          }
        }
      }
    },
    methods: {
      handlerChange(item){
        this.checkModel=[];
        if(this.checkedAll==true){
          this.tableData.forEach((e,i)=>{
            this.checkModel.push(i)
          })
        }
      },
      open(){
        this.isOpen=!this.isOpen;
      },
      modfied(e){
          this.title=e;
          this.dialogVisible = true;
          console.log(this.checkModel)
      },
      seeUserMessage(id,state){
        this.$router.push({"path":"/userMessage/"+id})
      },
      seeUserInfo(id){
        this.$router.push({"path":"/userListInfo/"+id})
      }
    }
  }
 
</script>
<style lang="scss" scoped>
   .actBtn{
     width:75px;
     margin:0 auto;
   }
   .btns{
     background:#fff;
     padding:12px 20px;
     margin-top:30px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom:1px solid #e4e7ed;
     input[type="checkbox"]{
       margin-right:6px;
     }
   }
 .content{
   background:#fff;
   div{
     width:120px;
   }
   div.el-input,div.el-date-editor{
     width:300px;
   }
   ul{
     transition:max-height 0.8s;
     max-height:132px;
     overflow: hidden;
    &.active{
      max-height:400px;
    }
   }
   li{
     font-size:14px;
     border-bottom:1px solid #e4e7ed;
     display: flex;
     padding:12px 20px;
   }
   span{
     display:inline-block;
     margin-right:20px;
   }
 }
 .table-warpper {
   background:#fff;
   padding:20px;
   li{
     display: flex;
     margin-bottom: 12px;
     border-bottom:1px solid #e4e7ed;
     padding-bottom:12px;
     font-size:14px;
   }
   img{
     width:80px;
     height:80px;
     margin-left:20px;
     margin-right:20px;
   }
   .info{
     flex:1;
     &>*{
       display:block;
       line-height:26px;
     }
     div{display:inline;}
     i{
       color:green;
       font-weight:bolder;
     }
     .icon-plus{
       cursor: pointer;
     }
   }
   .operation{
     width:240px;

     i{
       color:green;
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
   }
 }
 .el-checkbox-group label{
   margin-left:0px;
   width:50%;
 }
</style>
