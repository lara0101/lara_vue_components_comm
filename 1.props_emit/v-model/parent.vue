<!--parent.vue-->
<template>
    <div>
        <h2>我是父组件</h2>
        <p>我是父组件的数据：{{pData}}</p>
        <child v-model="pData"></child>
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
                pData: '我是父组件的数据'
            }
        }
    }
</script>