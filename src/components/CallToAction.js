import React from 'react'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll'

function CallToAction()
{
    return (<>
        <section className="margin-total">
            <div className="container">
                <div className="profile shadow" />
                <div className="paragraph">
                    <div className="headline">I got your back ☀️</div>
                    <div className="text">Everything you <span className="blue">want</span>, in <span className="blue">one place</span>🌎</div>
                </div>
            </div>
        </section>
        <section className="margin-top">
            <Element name="test1" className="element">
                <div className="headline-center"><span className="blue">Get Your Website</span></div>
                <div className="sub-headline text-center">Place an order 🎁</div>
                <div className="contact-container">
                    <div className="contact-block">
                        <img alt="facebook-contact" src="/images/facebook.png" className="contact-img contact-radius shadow" />
                    </div>
                    <div className="contact-block">
                        <img alt="email-contact" src="/images/email.png" className="contact-img shadow" />
                    </div>
                    <div className="contact-block">
                        <img alt="instagram-contact" src="/images/instagram.png" className="contact-img contact-radius shadow" />
                    </div>
                </div>
            </Element>

        </section>
        <div className="navigation" style={{ justifyContent: "center", marginTop: "130px", marginBottom: "130px" }}>
            <Link to="portofolio">BROWSE PORTOFOLIO</Link>
        </div>
    </>
    )
}

export default CallToAction