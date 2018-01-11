<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <div>
          <el-button  type="success" icon="el-icon-plus">新建活动</el-button>
        </div>
      </div>
      
      <el-input  placeholder="搜索..." prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>

      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%" class="mt20">
          <el-table-column
            prop="title"
            label="活动标题">
          </el-table-column>
          <el-table-column
            prop="name"
            label="活动名称">
          </el-table-column>
          <el-table-column
            prop="type"
            label="活动类型">
          </el-table-column>
          <el-table-column
            prop="sDate"
            width="86"
            label="开始时间">
          </el-table-column>
          <el-table-column
            prop="eDate"
            width="86"
            label="结束时间">
          </el-table-column>
          <el-table-column
            prop="cDate"
            width="86"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column 
            width="440"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"  >编辑</el-button>
              <el-button
                size="mini"  >关闭</el-button>
              <el-button
                size="mini">删除</el-button>
              <el-button
                size="mini"  >查看报名雇员</el-button>
              <el-button
                size="mini"  >活动签到二维码</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
         tableData: [{
          title: '飞扬吧！棒球少年~中智亲子棒球家庭日火热招募中！',
          name: '	飞扬吧！棒球少年~中智亲子棒球家庭日火热招募中！',
          type:'	雇员活动			',
          sDate: '	2017/5/15 14:46:47',
          eDate:'2017/5/20 14:46:55',
          cDate: '2017/6/27 14:52:42',
          state:'已开启'
        },
        {
          title: '飞扬吧！棒球少年~中智亲子棒球家庭日火热招募中！',
          name: '	飞扬吧！棒球少年~中智亲子棒球家庭日火热招募中！',
          type:'	雇员活动			',
          sDate: '	2017/5/15 14:46:47',
          eDate:'2017/5/20 14:46:55',
          cDate: '2017/6/27 14:52:42',
          state:'已开启'
        }]
      }
    }
  
  }
</script>
<style lang="scss" scoped>
  .el-button+.el-button{
    margin-left:3px;
  }
  .title-Input{
    width:auto;
  }
  .list{
    li{
      border:1px solid #e4e7ed;
      background:#fff;
      display:inline-block;
      margin:6px;
      width:235px;
    }
    img{
      width:215px;
      height:190px;
      padding:10px;
    }
    .title{
      font-size:14px;
      margin:0px 10px;
      padding-top:10px;
      padding-bottom:10px;
      border-top:1px solid #e4e7ed;
    }
    .icon{
      background:#eee;
      padding:6px 10px;
      line-height:30px;
      input{
        width: 35px;
        height: 20px;
        text-align: center;
      }
      .state{float:right;font-size:14px;}
    }
    i{
      font-size:18px;
      margin-right:6px;
      cursor: pointer;
    }
  }
</style>