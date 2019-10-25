<!--child.vue-->
<template>
    <div>
        <p>子组件数据：{{childData}}</p>
        <p>子组件获取的父组件数据：{{parentData}}</p>
    </div>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {
                childData: '子组件的数据'
            }
        },
        computed: {
            parentData() {
                return this.$parent.parentData;
            }
        }
    }
</script>