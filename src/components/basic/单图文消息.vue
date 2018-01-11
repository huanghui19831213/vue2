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
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>

        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
        </li>
        <li>
          <h3 class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</h3>
          <div class="img"><img src="../../images/img1.jpg"/></div>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <div>
              <span>复制图文链接</span>
              <span>二维码预览</span>
            </div>
          </div>
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
      background:#fff;
      display:inline-block;
      margin:6px;
      width:300px;
      height:370px;
      border:1px solid #e4e7ed;
    }
    .img{
      padding:0px 16px 16px;
      height: 246px;
    }
    img{
      width:100%;
    }
    .title{
      font-size:16px;
      margin:0px 16px;
      padding-top:16px;
      padding-bottom:10px;
      line-height: 26px;
      height:40px;
      margin-bottom:10px;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
    }
    .icon{
      background:#eee;
      padding:6px 10px;
      div{
        float: right;
        font-size:14px;
        span{
          margin-left:10px;
          cursor: pointer;
        }
      }
    }
    i{
      font-size:18px;
      margin-right:6px;
      cursor: pointer;
    }
  }
</style>