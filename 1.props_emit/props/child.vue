 <!--child.vue-->
<template>
    <div>
        <p>{{message1}}</p>
        <ul>
            <li v-for="(item,index) in message2" :key=index>{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'child',
        //props: ['message1', 'message2'], //props的第一种：字符串数组
        props: {//props的第二种：对象
            message1: {
                type: String,
                default: ''
            },
            message2: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {

            }
        }
    }
</script>
