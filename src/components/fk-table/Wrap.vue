<template>
    <component :is="com" :rowData="rowData"></component>
</template>

<script>
    export default {
        name: "Wrap",
        props: {
            com: Object,
            rowData: Object
        }
    }
</script>

<style scoped>

</style>
