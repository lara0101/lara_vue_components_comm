<!--child.vue-->
<template>
    <button @click="childClickEvent">点击修改父组件数据</button>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {

            }
        },
        methods: {
            childClickEvent() {
                //$emit方法第一个参数是自定义事件（clickEvent）,后面的参数都是要传递的数据，可以不填或填写多个
                this.$emit('clickEvent', '子组件向父组件传递的数据');
            }
        }
    }
</script>