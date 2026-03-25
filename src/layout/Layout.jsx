import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className='all-oulet-childs'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
