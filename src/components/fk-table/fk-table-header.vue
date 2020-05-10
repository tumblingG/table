
<script type="text/jsx">
import {columnDefs} from './config'
export default {
    name: "fk-table-header",
    data () {
        return {
            columnDefs
        }
    },
    render() {
        const columnDefs = this.columnDefs
        return (
            <table
                class="fk-table__header"
                cellPadding="0"
                cellSpacing="0"
                border="0">
                <colgroup>
                    {
                        columnDefs.map(column => <col style={[{width: column.width}]}/>)
                    }
                </colgroup>
                <thead>
                    <tr>
                        {columnDefs.map(column => (<th><div class="cell">{column.title}</div></th>))}
                    </tr>
                </thead>
            </table>
        )
    }
}
</script>
