<template>
  <div>
       <div class="oheader">
        <span class="title">{{$route.name}}</span>
        <div>
          <el-button  type="success">从微信平台导入图文消息</el-button>
          <el-button  type="success" icon="el-icon-plus" >新建多图文消息</el-button>
        </div>
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
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
          </div>
        </li>


        <li>
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
          </div>
        </li>

        <li>
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
          </div>
        </li>


        <li>
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
          </div>
        </li>

        <li>
          <div class="content">
            <div class="img"><img src="../../images/img1.jpg"/></div>
            <a class="title">中智特惠丨冯宪珍、韩童生演绎爱情喜剧《办公室的故事》，最高45折！限时热购中</a>
          </div>
          <ul>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
            <li>
              <a>前方有剧透丨2018中智艺术季火热来袭，限时预售开始啦！</a>
              <img src="../../images/img1.jpg"/>
            </li>
          </ul>
          <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            <a>二维码预览</a>
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
 
  .list{
    &>li{
      background:#fff;
      display:inline-block;
      margin:6px;
      width:300px;
      height:370px;
      border:1px solid #e4e7ed;
      position: relative;
    }
    .content{
      width:100%;
      height: 180px;
      overflow:hidden;
      position: relative;
      img{
        width:100%;
      }
      .title{
          position: absolute;
          bottom: 0px;
          left: 0px;
          color:#fff;
          z-index: 3;
          background:rgba(0,0,0,.5);
          margin: 0;
          font-size:14px;
          padding:10px 16px;
      }
    }
    ul{
      padding:10px 16px;
      height: 136px;
      overflow:hidden;
      li{
        padding-top:10px;
        padding-bottom:10px;
        display: flex;
        border-bottom:1px solid #e4e7ed;
      }
      img{
        height:70px;
        margin-left:10px;
      }
    }
    .icon{
      position: absolute;
      left: 0px;
      bottom:0px;
      background:#eee;
      width:100%; 
      padding-top:6px;
      padding-bottom:6px;
      i{margin-left:10px;}
      a{
        float:right;
        margin-right:10px;
        font-size:12px;
        }
    }
  }

  .title-Input{
    width:auto;
    display:inline-block;
    float:right;
  }
</style>