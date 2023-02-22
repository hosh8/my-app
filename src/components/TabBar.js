import { Tabs } from 'antd';
import AccountDetails from './AccountDetails';
import Transactions from './Transactions';
const items = [
  {
    key: '1',
    label: `Account Details`,
    children: <AccountDetails />,
  },
  {
    key: '2',
    label: `Transactions`,
    children: <Transactions />,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
const TabBar = () => <Tabs defaultActiveKey="1" items={items} />;
export default TabBar;