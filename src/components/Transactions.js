import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message, Input, Form, Modal, DatePicker, InputNumber } from 'antd';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';

function Transactions() {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/ScheduledTransactions.json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleDelete = (record) => {
        axios.delete(`https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/ScheduledTransactions.json${record.id}`)
            .then(response => {
                message.success('User deleted successfully!');
                setData(data.filter(item => item.id !== record.id));
            })
            .catch(error => {
                console.log(error);
                message.error('Failed to delete user!');
            });
    };
    const onFinish = (values) => {
        console.log('Success:', values);
        // axios.post('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/ScheduledTransactions.json', JSON.stringify(values))
        //     .then(response => {
        //         setData([...data, response.data]);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         message.error('Failed to add transaction!');
        //     });
        setModalVisible(false);
    };
    const handleAdd = (values) => {
        console.log('Success:', values);
        axios.post('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/ScheduledTransactions.json', JSON.stringify(values))
            .then(response => {
                setData([...data, response.data]);
            })
            .catch(error => {
                console.log(error);
                message.error('Failed to add transaction!');
            });
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'TransactionID',
            key: 'TransactionID',
        },
        {
            title: 'Account ID',
            dataIndex: 'AccountID',
            key: 'AccountID',
        },
        {
            title: 'Receiving Account ID',
            dataIndex: 'ReceivingAccountID',
            key: 'ReceivingAccountID',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
        },
        {
            title: 'Transaction Amount',
            dataIndex: 'TransactionAmount',
            key: 'TransactionAmount',
        },
        {
            title: 'Comment',
            dataIndex: 'Comment',
            key: 'Comment',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Popconfirm
                        title="Are you sure you want to delete this user?"
                        onConfirm={() => handleDelete(record)}
                    >
                        <Button type="link" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                ) : null,
        },
    ];

    return (
        <>
            <Button type="primary" onClick={() => setModalVisible(true)}>
                <PlusOutlined /> Add
            </Button>
            <Table dataSource={data} columns={columns} style={{
                margin: '0 auto',
                padding: '40px',
            }} />
            <Modal
                open={modalVisible}
                title="Add new transaction"
                footer= "null"
                >
            <Form onFinish={onFinish}>
                <Form.Item name="AccountID" label="Bank Account ID" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="Date" label="Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="transaction amount" label="Transaction Amount" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="comment" label="Comment">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
        </>
    );
}

export default Transactions;
