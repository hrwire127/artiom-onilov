import React, { useEffect, useState, useContext } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"
import { langCtx, Paragraphs } from '../context/langCtx'

function WebsiteIdeea()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.WebsiteIdeea.part_0[langValue];
    const Subheadline_1 = Paragraphs.WebsiteIdeea.part_1[langValue];
    const Subheadline_2 = Paragraphs.WebsiteIdeea.part_2[langValue];

    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total padding-total">
            <Animate animation="step-anim-delay" start>
                <div className="headline-sm text-center">{Headline}</div>
                <div className="text-container text-center">
                    <div className="text-collapsed ">
                        {Subheadline_1} {isPhoneSize && (<br />)} {Subheadline_2}
                    </div>
                </div>
            </Animate>
            {!isPhoneSize
                ? (<Animate animation="step-anim-delay" start>
                    <div className="container" style={{ justifyContent: "center", alignItems: "flex-end", width: "100%" }}>
                        <img className="websiteideea-profile-1" alt="1-img" src="/images/pages/1.png" />
                        <img className="websiteideea-profile-2" alt="2-1-img" src="/images/pages/1-2.png" />
                    </div>
                </Animate>)
                : (<Animate animation="step-anim-delay" start><div style={{
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