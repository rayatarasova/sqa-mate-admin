import React from "react";
import {Table} from 'antd'

function TableView(props){
    return(
        <Table style={{width:900, height: 300}}
               size="middle"
               pagination={{pageSize: 5}}
               columns={props.columns}
               dataSource={props.data}>
        </Table>
    )
}

export default TableView