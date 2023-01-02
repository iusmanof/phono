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
      {route.submenu ?
        (<>
          <p className="withSubmenu"
            onMouseEnter={() => setDropdown((true))}
            onMouseLeave={() => setDropdown((false))}
          >
            <Link to={route.path}> {route.title}</Link>
          </p>
          <ul
            className={`dropdown ${dropdown ? 'show' : ''}`}
            onMouseEnter={() => setDropdown((true))}
            onMouseLeave={() => setDropdown((false))}
          >
            {submenu?.map(item => {
              return (<Dropdown key={item.id} {...item} />)
            })}
          </ul>
        </>)
        :
        (<Link to={route.path}> {route.title}</Link>)}
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
