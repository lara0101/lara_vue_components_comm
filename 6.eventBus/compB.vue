<!--compB.vue-->
<template>
    <div>
        <p>compB：{{dataB}}</p>
        <button @click='handleEventB'>点击emit组件compB的数据</button>
    </div>
</template>
<script>
    import { bus } from './eventBus'
    export default {
        name: 'compB',
        data() {
            return {
                dataB: '我是组件compB中的数据'
            }
        },
        methods: {
            handleEventB() {
                bus.$emit('on-msg', this.dataB);//发送事件
            }
        }
    }
</script>