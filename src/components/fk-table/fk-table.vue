<template>
    <div class="fk-table"
        :class="[{
            'fk-table-border': true,
            'fk-table-striped': stripe,
            // 'fk-table-scrollable-x': scroll[0],
            // 'fk-table-scrollable-y': scroll[1],
            'fk-table-enable-row-hover': true,
        }, tableSize ? `fk-table-${tableSize}` : '']">
        <div v-if="showHeader"
            class="fk-table__header-wrapper">
            <fk-table-header></fk-table-header>
        </div>
        <div
            class="fk-table__body-wrapper"
            ref="bodyWrapper">
            <fk-table-body></fk-table-body>
        </div>
    </div>
</template>

<script>
    import FkTableHeader from './fk-table-header.vue'
    import FkTableBody from './fk-table-body.vue'

    export default {
        name: "FkTable",
        components: {
            FkTableHeader,
            FkTableBody
        },

        props: {
            data: {
                type: Array,
                default: () => []
            },
            size: String,
            stripe: Boolean,
            border: Boolean,
            hover: Boolean,
            showHeader: Boolean
        },
        computed: {
            tableSize() {
                return this.size || 'normal'
            }
        }
    }
</script>

<style lang="less" src="./style.less"></style>
