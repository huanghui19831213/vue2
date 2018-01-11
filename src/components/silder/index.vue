<template>       
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hiden&&item.children" >


      <!-- <router-link v-if="item.children.length===1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{generateTitle(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link> -->
               <router-link v-if="item.children.length===1 " :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
                  <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
                    <i :class="item.icon"></i>
                    <span >{{item.children[0].name}}</span>
                  </el-menu-item>
                </router-link>
                <el-submenu  v-else :index="item.name||item.path" :key="item.name" >
                  <template slot="title" >
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <template v-for="child in item.children">
                        <!-- 三级菜单 -->
                         <sidebar-item  v-if="child.children" :routes="[child]" :key="child.path"></sidebar-item>

                         <router-link v-if="!child.hiden&&!child.children" :to="item.path+'/'+child.path" :key="child.name"   >
                            <el-menu-item :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
                        </router-link>
                  </template>
                </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    data() {
      return {
          router:[],
          isCollapse: false,
          levelList:null,
          tab:[],
          oIndex:null
      };
    },
    props: {
        routes: {
            type: Array
        }
    },
     methods: {
    }
  };
</script>


