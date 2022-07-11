import React from 'react'
import { Link, Element } from 'react-scroll'

function Intro()
{
    return (
        <section className="container margin-total" >
            <div className="paragraph">
                <div className="headline">Artiom Onilov</div>
                <p className="text">The developer you <span className="blue">Always Wanted</span> 💙</p>
                <div className="btn-container">
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                        <button className="action-btn shadow">Contact Me &#10141;</button>
                    </Link>
                </div>
            </div>
            <div className="profile shadow" />
        </section >
    )
}

export default Intro