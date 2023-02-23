import React from 'react';
import { Link } from 'react-router-dom';
import Setting from './Setting';
import { HomeOutlined } from '@ant-design/icons';

function Header() {
  return (
    <header style=
      {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        border: '1px solid gray',
        padding: '10px'
      }}>
      <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}><HomeOutlined style={{ fontSize: 28 }} /></Link>
      {/* <div style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
        Welcome!
      </div> */}
      <nav>
        <Setting />
      </nav>
    </header>
  );
}

export default Header;
