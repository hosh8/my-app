import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

function AccountDetails() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/BankAccount.json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const columns = [
        {
            title: 'Account ID',
            dataIndex: 'AccountID',
            key: 'AccountID',
        },
        // {
        //     title: 'User ID',
        //     dataIndex: 'UserID',
        //     key: 'UserID',
        // },
        {
            title: 'Account Type',
            dataIndex: 'AccountType',
            key: 'AccountType',
        },
        {
            title: 'Account Balance',
            dataIndex: 'AcccountBalance',
            key: 'AcccountBalance',
        },
    ];

    return (
        <Table dataSource={data} columns={columns} style={{margin: '0 auto',
        padding: '40px',}} pagination={false} />
    );
}

export default AccountDetails;
