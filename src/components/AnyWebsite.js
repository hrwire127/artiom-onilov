import React, { useState, useEffect } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function AnyWebsite()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total">
            <div className="headline-center">Any type of website {isPhoneSize && (<br />)}You <span className="blue">Want</span> 💖</div>

            <section className={isPhoneSize ? "blocks" : "container"}>
                <div className="anywebsite-block shadow">
                    <p className="name">Presented</p>
                </div>
                <div className="anywebsite-block shadow">
                    <p className="name">Complex</p>
                </div>
                <div className="anywebsite-block shadow">
                    <p className="name">Full</p>
                </div>
            </section>

            <Animate animation="opacity-anim-slow">
                <div className="and-more">And More ...</div>
            </Animate>
        </section>
    )
}

export default AnyWebsite