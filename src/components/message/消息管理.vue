<template>
  <div>
     <div class="oheader">
        <span class="title">{{$route.name}}</span>
      </div>
      <div>
        <el-select v-model="state" placeholder="请选择状态">
          <el-option>
          </el-option>
        </el-select>

        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-input
          placeholder="搜素名称..."
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>
    <div class="table-warpper">
       <ul>
         <li v-for="(item,index) in tableData" :key="index">
           <img :src='item.logo'/>
           <div class="info">
              <b>{{item.name}}</b>
              <span>{{item.desc}}</span>
           </div>
           <div class="operation">
              <span>{{item.data}}</span><span class="state">{{item.state}}</span>
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
        tableData: [{
          id:1,
          name:'黄悦悦 Leo',
          logo: require('../../images/logo.jpg')	,
          state: '未回复',
          desc:'你好',
          data:'2018/1/9 10:35:02'
        },{
          id:1,
          name:'黄悦悦 Leo',
          logo: require('../../images/logo.jpg')	,
          state: '未回复',
          desc:'你好',
          data:'2018/1/9 10:35:02'
        },{
          id:1,
          name:'黄悦悦 Leo',
          logo: require('../../images/logo.jpg')	,
          state: '未回复',
          desc:'你好',
          data:'2018/1/9 10:35:02'
        },{
          id:1,
          name:'黄悦悦 Leo',
          logo: require('../../images/logo.jpg')	,
          state: '未回复',
          desc:'你好',
          data:'2018/1/9 10:35:02'
        }]
      }
    }
  }
 
</script>
<style lang="scss" scoped>
    .title-Input{
        width:auto;
        display:inline-block;
        float:right;
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
     span{
       color:#666;
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
       padding-left:10px;
       cursor: pointer;
       font-size:12px;
     }
     .state{
       color:#e20000;
       padding-left:10px;
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
