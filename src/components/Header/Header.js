import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h2>wally-wally's Todo List</h2>
      <div className="link-group">
        <Link to="/list">
          <span className="emoji">📃</span> 할 일 목록
        </Link>
        <Link to="/form">
          <span className="emoji">➕</span> 할 일 추가
        </Link>
      </div>
    </header>
  );
};

export default Header;