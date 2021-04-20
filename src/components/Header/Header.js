import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <Link to="/list">리스트</Link>
      <Link to="/form">작성페이지</Link>
    </header>
  )
}

export default Header
