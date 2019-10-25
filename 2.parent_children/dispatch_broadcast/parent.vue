<!--parent.vue-->
<template>
    <div>
        <h2>我是parent.vue</h2>
        <p>parent组件：{{pData}}</p>
        <button @click="clickEvent">所有子孙组件(-100)</button>
        <child></child>
    </div>
</template>
<script>
    import child from './child'
    export default {
        name: 'parent',
        components: {
            child
        },
        data() {
            return {
                pData: 100
            }
        },
        methods: {
            test(val) {
                this.pData += val;
            },
            clickEvent() {
                this.$broadcast('broadcastEvent', -100);//向所有子孙广播
            }
        },
        mounted() {
            this.$on('dispatchEvent', this.test);//用$on监听
        }
    }
</script>