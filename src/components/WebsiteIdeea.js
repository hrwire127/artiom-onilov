import React, { useEffect, useState } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function WebsiteIdeea()
{
    const [isPhoneSize] = useWindowSize(663, 0)

    return (
        <section className="margin-total">
            <Animate animation="opacity-anim-slow">
                <div className="headline-center">I will bring your {isPhoneSize && (<br />)} <span className="blue">website</span> to life 🌳</div>
            </Animate>
            {!isPhoneSize
                ? (<div className="container">
                    <div className="websiteideea-profile shadow" />
                    <div className="paragraph">
                        <p className="text no-bottom ">The website you</p>
                        <div className="text-collapsed" style={{ gap: 20 }}>
                            <span className="blue text">dreamed of </span>
                            <span className="blue text elevate-anim">☁</span>
                        </div>
                        <p className="text"> now a <span className="black">reality</span></p>
                    </div>
                </div>)
                : (<>
                    <div className="websiteideea-profile shadow" />
                    <div className="paragraph">
                        <p className="text no-bottom ">The website you</p>
                        <div className="text-collapsed" style={{ gap: 20 }}>
                            <span className="blue text">dreamed of </span>
                            <span className="blue text elevate-anim">☁</span>
                        </div>
                        <p className="text"> now a <span className="black">reality</span></p>
                    </div>
                </>)}
        </section>
    )
}

export default WebsiteIdeea