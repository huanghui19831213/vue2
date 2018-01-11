<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <el-button  type="success" icon="el-icon-plus" >新建图片</el-button>
      </div>
      <div>
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
          placeholder="请输入标题"
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
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </div>
        </li>
        <li>
          <img src="../../images/img1.jpg"/>
          <div class="title">中秋单品封面.JPG</div>
          <div class="icon">
            <i class="el-icon-search"></i>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
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
    }
    i{
      font-size:18px;
      margin-right:6px;
      cursor: pointer;
    }
  }
</style>