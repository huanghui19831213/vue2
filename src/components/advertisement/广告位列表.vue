<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <div>
          <el-button  type="success" >更新排序</el-button>
          <el-button  type="success" icon="el-icon-plus" >新建广告位</el-button>
        </div>
      </div>
      <div>
        <el-select  placeholder="请选择分类">
          <el-option
            v-for="item in optionsType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select  placeholder="请选择状态">
          <el-option
            v-for="item in optionsState"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-input
          placeholder="搜素名称..."
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>

      <ul class="list mt20">
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <input type="text" value="1"/>
            <span class="state">已启用</span>
          </div>
        </li>
        <li>
          <img src="../../images/404.png"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <input type="text" value="1"/>
            <span class="state">已禁用</span>
          </div>
        </li>
      </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
         optionsType: [{
          value: '1',
          label: '所有分类'
        }, {
          value: '2',
          label: '首页广告位'
        }],

         optionsState: [{
          value: '1',
          label: '所有状态'
        }, {
          value: '2',
          label: '启用'
        }, {
          value: '3',
          label: '禁用'
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