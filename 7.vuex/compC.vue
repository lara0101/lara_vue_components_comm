<!--compC.vue-->
<template>
    <div>
        <h2>我是compC组件</h2>
        <p>compB组件获取到的数据：{{showDataC}}</p>
        <button @click="handleEventC">点击将compC的数据传给compB</button>
    </div>
</template>
<script>
    export default {
        name: 'compC',
        data() {
            return {
                dataC: '我是compC的数据'
            }
        },
        computed: {
            showDataC() {
                return this.$store.state.dataC//获取数据dataC
            }
        },
        methods: {
            handleEventC() {
                this.$store.commit('setDataB', this.dataC);//修改数据dataB
            }
        }
    }
</script>