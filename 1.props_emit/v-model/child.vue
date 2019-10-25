<!--child.vue-->
<template>
    <div>
        <h2>我是子组件</h2>
        <p>我是子组件的数据: {{cData}}</p>
        <p>我是父组件传递过来的数据: {{msg}}</p>
        <button @click="handleClick">点击传递子组件数据给父组件</button>
    </div>
</template>
<script>
    export default {
        name: 'child',
        props: ['value'],//v-model 会自动传递一个字段为 value 的 props 属性
        data() {
            return {
                msg: this.value,
                cData: '我是子组件的数据'
            }
        },
        methods: {
            handleClick() {
                this.$emit('input', this.cData);//通过emit特定的input事件可以改变父组件上v-model绑定的值
            }
        }
    }
</script>