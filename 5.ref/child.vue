<!--child.vue-->
<template>
    <div></div>
</template>
<script>
    export default {
        name: 'child',
        data() {
            return {
                childData: '我是child的数据'
            }
        },
        methods: {
            childEvent() {
                console.log('我是child的方法');
            }
        }
    }
</script>