<!--compA.vue-->
<template>
    <div>
        <comp-b></comp-b>
        <comp-c></comp-c>
    </div>
</template>
<script>
    import compB from './compB'
    import compC from './compC'
    export default {
        name: 'compA',
        components: {
            compB, compC
        }
    }
</script>