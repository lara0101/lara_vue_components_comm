<!--grandson.vue-->
<template>
    <div>
        <h2>我是grandson.vue</h2>
        <p>grandson组件：{{gData}}</p>
        <button @click="clickEvent">所有祖先组件(+100)</button>
    </div>
</template>
<script>
    export default {
        name: 'grandson',
        data() {
            return {
                gData: 100
            }
        },
        methods: {
            test(val) {
                this.gData += val;
            },
            clickEvent() {
                this.$dispatch('dispatchEvent', 100);//向所有的祖先派发
            }
        },
        mounted() {
            this.$on('broadcastEvent', this.test);//用$on监听broadcastEvent
        }
    }
</script>