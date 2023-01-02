import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './dropdown.css'

function Dropdown({ title, path }: { id: number, title: string; path: string }): JSX.Element {
  return (
    <li><NavLink to={path}>{title}</NavLink></li>
  )
}

export default Dropdown