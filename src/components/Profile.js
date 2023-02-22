import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

function Profile() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/Users.json')
            .then(response => {
                const formattedOptIn = response.data.map(data => ({
                    ...data,
                    OptIntoPhyStatements: data.OptIntoPhyStatements === 1 ? 'Yes' : 'No'
                }));
                setData(formattedOptIn);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleEmailChange = (event, index) => {
        const newData = [...data];
        newData[index].Email = event.target.value;
        setData(newData);
    };

    const handleAddressChange = (event, index) => {
        const newData = [...data];
        newData[index].Address = event.target.value;
        setData(newData);
    };

    const handleSave = () => {
        console.log(data);
        setIsEditing(false);

        axios.post('https://gist.githubusercontent.com/hosh8/53792f3f6d7c1086e68419b82d32d4cf/raw/6b9f502dd54b3467cbb101f1862fae992d7bfdf2/Users.json', data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'UserID',
            key: 'UserID',
        },
        {
            title: 'Username',
            dataIndex: 'Username',
            key: 'Username',
        },
        {
            title: 'Password',
            dataIndex: 'Password',
            key: 'Password',
            render: (text) => (
                <Input.Password
                    visibilityToggle
                    value={text}
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    onChange={() => { }}
                />
            )
        },
        {
            title: 'First Name',
            dataIndex: 'Firstname',
            key: 'Firstname',
        },
        {
            title: 'Last Name',
            dataIndex: 'Lastname',
            key: 'Lastname',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            render: (text, record, index) => (
                <Input type="email" value={text} onChange={event => handleEmailChange(event, index)} />
            )
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
            render: (text, record, index) => (
                <Input value={text} onChange={event => handleAddressChange(event, index)} />
            ),
        },
        {
            title: 'Opt into Physical Statments',
            dataIndex: 'OptIntoPhyStatements',
            key: 'OptIntoPhyStatements',
        },
    ];

    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
                direction="horizontal"
                style={{ margin: '0 auto', padding: '40px' }}
                pagination={false}
            />
            <Button type="primary" onClick={handleSave}>
                Save
            </Button>
        </div>
    );
}

export default Profile;
