import React from 'react';
import './App.css';
import {Layout, Space} from 'antd'
import TableView from "./components/TableView/tableView";

const {Header, Content, Footer} = Layout;

function App() {

    const inputDataMock = [
        {
            name: "Artem",
            age: "30",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Elena",
            age: "35",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Carl",
            age: "20",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Pavle",
            age: "45",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Andrew",
            age: "19",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Vasiliy",
            age: "23",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
        {
            name: "Lubov",
            age: "30",
            emailAdress: "artem@mail.ru",
            status: "active",
            dateRegisteted: "12.03.2019"
        },
    ];
    const columnsFromInput = [];
    const dataFromInput = [];

    function splitColumnsAndData(input) {
        let keys = Object.keys(input[0]);
        keys.forEach(item => (
            columnsFromInput.push(
                {
                    title: item,
                    dataIndex: item,
                    key: item
                }
            )
        ));
        input.map((item, index) => {
            item.key = index;
            return dataFromInput.push(
                item
            )
        })
    }

    splitColumnsAndData(inputDataMock);
    columnsFromInput[0].sorter = (a, b) => a.name.localeCompare(b.name);
    columnsFromInput[0].sortDirections = ['ascend'];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },

    ];

    return (
        <Layout>
            <Header style={{backgroundColor: "#2199e8"}}>
                <h1 style={{color: "white"}}>SQA Mate Admin pannel</h1>
            </Header>
            <Content className="content">
                <h2>Users</h2>
                <Space className="table-space">
                    <TableView columns={columnsFromInput} data={dataFromInput}/>
                </Space>
                <h2>Tests</h2>
                <Space className="table-space">
                    <TableView columns={columns} data={data}/>
                </Space>
                <h2>Audit logs</h2>
                <Space className="table-space">
                    <TableView columns={columns} data={data}/>
                </Space>
                <h2>Number of tests per date</h2>
                <Space className="table-space">
                    <TableView columns={columns} data={data}/>
                </Space>
            </Content>
            <Footer style={{height: 50, textAlign: 'center', backgroundColor: "#2199e8", color: "white"}}>SQA Mate ©2020
            </Footer>
        </Layout>
    );
}

export default App;
