import React from 'react'
import { Link } from "react-router-dom";
import "../css/Header.css"

function Header()
{
    return (
        <header className="padding-total">
            <Link className='brand' to="/"><div>AO</div></Link>
            <div className="navigation">
                <Link to="portofolio">PORTOFOLIO</Link>
                <Link to="skills">SKILLS</Link>
                <Link to="about">ABOUT</Link>
            </div>
        </header>
    )
}

export default Header