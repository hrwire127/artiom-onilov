import React from 'react'
import { Link } from "react-router-dom";
import "../css/Footer.css"

function Footer()
{
    return (
        <footer className="padding-total">
            <p className="text-disabled">Copyright © 2022 Artiom Onilov</p>
            <div className="navigation">
                <Link to="/" className="text-disabled">HOME</Link>
                <Link to="portofolio" className="text-disabled">PORTOFOLIO</Link>
                <Link to="about" className="text-disabled">ABOUT</Link>
            </div>

            <div className="footer-contacts">
                <div><img alt="facebook-contact" src="/images/facebook.png" className="footer-contact-img" /></div>
                <div><img alt="instagram-contact" src="/images/instagram.png" className="footer-contact-img" /></div>
                <div><img alt="github-contact" src="/images/github.png" className="footer-contact-img" style={{ width: "30px" }} /></div>
            </div>
        </footer>
    )
}

export default Footer