<template>
    <input type="text" v-model="rowData.name">
</template>

<script>
    export default {
        name: "myinput",
        props: {
            rowData: Object
        },
        created() {}
    }
</script>

<!--<style scoped>-->

<!--</style>-->
