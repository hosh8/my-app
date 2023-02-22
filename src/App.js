import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AccountDetails from './components/AccountDetails';
import Transcations from './components/Transactions';
import TabBar from './components/TabBar';
import Setting from './components/Setting';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Setting />} />
        <Route path="/home" element={<> <TabBar /> <AccountDetails /> <Transcations /> </>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
