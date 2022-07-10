import React from 'react'
import { Link } from "react-router-dom";

function Header()
{
    return (
        <section>
            <Link to="/">Home</Link>
            <Link to="portofolio">Portofolio</Link>
            <Link to="skills">Skills</Link>
        </section>
    )
}

export default Header