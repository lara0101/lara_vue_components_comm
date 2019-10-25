<!--parent.vue-->
<template>
    <div>
        <p>{{pData}}</p>
        <child></child>
        <button @click=changeData>改变parentData</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import child from "./child"
    export default {
        name: 'parent',
        components: {
            child
        },
        data() {
            return {
                pData: '我是父组件数据'
            }
        },
        //初始用法        
        // provide() {
        //     return {
        //         parentData: this.pData,//该方式绑定的数据不是响应式的，即祖先组件中parentData变化，后代组件中不会跟着变
        //     }
        // },
        // methods: {
        //     changeData() {
        //         this.pData = "我是改变以后的父组件数据";
        //     }
        // }

        //方法一        
        // provide() {
        //     return {
        //         parentData: this,//provide祖先组件的实例
        //     }
        // },
        // methods: {
        //     changeData() {
        //         this.pData = "我是改变以后的父组件数据1";
        //     }
        // }

        //方法二       
        provide() {
            this.parentData = Vue.observable({
                pData: this.pData
            });
            return {
                parentData: this.parentData
            }
        },
        methods: {
            changeData() {
                this.parentData.pData = "我是改变以后的父组件数据2";
            }
        }
    }
</script>