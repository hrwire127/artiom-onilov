import React from 'react'
import { Link, Element } from 'react-scroll'

function Intro()
{
    return (
        <section className="container margin-total" >
            <div className="paragraph">
                <div className="headline">Artiom Onilov</div>
                <p className="text">Your favorite 💙<br /><span className="blue"> Web Developer</span></p>
                <div className="btn-container">
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                        <button className="action-btn shadow">Contact Me</button>
                    </Link>
                </div>
            </div>
            <div className="profile shadow" />
        </section >
    )
}

export default Intro