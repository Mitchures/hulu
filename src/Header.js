import React from 'react';
import './Header.css';
import {
  HomeOutlined,
  ThunderboltOutlined,
  CheckSquareOutlined,
  AppstoreOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeOutlined />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <ThunderboltOutlined />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <CheckSquareOutlined />
          <p>My Stuff</p>
        </div>
        <div className="header__icon">
          <AppstoreOutlined />
          <p>Browse</p>
        </div>
        <div className="header__icon">
          <SearchOutlined />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <UserOutlined />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="hulu"
      />
    </div>
  );
}

export default Header;