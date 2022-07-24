import React from 'react'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Form from './Form';
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function CallToAction()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total padding-total"
            style={{
                backgroundColor: "#1A2C5B",
                position: "relative",
            }}>
            <Element name="test1" className="element">
                <Animate animation="opacity-anim-slow">
                    <div
                        className="headline-center blue"
                        style={{ marginBottom: "30px", color: "#B8DFF0" }}
                    >
                        Get Your Website
                    </div>
                </Animate>
                <div className="text-container text-center">
                    <div className="text-collapsed"
                        style={{ color: "rgb(176 199 209)", fontSize: "1.5rem" }}
                    >
                        Place an order 🎁
                    </div>
                </div>
                <Form />
                <div className="sub-headline text-center"
                    style={{ fontSize: "1.2rem", marginTop: "20px", color: "rgb(176 199 209 / 50%)" }}
                >
                    contact@artiomonilov.com
                </div>

            </Element>
        </section>
    )
}

export default CallToAction