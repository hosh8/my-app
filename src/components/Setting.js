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
            <Menu.Item key="1" onClick={handleProfile} style={{ fontSize: 20}}>
                <ProfileOutlined fontSize="25"/> <Space></Space>
                Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={handleLogout} style={{ fontSize: 20}}>
                <LogoutOutlined fontSize="25" /> <Space></Space>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text"  icon={<SettingOutlined style={{ fontSize: 27, color: 'white' }} />} />
        </Dropdown>
    );
};

export default Setting;
