import React from 'react'
import { Link } from "react-router-dom";
import "../css/Footer.css"
import useWindowSize from "../hooks/useWindowSize"

function Footer()
{
    const [isPhoneSize] = useWindowSize(664, 0)
    const [Break] = useWindowSize(400, 0)

    return (
        <footer className="padding-total">
            {!isPhoneSize
                ? (<>
                    <p className="text-disabled" > Copyright © 2022 Artiom Onilov</p>
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
                </>)
                : (<>
                    <div className="container" style={{ width: "100%" }}>
                        <p className="text-disabled" > Copyright © 2022 {Break && (<br />)} Artiom Onilov</p>

                        <div className="footer-contacts">
                            <div><img alt="facebook-contact" src="/images/facebook.png" className="footer-contact-img" /></div>
                            <div><img alt="instagram-contact" src="/images/instagram.png" className="footer-contact-img" /></div>
                            <div><img alt="github-contact" src="/images/github.png" className="footer-contact-img" style={{ width: "30px" }} /></div>
                        </div>
                    </div>
                    <div className="navigation">
                        <Link to="/" className="text-disabled">HOME</Link>
                        <Link to="portofolio" className="text-disabled">PORTOFOLIO</Link>
                        <Link to="about" className="text-disabled">ABOUT</Link>
                    </div>
                </>)
            }
        </footer >
    )
}

export default Footer