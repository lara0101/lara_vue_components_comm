 <!--parent.vue-->
<template>
    <div>
        <!--props的值可以直接传递也可以动态绑定-->
        <child message1="我是父组件直接传递的数据" :message2="message"></child>
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
                message: ['我是父组件动态绑定传递的数据1', '我是父组件动态绑定传递的数据2', '我是父组件动态绑定传递的数据3']
            }
        }
    }
</script>