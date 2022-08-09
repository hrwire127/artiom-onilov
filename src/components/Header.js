import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { langCtx, Paragraphs } from '../context/langCtx'
import Animate from './Animate'
import "../css/Header.css"

function Header()
{
    const langValue = useContext(langCtx)

    const Home = Paragraphs.Header.part_0[langValue];
    const Portofolio = Paragraphs.Header.part_1[langValue];
    const About = Paragraphs.Header.part_2[langValue];
 
    return (
        <header className="padding-total">
            <Animate animation="step-anim" start>
                <Link className='brand' to="/">
                    <img src="/images/logo-light.png" alt="logo-img" className="brand" />
                </Link>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="navigation">
                    <Link to="/" className="header-link">{Home}</Link>
                    <Link to="portofolio" className="header-link">{Portofolio}</Link>
                    <Link to="about" className="header-link">{About}</Link>
                </div>
            </Animate>
        </header>
    )
}

export default Header