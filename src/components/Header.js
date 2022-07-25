import React from 'react'
import { Link } from "react-router-dom";
import Animate from './Animate'
import "../css/Header.css"

function Header()
{
    return (
        <header className="padding-total">
            <Animate animation="step-anim" start>
                <Link className='brand' to="/">
                    <img src="/images/logo-light.png" alt="logo-img" className="brand" />
                </Link>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="navigation">
                    <Link to="/" className="header-link">HOME</Link>
                    <Link to="portofolio" className="header-link">PORTOFOLIO</Link>
                    <Link to="about" className="header-link">ABOUT</Link>
                </div>
            </Animate>
        </header>
    )
}

export default Header