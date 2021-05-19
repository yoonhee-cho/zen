import React from 'react';
import './navbar.css'

export default function navbar() {
    return(
        <nav className="navbar">
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span className="navbar-title">Zen</span>
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
