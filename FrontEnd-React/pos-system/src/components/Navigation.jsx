import React from "react"
import './Navbar.css'

import logo_svg from '../../src/images/logo.svg'

import { Link } from "react-router-dom"

const Navbar = () => {



    return (

        <div className="navbar" >
            <div className="nav_design">
                <img src={logo_svg} className="logo" />
                <span className='nav-brand'>React</span>&nbsp;&nbsp;WEB | POS
            </div>
            <ul className="uli">
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/users">Customers</Link>
                </li>
                <li>
                    <Link to="/products">Store</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>




            </ul>

        </div>
    )
}
export default Navbar