import React from 'react'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Form from './Form';
import Animate from './Animate'

function CallToAction()
{
    return (<>
        <section className="margin-total">
            <div className="container">
                <div className="profile shadow" />
                <div className="paragraph">
                    <div className="headline container-left">
                        I got your back
                        <Animate animation="glow-anim"><span>☀️</span></Animate>
                    </div>
                    <div className="text">Everything you <span className="blue">want</span> </div>
                    <div className="text">in <span className="blue">one place</span>🌎</div>
                </div>
            </div>
        </section>
        <section style={{marginTop: 160, marginBottom: 160}}>
            <Element name="test1" className="element">
                <Animate animation="opacity-anim-slow">
                    <div
                        className="headline-center blue"
                        style={{ marginBottom: "30px" }}
                    >
                        Get Your Website
                    </div>
                </Animate>
                <div className="sub-headline text-center">Place an order 🎁</div>
                <Form />
                <div className="sub-headline text-center text-disabled" style={{ fontSize: "1.2rem", marginTop: "20px" }}>contact@artiomonilov.com</div>

            </Element>
        </section>
    </>
    )
}

export default CallToAction