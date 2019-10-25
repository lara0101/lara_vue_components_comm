<!--compC.vue-->
<template>
    <div>
        <p>{{dataC}}</p>
    </div>
</template>
<script>
    import { bus } from './eventBus'
    export default {
        name: 'compC',
        data() {
            return {
                dataC: '我是组件compC中的数据'
            }
        },
        methods: {
            handleEventC() {
                //接收事件
                bus.$on('on-msg', val => {
                    this.dataC = val;
                })
            }
        },
        mounted() {
            this.handleEventC();
        },
        beforeDestroy() {
            bus.$off('on-msg', {})//移除事件监听
        },
    }
</script>