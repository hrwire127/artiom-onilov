import React, { useEffect, useState } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function WebsiteIdeea()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total padding-total">
            <Animate animation="step-anim" start>
                <div className="headline-sm text-center">I Can Build Your Website </div>
                <div className="text-container text-center">
                    <div className="text-collapsed ">
                        Your web project 📽 can now {isPhoneSize && (<br />)} become a reality.
                    </div>
                </div>
            </Animate>
            {!isPhoneSize
                ? (<Animate animation="step-anim" start>
                    <div className="container" style={{ justifyContent: "center", alignItems: "flex-end", width: "100%" }}>
                        <img className="websiteideea-profile-1" alt="1-img" src="/images/pages/1.png" />
                        <img className="websiteideea-profile-2" alt="2-1-img" src="/images/pages/1-2.png" />
                    </div>
                </Animate>)
                : (<Animate animation="step-anim" start><div style={{
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
                </div>
                </Animate>)}
        </section>
    )
}

export default WebsiteIdeea