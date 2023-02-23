import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TabBar from './components/TabBar';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Transactions from './components/Transactions';
import { Space } from 'antd';
import Header from './components/Header';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Header />} />
        <Route path="/home" element={<> <TabBar /> <Space></Space> <Setting /></>} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
