import React from 'react';
import './navbar.css'
import logo from './lotus_l.png'

export default function navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <img className="navbar-logo" src={logo} alt="logo"/>
                <span className="navbar-title">Zen Corner</span>
            </div>
            
            <form method="get" className="search-form">
                <input className="search-input" type="text" placeholder="search for video"/>
                <button className="search-button"><i className="fas fa-search"></i></button>
                {/* <span>Filters</span>
                <span>About</span> */}
            </form>
        </nav>
    )
}
