import React from 'react'
import { Link } from 'react-router-dom';
import './dropdown.css'

interface ISubmenu {
  title?: string;
  url?: string;
}

function Dropdown({ id, title, path }:{ id: number, title: string; path: string }): JSX.Element {
  return (
    <li><Link key={id} to={path}>{title}</Link></li>
  )
}

export default Dropdown