import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes from "../../routes/routes"
import Footer from "../Footer"
import Header from "../Header"

function Routing (){

  const routesPath = routes.map( route => {return <Route key={route.id} path={route.path} element={route.element} /> })
  return(
    <Router>
      <Header />
      <Routes>
        {routesPath}
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing;