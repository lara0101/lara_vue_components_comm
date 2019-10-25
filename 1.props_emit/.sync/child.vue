<!--child.vue-->
<template>
    <div>
        <h2>我是子组件</h2>
        <p v-if="ifShow">我是子组件接收到的父组件单个属性：{{abc}}</p>
        <p v-else>我是子组件接收到的父组件的多个属性:{{a1}},{{a2}}</p>
        <button @click="handleClick">点击传递子组件数据给父组件</button>
    </div>
</template>
<script>
    export default {
        name: 'child',
        props: ['ifShow', 'abc', 'a1', 'a2'],
        data() {
            return {
                cData: 'Hi!我是子组件！'
            }
        },
        methods: {
            handleClick() {
                this.$emit("update:abc", this.cData);
                this.$emit("update:a1", this.cData);
                this.$emit("update:a2", this.cData);
            }
        }
    }
</script>