<script type="text/jsx">
import {tableData, columnDefs} from './config'
import {isObject} from './utils'
import Wrap from './Wrap'
export default {
    name: "fk-table-body",
    components: { Wrap },
    data () {
        return {
            columnDefs,
            tableData
        }
    },
    render() {
        const columnDefs = this.columnDefs
        const tableData = this.tableData
        return (
            <table class="fk-table__body" cellSpacing="0" cellPadding="0" border="0">
                <colgroup>
                    { columnDefs.map(column => <col style={[{width: column.width}]}/>) }
                </colgroup>
                <tbody>
                    { this.renderTr(tableData, columnDefs) }
                </tbody>
            </table>
        )
    },
    methods: {
        renderTr (tableData, columnDefs) {
            return tableData.map((data, rowIndex) => {
                return <tr class="fk-table__row">{this.renderTds(data, columnDefs, rowIndex)}</tr>
            })
        },
        renderTds (data, columnDefs, rowIndex) {
            return columnDefs.map((column, columnIndex) => {
                const cell = column.cellTemplate(data, rowIndex, columnIndex)
                if (isObject(cell)) {
                    return <td><div class="cell"><Wrap com={cell} rowData={data}/></div></td>
                } else if (column.isHTML) {
                    return <td><div class="cell" domPropsInnerHTML={cell}></div></td>
                } else {
                    return <td><div class="cell">{cell}</div></td>
                }
            })
        }
    }
}
</script>
