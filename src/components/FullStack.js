import React from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function FullStack()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total">
            <div className="headline-center container-center" style={{ gap: 10, flexWrap: "wrap" }}>
                <div>Full Stack</div>
                <div className="container-left">
                    Developer
                    <Animate animation="glow-anim"
                    ><span> 👑</span>
                    </Animate>
                </div>
            </div>
            <div className={isPhoneSize ? "contact-block" : "container"}>
                <section className="full-stack-container">
                    <p className="text-center sub-headline">CLIENT</p>
                    <div className="fullstack-profile" />
                    <Animate animation="opacity-anim-slow">
                        <p
                            className="text-center text"
                        >
                            <span className="blue">Purpose-Driven</span> <br />design 🎨
                        </p>
                    </Animate>
                </section>
                <section className="full-stack-container">
                    <p className="text-center sub-headline">SERVER</p>
                    <div className="fullstack-profile" />
                    <Animate animation="opacity-anim-slow">
                        <p className="text-center text"
                        >
                            <span className="blue">Powerful</span> back-end <br />service 🔧
                        </p>
                    </Animate>

                </section>
            </div>
        </section >
    )
}

export default FullStack