<template>
    <div class="container-layout">
      <div class="left"> 
        <div class="container-layout">
          <el-menu  :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF"
            :unique-opened="true"  class="el-menu-vertical-demo"  mode="vertical"  :default-active="$route.path" >
            <silder-item :routes="router"></silder-item>
          </el-menu>
       </div>
      </div>
      <div class="right"> 
          <div class="top">
              <i class="el-icon-menu" @click="menuChange"></i>
               <el-breadcrumb class="app-breadcrumb" separator="/">
                  <transition-group name="list" v-if='levelList.length>0'>
                    <el-breadcrumb-item  v-for="(item,index)  in levelList" :key="item.path" >
                        <span v-if='index==levelList.length-1' class="no-redirect">{{item.name}}</span>
                        <span v-else >{{item.name}}</span>
                    </el-breadcrumb-item>
                  </transition-group>
                  <div v-else>中智e家</div>
                </el-breadcrumb>
          </div>
          <!-- <div class="tab" v-if='levelList'>
               <span  class="activeTab">{{$route.name}}<i class="el-icon-close"></i></span>
          </div> -->
          <div class="wrapper">
            <router-view></router-view>
          </div>
      </div>
    </div>

</template>

<script>
  import SilderItem from './silder/index.vue'
  
  export default {
    components: { SilderItem },
    data() {
      return {
          router:[],
          isCollapse: false,
          levelList:null,
          tab:[],
          oIndex:null
      };
    },
    created () {
      this.$router.options.routes.map((e,i)=>{
          if(e.isRoot==true&&!e.hiden){
            this.router.push(e)
          }
        })
        this.getBreadcrumb();
    },

    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(keyPath);
      },
      menuChange(){
        this.isCollapse=!this.isCollapse;
      },

      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        this.levelList = matched
      },
      activeTab(i){
        this.oIndex=i;
      }
    }
  };
</script>

<style lang="scss" >
  .container-layout{
    display: flex;
    height:100%;
    .left  {
      //width:200px;
      min-height:100%;
    }
    .right{
      flex:1;
      min-height: 100%;
      overflow:auto;
    }
    .top{
        background:#fff;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content:flex-start;
        border-bottom:1px solid #e6e6e6;
        i{
          font-size:24px;
          padding-left:20px;
          padding-right:20px;
          cursor: pointer;
        }
    }
    
    .wrapper{
      padding:20px;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

    // .el-submenu .el-menu-item{
    //   text-align:left;
    // }
    // .el-menu{
    //   overflow:hidden;
    //   width:200px;
    // }
  }
  .el-menu-vertical-demo.el-menu--collapse{
    .el-icon-arrow-right,.el-submenu__title>span, .submenu-title-noDropdown span{
      display:none;
    }
  }
  .tab {
      background: #fff;
      height: 34px;
      border-bottom: 1px solid #d8dce5;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
      span{
          display: inline-block;
          position: relative;
          height: 26px;
          line-height: 26px;
          border: 1px solid #d8dce5;
          color: #495060;
          background: #fff;
          padding: 0 8px;
          font-size: 12px;
          margin-left: 5px;
          margin-top: 4px;
          cursor: pointer;
      }

      .activeTab{
        background:#42b983;
        color:#fff;
      }
      i{
        padding-left:6px;
      }
    }
    .list-leave-active{
      display:none;
    }
    .list-enter-active, .list-leave-active {
      
      transition: opacity 1s ease-in;
    }
    .list-enter, .list-leave-to{
      opacity: 0;
      transform: translateY(30px);
    }
</style>
