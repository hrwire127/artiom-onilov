import React from 'react'
import Animate from './Animate'

function FullStack()
{
    return (
        <section className="margin-total">
            <div className="headline-center container-center">
                Full Stack Developer
                <Animate animation="glow-anim"><span>👑</span></Animate>
            </div>
            <div className="container">
                <section className="full-stack-container">
                    <p className="text-center sub-headline">CLIENT</p>
                    <div className="fullstack-profile" />
                    <Animate animation="opacity-anim-slow">
                        <p
                            className="text-center text"
                            style={{ fontSize: "3rem" }}
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
                            style={{ fontSize: "3rem" }}
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