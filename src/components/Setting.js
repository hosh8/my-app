import { Menu, Dropdown, Button } from 'antd';
import { SettingOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/', { replace: true });
    };

    const handleProfile = () => {
        navigate('/profile');
    }


    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={handleProfile}>
                <ProfileOutlined /> <Space></Space>
                Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={handleLogout}>
                <LogoutOutlined /> <Space></Space>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} placement="topRight" >
            <Button type="text" icon={<SettingOutlined />} />
        </Dropdown>
    );
};

export default Setting;
