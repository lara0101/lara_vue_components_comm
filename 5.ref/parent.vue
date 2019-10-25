<!--parent.vue-->
<template>
    <div>
        <p>我是父组件获取的子组件的数据：{{pData}}</p>
        <child ref='compChild'></child>
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
                pData: ''
            }
        },
        methods: {
            parentEvent() {
                let compChild = this.$refs.compChild;//通过this.$refs获取子组件实例
                this.pData = compChild.childData;//获取子组件数据
                compChild.childEvent();//调用子组件方法
            }
        },
        mounted() {
            this.parentEvent();
        },
    }
</script>