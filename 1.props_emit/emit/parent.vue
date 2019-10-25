<!--parent.vue-->
<template>
    <div>
        <p>{{parentData}}</p>
        <!--在子组件自定义标签上用v-on（此处用的语法糖@）监听子组件触发的自定义事件clickEvent-->
        <child @clickEvent='parentClickEvent'></child>
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
                parentData: '父组件本来的数据'
            }
        },
        methods: {
            parentClickEvent(val) {
                this.parentData = val; //val是子组件传递过来的数据
            }
        }
    }
</script>