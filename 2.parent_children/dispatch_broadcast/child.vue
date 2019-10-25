<!--child.vue-->
<template>
    <div>
        <h2>我是child.vue</h2>
        <p>child组件：{{cData}}</p>
        <grandson></grandson>
    </div>
</template>
<script>
    import grandson from './grandson'
    export default {
        name: 'child',
        components: {
            grandson
        },
        data() {
            return {
                cData: 200
            }
        },
        methods: {
            test(val) {
                this.cData += val;
            }
        },
        mounted() {
            this.$on('dispatchEvent', this.test);//用$on监听dispatchEvent
            this.$on('broadcastEvent', this.test);//用$on监听broadcastEvent
        },
    }
</script>