import React from "react";
import {Table} from 'antd'

function TableView(props){
    return(
        <Table className="table-custom"
               size="middle"
               pagination={{pageSize: 5}}
               columns={props.columns}
               dataSource={props.data}>
        </Table>
    )
}

export default TableView