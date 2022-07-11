import React from 'react'
import { Link, Element } from 'react-scroll'

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
        <section className="margin-total">
            <Element name="test1" className="element">
                <div className="headline-center"><span className="blue">Contact Me</span></div>
                <div className="sub-headline text-center">Place an order 🎁</div>
                <div className="contact-container">
                    <div className="contact-block">
                        <div className="contact-img shadow" />
                        <p className="sub-heading">Facebook</p>
                    </div>
                    <div className="contact-block">
                        <div className="contact-img shadow" />
                        <p className="sub-heading">Instagram</p>
                    </div>
                    <div className="contact-block">
                        <div className="contact-img shadow" />
                        <p className="sub-heading">LinkedIn</p>
                    </div>
                    <div className="contact-block">
                        <div className="contact-img shadow" />
                        <p className="sub-heading">Email</p>
                    </div>
                </div>
            </Element>
        </section>
    </>
    )
}

export default CallToAction