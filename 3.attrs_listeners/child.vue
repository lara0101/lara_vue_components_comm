<!--child.vue-->
<template>
    <div>
        <p>child中接收到的a1: {{a1}}</p>
        <p>child中接收到的$attrs: {{$attrs}}</p>
        <grandson v-bind="$attrs" v-on="$listeners"></grandson>
    </div>
</template>

<script>
    import grandson from './grandson'
    export default {
        name: 'child',
        components: {
            grandson
        },
        props: ['a1'],
        mounted() {
            console.log(this.$listeners);//{click: ƒ, pEvent1: ƒ, pEvent2: ƒ}
            this.$emit('pEvent1');//parent方法调用方式1
        },
    }
</script>