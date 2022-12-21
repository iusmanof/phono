import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Basket from "../Basket"
import Category from "../Category"
import Footer from "../Footer"
import Header from "../Header"
import Main from "../Main"

function Routing (){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Main />} />
        <Route path='/main' element={ <Main />} />
        <Route path='/category' element={ <Category />} />
        <Route path='/basket' element={ <Basket />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing;