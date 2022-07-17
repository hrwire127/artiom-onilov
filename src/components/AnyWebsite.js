import React, { useState, useEffect } from 'react'
import Animate from './Animate'

function AnyWebsite()
{
    return (
        <section className="margin-total">
            <div className="headline-center">Any type of website You <span className="blue">Want</span> 💖</div>

            <section style={{ position: "relative", overflow: 'hidden' }}>
                <div style={{ width: "110%", height: "120%", position: "absolute", top: -8, left: -66, zIndex: 10 }} className="total-shadow" />
                <div className="container-total">
                    <section className="anywebsite-container anywebsite-slide">
                        <div className="anywebsite-block shadow">
                            <p className="name">ECommerce</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Personal</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Bussiness</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Social</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">ECommerce</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Personal</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Bussiness</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Social</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">ECommerce</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Personal</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Bussiness</p>
                        </div>
                        <div className="anywebsite-block shadow">
                            <p className="name">Social</p>
                        </div>
                    </section>
                </div>
            </section>

            <Animate animation="opacity-anim-slow">
                <div className="and-more">And More ...</div>
            </Animate>
        </section>
    )
}

export default AnyWebsite