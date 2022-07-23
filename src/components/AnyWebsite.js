import React, { useState, useEffect } from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function AnyWebsite()
{
    const [isMedSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total">
            <div className="headline-center">Any type of website {isMedSize && (<br />)}You <span className="blue">Want</span> 💖</div>

            {isMedSize
                ? (<section className="container-end">
                    <div style={{ width: "40%" }} className="contact-block">
                        <div className="block">
                            <img src="/images/pages/4-1.png" alt="4-1-img" className="anywebsite-img" />
                            <p className="name">ECommerce</p>
                        </div>
                        <div className="block">
                            <img src="/images/pages/4-2.png" alt="4-2-img" className="anywebsite-img" />
                            <p className="name">Business</p>
                        </div>
                    </div>
                    <div style={{ width: "40%" }} className="contact-block">
                        <div className="block">
                            <img src="/images/pages/4-3.png" alt="4-3-img" className="anywebsite-img" />
                            <p className="name">Blog</p>
                        </div>
                        <div className="block">
                            <img src="/images/pages/4-4.png" alt="4-4-img" className="anywebsite-img" />
                            <p className="name">Event</p>
                        </div>
                    </div>
                </section>)
                : (<section className="container-end">
                    <div className="block">
                        <img src="/images/pages/4-1.png" alt="4-1-img" className="anywebsite-img" />
                        <p className="name">ECommerce</p>
                    </div>
                    <div className="block">
                        <img src="/images/pages/4-2.png" alt="4-2-img" className="anywebsite-img" />
                        <p className="name">Business</p>
                    </div>
                    <div className="block">
                        <img src="/images/pages/4-3.png" alt="4-3-img" className="anywebsite-img" />
                        <p className="name">Blog</p>
                    </div>
                    <div className="block">
                        <img src="/images/pages/4-4.png" alt="4-4-img" className="anywebsite-img" />
                        <p className="name">Event</p>
                    </div>
                </section>)}

            <Animate animation="opacity-anim-slow">
                <div className="and-more">And More ...</div>
            </Animate>
        </section>
    )
}

export default AnyWebsite