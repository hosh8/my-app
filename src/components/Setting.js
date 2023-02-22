import { Menu, Dropdown, Button } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/', { replace: true });
    };


    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={handleLogout}>
                <LogoutOutlined />
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text" icon={<SettingOutlined />} />
        </Dropdown>
    );
};

export default Setting;
