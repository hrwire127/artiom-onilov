import React from 'react'
import { Link } from "react-router-dom";
import "../css/Header.css"

function Header()
{
    return (
        <header className="padding-total">
            <Link className='brand' to="/">
                <img src="/images/logo-light.png" alt="logo-img" className="brand" />
            </Link>
            <div className="navigation">
                <Link to="/" className="header-link">HOME</Link>
                <Link to="portofolio" className="header-link">PORTOFOLIO</Link>
                <Link to="about" className="header-link">ABOUT</Link>
            </div>
        </header>
    )
}

export default Header