<template>
    <div>
      <div class="oheader">
            <span class="title">公众号信息</span>
      </div>
      <div class="content">
        <img src="../../images/logo.jpg" class="logo"/>
        <ul>
           <li>
             <label>公众号名称：</label>
             <span>中智e家</span>
          </li>
           <li>
             <label>公众号类型：</label>
             <span>认证后服务号</span>
          </li>
           <li>
             <label>公众号原始ID：</label>
             <span>gh_6d897dfd4fb0</span>
          </li>
           <li>
             <label>微信号：</label>
             <span>中智e家</span>
          </li>
           <li>
             <label>默认接口地址：</label>
             <span>https://weixin.ciicsh.com/weixinapi.aspx?t=216042058bb74bb884d3a559998709f9</span>
          </li>
           <li>
             <label>默认Token：</label>
             <span>822D9862A6 </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
 .content{
   display:flex;
   padding:20px;
   border:1px solid #e6e7ec;
   background:#fff;
   .logo{
      width:160px;
      height:160px;  
      border-right:1px solid #e6e7ec;
      padding-right:30px;
      margin-right:30px;
   }
   li{
     list-style:none;
     padding: 0 0 8px;
     font-size: 14px;
     display:flex;
   }
   label{
     width:160px;
     color:#999;
   }
   span{
     flex:1
   }
 }
</style>
