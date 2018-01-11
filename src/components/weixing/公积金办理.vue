<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <el-input
            placeholder="搜索"
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
            label="雇员ID	">
          </el-table-column>
          <el-table-column
            width="80"
            prop="name"
            label="雇员姓名">
          </el-table-column>
          <el-table-column
            prop="iphone"
            label="手机号码">
          </el-table-column>
          <el-table-column
            width="170"
            prop="sId"
            label="身份证号">
          </el-table-column>
          <el-table-column
            prop="type"
            label="办理方式">
          </el-table-column>
          <el-table-column
            prop="fac"
            label="新单位名称">
          </el-table-column>
          <el-table-column
            prop="accord"
            label="新单位公积金账号">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间">
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
          id: '17D2946',
          name: '杨勇',
          iphone:'13918148315',
          sId:'430321198209041554',
          type:'新单位',
          fac:'安信证券股份有限公司上海浦西分公司',
          accord:'886392225205',
          date:'2018/1/9 12:56:15'
        },{
          id: '17D2946',
          name: '杨勇',
          iphone:'13918148315',
          sId:'430321198209041554',
          type:'新单位',
          fac:'安信证券股份有限公司上海浦西分公司',
          accord:'886392225205',
          date:'2018/1/9 12:56:15'
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