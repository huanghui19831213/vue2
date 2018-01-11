<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}列表</span>
        <div>
          <el-button  type="success" >更新排序</el-button>
          <el-button  type="success" icon="el-icon-plus">添加产品</el-button>
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
          placeholder="搜索..."
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
            prop="name"
            label="产品名称">
          </el-table-column>
          <el-table-column
            width="90"
            prop="label"
            label="标签">
          </el-table-column>
          <el-table-column
            width="160"
            label="封面图片">
            <template slot-scope="scope" class="imgDiv">
                <div class="oImg"><img :src="scope.row.pic" width="100%"/></div>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="添加时间">
          </el-table-column>
          <el-table-column
            prop="sort"
            label="排序">
          </el-table-column>
          <el-table-column
            prop="qiyong"
            label="是否启用">
          </el-table-column>
          <el-table-column 
            width="140"
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini"  >编辑</el-button>
              <el-button size="mini">删除</el-button>
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
          name: '全球领导力',	
          label: '游学	',
          pic:require('../../images/201608311608519157.png'),
          date: '2016/8/31 16:04:51',
          sort:'99',
          qiyong: '是'
        },{
          name: '硅谷科技与创新',	
          label: '游学',
          pic:require('../../images/201608311608519157.png'),
          date: '2016/8/31 16:04:51',
          sort:'99',
          qiyong: '是'
        }]
      }
    },
    methods:{
    }
  
  }
</script>
<style lang="scss" scoped>
  .el-button+.el-button{
    margin-left:3px;
  }
  .title-Input{
    width:auto;
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
  .oImg{
    max-height:60px;
    overflow:hidden;
  }
</style>