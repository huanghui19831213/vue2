
import Layout from '@/components/Layout'
import Zh from '@/components/account/系统账号'
import AddZh from '@/components/account/新建系统账号'

import SysManage from '@/components/basic/被添加自动回复' 
import AutoManage from '@/components/basic/消息自动回复' 
import ImportantManage from '@/components/basic/关键词自动回复' 
import CustomMenu from '@/components/basic/自定义菜单'
import Pic from '@/components/basic/图片库'
import Audio from '@/components/basic/语音'
import Video from '@/components/basic/视频'
import OnePic from '@/components/basic/单图文消息'
import morePic from '@/components/basic/多图文消息'
import group from '@/components/basic/素材分组'
import TemplateManage  from '@/components/basic/模板管理'
import templatePic  from '@/components/basic/模板图片素材'

import Labelmanagement from '@/components/user/标签管理'
import GroupManager from '@/components/user/分组管理'
import UserList from '@/components/user/用户列表'
import UserMessage from '@/components/user/用户消息记录'
import UserListInfo from '@/components/user/用户详情'

import Quest from '@/components/active/问卷投票'
import Card from '@/components/active/刮刮卡'
import Big from '@/components/active/大转盘'
import Egg from '@/components/active/砸金蛋'

import Message from '@/components/message/消息管理'

import UserTongji from '@/components/statistics/用户统计'
import MessageTongji from '@/components/statistics/消息统计'
import PicTongji from '@/components/statistics/图文统计'

import Advtype from '@/components/advertisement/广告位分类'
import AdvList from '@/components/advertisement/广告位列表'

import Job from '@/components/weixing/在职办理'
import Fund from '@/components/weixing/公积金办理'
import Service from '@/components/weixing/服务导航'
import Employee from '@/components/weixing/雇员活动'
import Material  from '@/components/weixing/材料类型'

import ClassManagement  from '@/components/welfare/分类管理'
import LabelManagement  from '@/components/welfare/标签管理'
import PhysicalExamination  from '@/components/welfare/体检'
import Guarantee  from '@/components/welfare/保障'
import Conduct  from '@/components/welfare/理财'
import Immigration  from '@/components/welfare/移民'
import StudyAbroad  from '@/components/welfare/留学'
import Visas  from '@/components/welfare/签证'
import Tourism  from '@/components/welfare/旅游'
import Studytour  from '@/components/welfare/游学'
import Training  from '@/components/welfare/培训'

import ModPassword  from '@/components/password/修改密码'

import Nofind from '@/components/other/404'
import Home from '@/components/other/home'
import Login from '@/components/other/Login'
import Keep from '@/components/other/keep'

