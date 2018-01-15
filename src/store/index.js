import Vue from 'vue'
import Vuex from 'vuex'
import home from './module/home'
import tagsView from './module/targetView'
import getters from './getters'
Vue.use(Vuex)
// 这里定义初始值


export default new Vuex.Store({
    modules: {
        home,
        tagsView,
        getters
    }
})