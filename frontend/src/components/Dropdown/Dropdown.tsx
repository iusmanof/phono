import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './dropdown.css'

interface ISubmenu {
  title?: string;
  url?: string;
}

function Dropdown({ id, title, path }: { id: number, title: string; path: string }): JSX.Element {
  return (
    <li key={id}><NavLink key={id} to={path}>{title}</NavLink></li>
  )
}

export default Dropdown