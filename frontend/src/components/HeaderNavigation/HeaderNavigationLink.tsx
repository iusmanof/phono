import React from 'react'
import {Link} from 'react-router-dom'
import routes from '../../routes/routes'
import './headerNavigationLink.css'

function HeaderNavigationLink(path: any, title: any, id: any) {
  const routesLinks = routes.map(route => {
    return <li>
      <Link key={route.id} to={route.path}>
        {route.title}
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
