import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AccountDetails from './components/AccountDetails';
import Transcations from './components/Transactions';
import TabBar from './components/TabBar';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Transactions from './components/Transactions';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Transactions />} />
        <Route path="/home" element={<> <TabBar /> <AccountDetails /> <Transcations /> </>} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
