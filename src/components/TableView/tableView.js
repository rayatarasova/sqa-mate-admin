import React from "react";
import {Space, Table} from 'antd'

function TableView(props){
    return(
        <Table size="small"
               pagination={{pageSize: 5}}
               columns={props.columns}
               dataSource={props.data}>
        </Table>
    )
}

export default TableView