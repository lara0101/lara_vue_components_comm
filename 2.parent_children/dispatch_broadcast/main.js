//main.js
import Vue from 'vue'
import parent from './parent'

//在Vue的原型上添加$dispatch方法，通过this.$dispatch调用
Vue.prototype.$dispatch = function (eventName, params) {
    let parent = this.$parent;
    while (parent) {
        parent.$emit(eventName, params);
        parent = parent.$parent;
    }
};

//在Vue的原型上添加$broadcast方法，通过this.$broadcast调用
Vue.prototype.$broadcast = function (eventName, params) {
    //获取当前组件下所有的子孙组件,递归调用
    const boradcast = children => {
        children.forEach(child => {
            child.$emit(eventName, params);
            if (child.$children) {
                boradcast(child.$children);
            }
        });
    }
    boradcast(this.$children);
};

new Vue({
    render: h => h(parent)
}).$mount("#app")
