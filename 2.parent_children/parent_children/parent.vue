<!--parent.vue-->
<template>
    <div>
        <child></child>
        <button @click="parentClickEvent">点击修改子组件数据</button>
    </div>
</template>

<script>
    import child from "./child"
    export default {
        name: 'parent',
        components: {
            child
        },
        data() {
            return {
                parentData: '父组件的数据'
            }
        },
        methods: {
            parentClickEvent() {
                this.$children[0].childData = '这是父组件修改的子组件数据';
            }
        }
    }
</script>