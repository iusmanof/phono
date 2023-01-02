import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown'
import routes from '../../routes/routes'
import './headerNavigationLink.css'

function HeaderNavigationLink() {
  const [dropdown, setDropdown] = useState(false);
  const routesLinks = routes.map(route => {
    const { submenu } = route
    return <li key={route.id}>
      <Link to={route.path}>
        {route.submenu ? 
          (<><p className="withSubmenu" onClick={() => setDropdown((prev) => !prev)}>{route.title} </p>
          <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
            {submenu?.map(item => {
              return (<Dropdown key={item.id} {...item} />)
            })}
          </ul>
          </>)
          :
          (<p> {route.title}</p>)}
      </Link>
    </li>
  })

  return (
    <nav>
      <ul>
        {routesLinks}
      </ul>
    </nav>
  )
}

export default HeaderNavigationLink
