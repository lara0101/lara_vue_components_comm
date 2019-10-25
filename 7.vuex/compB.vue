<!--compB.vue-->
<template>
    <div>
        <h2>我是compB组件</h2>
        <p>compB组件获取到的数据：{{showDataB}}</p>
        <button @click="handleEventB">点击将compB的数据传给compC</button>
    </div>
</template>
<script>
    export default {
        name: 'compB',
        data() {
            return {
                dataB: '我是compB的数据'
            }
        },
        computed: {
            showDataB() {
                return this.$store.state.dataB//获取数据dataB
            }
        },
        methods: {
            handleEventB() {
                this.$store.commit('setDataC', this.dataB);//修改数据dataC
            }
        }
    }
</script>