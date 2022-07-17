import React from 'react'
import Animate from './Animate'

function WebsiteIdeea()
{
    return (
        <section className="margin-total">
            <Animate animation="opacity-anim-slow">
                <div className="headline-center">I will bring your <span className="blue">website</span> to life 🌳</div>
            </Animate>
            <div className="container">
                <div className="websiteideea-profile shadow" />
                <div className="paragraph">
                    <p className="text no-bottom ">The website you</p>
                    <div className="text-collapsed" style={{ gap: 20 }}>
                        <span className="blue text">dreamed of </span>
                        <span className="blue text elevate-anim">☁</span>
                    </div>
                    <p className="text"> now a <span className="black">reality</span></p>
                </div>
            </div>
        </section>
    )
}

export default WebsiteIdeea