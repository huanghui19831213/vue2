let state = {
    count:10
};

const mutations = {
    add(context){
        context.count++
    },
    decrease(context){
        context.count--
    }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    add(add){
        add.commit('add')
    },
    decrease(decrease){
        decrease.commit('decrease')
    },
    oddAdd({commit,state}){
        if (state.count % 2 === 0) {
            commit('add')
        }
    }
};

// 返回改变后的数值
const getters = {
    count(context){
        return context.count
    },
    getOdd(context) {
        return context.count % 2 === 0 ? '偶数' : '奇数'
    }
};

export default {
    state,
    mutations,
    getters,
    actions
  }
  