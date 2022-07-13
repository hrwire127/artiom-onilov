import React from 'react'

function FullStack()
{
    return (
        <section className="margin-total">
            <div className="headline-center">Full Stack Developer <span className="glow-anim">👑</span></div>
            <div className="container">
                <section className="full-stack-container">
                    <p className="text-center sub-headline">CLIENT</p>
                    <div className="fullstack-profile" />
                    <p className="text-center text" style={{ fontSize: "3rem" }}><span className="blue opacity-anim">Purpose-Driven</span> <br />design 🎨</p>
                </section>
                <section className="full-stack-container">
                    <p className="text-center sub-headline">SERVER</p>
                    <div className="fullstack-profile" />
                    <p className="text-center text" style={{ fontSize: "3rem" }}><span className="blue opacity-anim">Powerful</span> back-end <br />service 🔧</p>
                </section>
            </div>
        </section>
    )
}

export default FullStack