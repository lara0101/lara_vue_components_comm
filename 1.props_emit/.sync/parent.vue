<!--parent.vue-->
<template>
    <div>
        <h2>我是父组件</h2>
        <p>我是父组件的数据(单属性)：{{pData}}</p>
        <p>我是父组件的数据(多属性)：{{myProps.a1}},{{myProps.a2}}</p>
        <!--1.单个属性传递-->
        <child :abc.sync="pData" :ifShow="true"></child>
        <!-- <child :abc="pData" @update:abc="val=>pData= val"></child> 上面会自动扩展为该形式-->
        <!--2.多个属性传递-->
        <child v-bind.sync="myProps" :ifShow="false"></child> <!-- 不能写成字面量形式如 v-bind.sync="{ a1: '我是父组件的pData1', a2: '我是父组件的pData2'}"-->
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
                pData: 'Hi!我是父组件！',
                myProps: { a1: '我是父组件的pData1', a2: '我是父组件的pData2' }
            }
        }
    }
</script>