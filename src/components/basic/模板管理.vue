<template>
  <div>
    <div class="oheader">
        <span class="title">模板列表</span>
        <div>
          <el-button type="success" icon="el-icon-plus" >新建分组</el-button>
        </div>
    </div>
    <div class="overflow">
       <el-select  placeholder="请选择分组">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker
          align="right"
          type="date"
          placeholder="按时间筛选">
        </el-date-picker>
        <el-input
          placeholder="搜索模板名称"
          prefix-icon="el-icon-search"  class="title-Input" >
        </el-input>
      </div>
    
    <ul>
      <li >
        <div class="wrapperContent">
          <img src="../../images/temp.jpg"/>
          <div class="content">
             <i class="icon iconfont">&#xe60e;</i>
             <span>设为默认模板</span>
          </div>
        </div>
        <em>基础模板2(系统模板)</em>
      </li>
      <li >
        <div class="wrapperContent">
          <img src="../../images/temp.jpg"/>
          <div class="content">
             <i class="icon iconfont icon-daohang-caidan"></i>
             <span>设为默认模板</span>
          </div>
        </div>
        <em>基础模板2(系统模板)</em>
      </li>
      <li class="active" >
        <div class="wrapperContent">
          <img src="../../images/temp.jpg"/>
          <div class="content">
             <i class="icon iconfont icon-daohang-caidan"></i>
             <span>设为默认模板</span>
          </div>
        </div>
        <em>基础模板2(系统模板)</em>
      </li>

    
    </ul>
  </div>

</template>

<script>
  export default {
    data() {
      return {
         options: [{
          value: '1',
          label: '所有分组'
        }, {
          value: '2',
          label: '默认分组'
        }, {
          value: '3',
          label: '雇员活动'
        }, {
          value: '4',
          label: '精彩活动'
        }],
        tableData: [{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
        },{
          title: '精彩活动',
          data: '2015/11/26 14:06',
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
  ul{
    margin-top:20px;
    .wrapperContent{
      background:#fff;
      border:1px solid #e4e7ed;
      padding-top:5px;
    }
    li{
      text-align:center;
      position:relative;
      float: left;
      margin-top:10px;
      margin-right:10px;
      width:240px;
      &.active{
        border-color:#1161be;
        div{
          background:#1161be;
          color:#fff;
        }
        span,i{
          color:#fff
        }
      }
    }
    image{
      width:230px;
      margin:0 auto;
    }
    li.active::after{
      content:"";
      position:absolute;
      z-index: 2;
      top: 0;
      right: 0;
      width: 109px;
      height: 92px;
      background: url(../../images/icon_defaultTemplate_01.png) 100% 0 no-repeat;
      pointer-events: none;
    }
    div.content{
      background: #eee;
      padding: 6px;
      overflow:hidden;
    }
    span,i{
      color:#333;
      font-size:14px;
      float:right;
      cursor: pointer;
    }
    i{float:left}
    em{
      padding-top:10px;
      font-size:14px;
      float:left;
      font-style: normal;
    }
  }
</style>