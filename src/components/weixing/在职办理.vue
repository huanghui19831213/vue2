<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <div>
          <el-button  type="success" >自取地址管理</el-button>
        </div>
      </div>
      <div>
        
        <el-select  v-model="value"  placeholder="请选择分类">
          <el-option
            v-for="item in optionsType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
         <el-date-picker
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          default-value="2010-10-01">
        </el-date-picker>

        <el-input
          placeholder="搜索雇员编号/姓名/身份证/手机号"
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>

      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%" class="mt20">
          <el-table-column
            prop="id"
            label="雇员编号">
          </el-table-column>
          <el-table-column
            width="70"
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            width="170"
            prop="sId"
            label="身份证">
          </el-table-column>
          <el-table-column
            prop="iphone"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="date"
            label="提交日期">
          </el-table-column>
          <el-table-column
            prop="type"
            label="领取方式">
          </el-table-column>
          <el-table-column
            prop="sType"
            label="证明类型">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column width="200"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"  >完成</el-button>
              <el-button
                size="mini">查看快递地址</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        value: '',
         optionsType: [{
          value: '1',
          label: '所有分类'
        }, {
          value: '2',
          label: '在职证明'
        }, {
          value: '3',
          label: '离职证明'
        }, {
          value: '4',
          label: '收入证明'
        }],
         tableData: [{
          id: '2018-14A3055',
          name: '杨继香',
          sId:'14233019771128314X',
          iphone:'15935125289',
          date:'2018/1/9 14:41:59',
          type:'快递',
          sType:'离职证明',
          state:'受理中'
        },{
          id: '2018-14A3055',
          name: '杨继香',
          sId:'14233019771128314X',
          iphone:'15935125289',
          date:'2018/1/9 14:41:59',
          type:'快递',
          sType:'离职证明',
          state:'受理中'
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