const router=[{
  path: '',
  component: Layout,
  isRoot:true,
  hiden:true,
  children:[
    {path: '',hiden:'true',component: Home,meta: { requiresAuth: true }}
  ]
},{
      path: '/according',
      name: '账号管理',
      icon:'icon iconfont icon-daohang-caidan',
      component: Layout,
      isRoot:true,
      children:[
        {path: 'zh', name: '系统管理',component: Zh,meta: { requiresAuth: true }},
        {path: 'addZh', name: '新建账户',hiden:'true',component: AddZh,meta: { requiresAuth: true }},
        {path: 'editorZh', name: '编辑账户',hiden:'true',component: AddZh,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/basic',
      icon:'icon iconfont icon-liehang',
      name: '基础功能',
      isRoot:true,
      component: Layout,
      children:[
        {path: '/automaticReply', name: '自动回复',component:Keep,children:[
            {path: 'sysManage', name: '被添加自动回复',component: SysManage,meta: { requiresAuth: true }},
            {path: 'autoManage', name: '消息自动回复',component: AutoManage,meta: { requiresAuth: true }},
            {path: 'importantManage', name: '关键词自动回复',component: ImportantManage,meta: { requiresAuth: true }},
        ]},
        // {path: '/customMenu', name: '自定义菜单',component:CustomMenu ,meta: { requiresAuth: true }},
        {path: '/materialManagement', name: '素材管理',component: Keep,children:[
          {path: 'pic', name: '图片库',component: Pic,meta: { requiresAuth: true }},
          {path: 'audio', name: '语音',component: Audio,meta: { requiresAuth: true }},
          {path: 'video', name: '视频',component: Video,meta: { requiresAuth: true }},
          {path: 'onePic', name: '单图文消息',component: OnePic,meta: { requiresAuth: true }},
          {path: 'morePic', name: '多图文消息',component: morePic,meta: { requiresAuth: true }},
          {path: 'group', name: '素材分组',component: group,meta: { requiresAuth: true }},
        ]},
        {path: '/picture', name: '图文模板管理',component: Keep,children:[
          {path: 'templateManage', name: '模板管理',component: TemplateManage,meta: { requiresAuth: true }},
          {path: 'templatePic', name: '模板图片素材',component: templatePic,meta: { requiresAuth: true }}
        ]}
      ]
    },
    {
      path: '/users',
      name: '用户管理',
      icon:'icon iconfont icon-user',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'userlist', name: '用户列表',component: UserList,meta: { requiresAuth: true }},
        {path: 'userlabelManager', name: '标签管理',component:Labelmanagement,meta: { requiresAuth: true }},
        {path: 'groupManager', name: '分组管理',component: GroupManager,meta: { requiresAuth: true }},
        {path: 'userMessage/:id/', name: '用户消息记录',hiden:'true',component: UserMessage,meta: { requiresAuth: true }},
        {path: 'userListInfo/:id/', name: '用户详情',hiden:'true',component: UserListInfo,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/mes',
      // name: '消息管理',
      icon:'icon iconfont icon-xiaoxi',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'message', name: '消息管理',component: Message,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/tongji',
      name: '统计分析',
      isRoot:true,
      icon:'icon iconfont icon-bingzhuangtu',
      component: Layout,
      children:[
        {path: 'userTongji', name: '用户统计',component: UserTongji,meta: { requiresAuth: true }},
        {path: 'messageTongji', name: '消息统计',component: MessageTongji,meta: { requiresAuth: true }},
        {path: 'picTongji', name: '图文统计',component: PicTongji,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/active',
      name: '活动管理 ',
      icon:'icon iconfont icon-huodong',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'quest', name: '问卷/投票',component: Quest,meta: { requiresAuth: true }},
        // {path: '/card', name: '刮刮卡',component: Card,meta: { requiresAuth: true }},
        // {path: '/big', name: '大转盘',component: Big,meta: { requiresAuth: true }},
        // {path: '/egg', name: '砸金蛋',component: Egg,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/guanggao',
      name: '广告位管理 ',
      icon:'icon iconfont icon-guanggao',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'advtype', name: '广告位分类',component:Advtype,meta: { requiresAuth: true }},
        {path: 'advList', name: '广告位列表',component: AdvList,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/weixing',
      name: '微信管理 ',
      icon:'icon iconfont icon-weixin',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'job', name: '在职办理',component: Job,meta: { requiresAuth: true }},
        {path: 'fund', name: '公积金办理',component: Fund,meta: { requiresAuth: true }},
        {path: 'service', name: '服务导航',component: Service,meta: { requiresAuth: true }},
        {path: 'employee', name: '雇员活动',component: Employee,meta: { requiresAuth: true }},
        {path: 'material', name: '材料类型',component: Material,meta: { requiresAuth: true }}
      ]
    },
    {
      path: '/wfl',
      name: '微福利 ',
      isRoot:true,
      icon:'icon iconfont icon-fuli',
      component: Layout,
      children:[
        {path: 'classManagement', name: '分类管理',component: ClassManagement,meta: { requiresAuth: true }},
        {path: 'labelManagement', name: '标签管理 ',component: LabelManagement,meta: { requiresAuth: true }},
        {path: 'physicalExamination', name: '体检',component: PhysicalExamination,meta: { requiresAuth: true }},
        {path: 'guarantee', name: '保障',component: Guarantee,meta: { requiresAuth: true }},
        {path: 'conduct', name: '理财',component: Conduct,meta: { requiresAuth: true }},
        {path: 'immigration', name: '移民',component: Immigration,meta: { requiresAuth: true }},
        {path: 'studyAbroad', name: '留学',component: StudyAbroad,meta: { requiresAuth: true }},
        {path: 'visas', name: '签证',component: Visas,meta: { requiresAuth: true }},
        {path: 'tourism', name: '旅游',component: Tourism,meta: { requiresAuth: true }},
        {path: 'studytour', name: '游学',component: Studytour,meta: { requiresAuth: true }},
        {path: 'training', name: '培训',component: Training,meta: { requiresAuth: true }}
      ]
    },

    {
      path: '/password',
      icon:'icon iconfont icon-mima',
      // name: '修改密码',
      isRoot:true,
      component: Layout,
      children:[
        {path: 'modPassword', name: '修改密码',component: ModPassword,meta: { requiresAuth: true }}
      ]
    },
    {path: '/login', title:'login',name: 'login',component: Login},
    {path: '*', title:'NoFind',name: 'NoFind',component: Nofind}
  ]
export default router;
