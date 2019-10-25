//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    dataB: '',
    dataC: ''
}

const mutations = {
    setDataB(state, data) {
        // 将compA组件的数据存放于state
        state.dataB = data
    },
    setDataC(state, data) {
        // 将compB组件的数据存放于state
        state.dataC = data
    }
}

export default new Vuex.Store({
    state,
    mutations
})
