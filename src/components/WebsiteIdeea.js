import React, { useEffect, useState } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function WebsiteIdeea()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total padding-total">
            <Animate animation="opacity-anim-slow">
                <div className="headline-sm text-center">I Can Build Your Website </div>
                <div className="text-container text-center">
                    <div className="text-collapsed ">
                        Your web project 📽 can now become a reality.
                    </div>
                </div>
            </Animate>
            {!isPhoneSize
                ? (<div className="container" style={{ justifyContent: "center", alignItems: "flex-end", width: "100%" }}>
                    <img className="websiteideea-profile-1" alt="1-img" src="/images/pages/1.png" />
                    <img className="websiteideea-profile-2" alt="2-1-img" src="/images/pages/1-2.png" />
                </div>)
                : (<div style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <img className="websiteideea-profile-1" alt="1-img" src="/images/pages/1.png" />
                    <img
                        className="websiteideea-profile-2"
                        alt="2-1-img"
                        src="/images/pages/1-2.png"
                        style={{ position: "absolute", bottom: "-5%", right: "2%" }}
                    />
                </div>)}


            {/* {!isPhoneSize
                ? (<div className="container">
                    <div className="websiteideea-profile shadow" />
                    <div className="paragraph">
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
                </>)} */}
        </section>
    )
}

export default WebsiteIdeea