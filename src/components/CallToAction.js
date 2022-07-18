import React from 'react'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Form from './Form';
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function CallToAction()
{
    const [isPhoneSize] = useWindowSize(663, 0)

    return (<>
        <section className="margin-total">
            <div className={isPhoneSize ? "content-block" : "container"}>
                {!isPhoneSize && (<div className="profile shadow" style={{ marginTop: 30 }} />)}
                <div className="paragraph">
                    <div className={isPhoneSize ? "headline container-center" : "headline container-left"}>
                        I got your back
                        <Animate animation="glow-anim"><span>☀️</span></Animate>
                    </div>
                    <div className="text">Everything you </div>
                    <div className="text"><span className="blue">want</span>, just in</div>
                    <div className="text"><span className="blue">one place</span>🌎</div>
                </div>
                {isPhoneSize && (<div className="profile shadow" style={{ marginTop: 30 }} />)}
            </div>
        </section>
        <section style={{ marginTop: 160, marginBottom: 160 }}>
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