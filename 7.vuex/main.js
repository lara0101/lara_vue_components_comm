//main.js 入口文件
import Vue from 'vue'
import compA from './compA'
import store from './store';  //使用store

Vue.config.productionTip = false;
new Vue({
    store,  //关联store
    render: h => h(compA)
}).$mount("#app")
