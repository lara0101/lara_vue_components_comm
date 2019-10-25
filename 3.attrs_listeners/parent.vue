<!--parent.vue-->
<template>
    <div>
        <child :a1="a1" :a2="a2" :a3="a3" :a4="a4" @click.native="clickEventNative" @click="clickEvent"
            @pEvent1="parentEvent1" @pEvent2="parentEvent2">
        </child>
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
                a1: "我是parent属性1的数据",
                a2: "我是parent属性2的数据",
                a3: "我是parent属性3的数据",
                a4: "我是parent属性4的数据",
            }
        },
        methods: {
            clickEventNative() {
                console.log('我是parent的native事件');
            },
            clickEvent() {
                console.log('我是parent事件0');
            },
            parentEvent1() {
                console.log('我是parent事件1');
            },
            parentEvent2() {
                console.log('我是parent事件2');
            }
        }
    }
</script>