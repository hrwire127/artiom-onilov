import React from 'react'
import { Link } from "react-router-dom"
import Animate from './Animate'
import "../css/Footer.css"

function Footer()
{
    return (
        <footer className="padding-total">
            <Animate animation="step-anim" start>
                <div className="container-left">
                    <Link className='brand' to="/">
                        <img src="/images/logo-light.png" alt="logo-img" className="brand-footer" />
                    </Link>
                    <p className="text-disabled" > Copyright © 2022 Artiom Onilov</p>
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="footer-contacts">
                    <a href="https://www.linkedin.com/in/artiom-onilov-127bb6246">
                        <img alt="facebook-contact" src="/images/linkedin.png" className="footer-contact-img" />
                    </a>
                    <a href="https://twitter.com/artiom_o">
                        <img alt="twitter-contact" src="/images/twitter.png" className="footer-contact-img" style={{ width: "30px" }} />
                    </a>
                    <a href="https://github.com/hrwire127">
                        <img alt="github-contact" src="/images/github.png" className="footer-contact-img" style={{ width: "30px" }} />
                    </a>
                </div>
            </Animate>
        </footer >
    )
}

export default Footer