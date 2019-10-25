<!--grandson.vue-->
<template>
    <div>
        <p>grandson中接收到的a2: {{a2}}</p>
        <p>grandson中接收到的a3: {{a3}}</p>
        <p>grandson中接收到的$attrs: {{$attrs}}</p>
    </div>
</template>

<script>
    import grandSon from './grandson'
    export default {
        name: 'child',
        inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
        props: ['a2', 'a3'],
        mounted() {
            this.$listeners.pEvent2();//parent方法调用方式2
        },
    }
</script>