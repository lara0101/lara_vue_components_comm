<!--child.vue-->
<template>
    <div>{{parentData.pData}}</div>
</template>

<script>
    export default {
        name: 'child',
        inject: {
            parentData: {
                default: () => { }
            }
        }
    }
</script>