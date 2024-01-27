import React from 'react'
import logo from "../../../../Image/icons/logo.png"
import search from "../../../../Image/icons/search-icon.png"
import cart from "../../../../Image/icons/cart.png"
import NavLinks from './link/link'
import { Link } from 'react-router-dom'


export default function Header() {
 
        return (
            <div>
                <div className="main fixed-top pb-5">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="nav-icons container-fluid container-md ">
                            <Link className="navbar-brand col-9 col-md-6 text-md-left col-lg-1" to="/">
                                <img src={logo} alt="" />
                            </Link>
                            <div className="m-nav-list collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav mr-auto justify-content-between">
                                    <NavLinks link= "mac" linkName = "Mac" />
                                    <NavLinks link= "ipad" linkName = "iPad" />
                                    <NavLinks link= "iphones" linkName = "iPhone" />
                                    <NavLinks link= "watch" linkName = "Watch" />
                                    <NavLinks link= "tv" linkName = "TV" />
                                    <NavLinks link= "music" linkName = "Music" />
                                    <NavLinks link= "airpods" linkName = "AirPods" />
                                    <NavLinks link= "homepod" linkName = "HomePod" />
                                    <NavLinks link= "ipod" linkName = "iPod touch" />
                                    <NavLinks link= "acc" linkName = "Accessories" />
                                    <NavLinks link= "gift" linkName = "Gift Cards" />
                                </ul>
                            </div>
                            <Link className="navbar-brand col-1 col-md-3 text-center text-md-end col-lg-1 " to="/">
                            <img src={search} alt="" /></Link>
                            <Link className="navbar-brand col-1 col-md-1 text-center text-md-center col-lg-1" to="/">
                            <img src={cart} alt="" /></Link>
                            <button  className=" navbar-toggler  navbar-toggler-right col-1" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                ☰
                            </button>
                        </div>
                    </nav>
                </div>
            </div> 
        )
    
}




