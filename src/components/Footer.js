import React from 'react'
import { Link, Element } from 'react-scroll'
import "../css/Footer.css"

function Footer()
{
    return (
        <footer className="padding-total">
            <p className="text-disabled">©artiomonilov.com</p>
            <div className="navigation">
                <Link to="portofolio" className="text-disabled">PORTOFOLIO</Link>
                <Link to="skills" className="text-disabled">SKILLS</Link>
                <Link to="about" className="text-disabled">ABOUT</Link>
            </div>

            <div className="footer-contacts">
                <div><img alt="facebook-contact" src="/images/facebook.png" className="footer-contact-img" /></div>
                <div><img alt="instagram-contact" src="/images/instagram.png" className="footer-contact-img" /></div>
                <div><img alt="email-contact" src="/images/email.png" className="footer-contact-img" /></div>
            </div>
        </footer>
    )
}

export default Footer