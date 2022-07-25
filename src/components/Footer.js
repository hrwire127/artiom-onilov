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
                    <div><img alt="facebook-contact" src="/images/facebook.png" className="footer-contact-img" /></div>
                    <div><img alt="instagram-contact" src="/images/instagram.png" className="footer-contact-img" /></div>
                    <div><img alt="github-contact" src="/images/github.png" className="footer-contact-img" style={{ width: "30px" }} /></div>
                </div>
            </Animate>
        </footer >
    )
}

export default Footer