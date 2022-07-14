import React from 'react'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Form from './Form';

function CallToAction()
{
    return (<>
        <section className="margin-total">
            <div className="container">
                <div className="profile shadow" />
                <div className="paragraph">
                    <div className="headline">I got your back <span className="glow-anim ">☀️</span></div>
                    <div className="text">Everything you <span className="blue">want</span>, in <span className="blue">one place</span>🌎</div>
                </div>
            </div>
        </section>
        <section className="margin-top">
            <Element name="test1" className="element">
                <div className="headline-center" style={{ marginBottom: "30px" }}><span className="blue opacity-anim">Get Your Website</span></div>
                <div className="sub-headline text-center">Place an order 🎁</div>
                <Form />
                <div className="sub-headline text-center text-disabled" style={{ fontSize: "1.2rem", marginTop: "20px" }}>contact@artiomonilov.com</div>

            </Element>
        </section>
        <div className="navigation" style={{ justifyContent: "center", marginTop: "100px", marginBottom: "100px" }}>
            <Link to="portofolio">BROWSE PORTOFOLIO</Link>
        </div>
        {/* <div className="contact-container">
            <div className="contact-block">
                <img alt="facebook-contact" src="/images/facebook.png" className="contact-img contact-radius shadow" />
            </div>
            <div className="contact-block">
                <img alt="email-contact" src="/images/email.png" className="contact-img shadow" />
            </div>
            <div className="contact-block">
                <img alt="instagram-contact" src="/images/instagram.png" className="contact-img contact-radius shadow" />
            </div>
            <div className="contact-block">
                <img alt="github-contact" src="/images/github.png" className="contact-img contact-radius shadow" />
            </div>
        </div> */}
    </>
    )
}

export default CallToAction