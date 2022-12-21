import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return ( <header>
    <ul>
      <Link to='/'>main</Link>
      <Link to='/category'>category</Link>
      <Link to='/basket'>basket</Link>
    </ul>
  </header>)
}

export default Header;