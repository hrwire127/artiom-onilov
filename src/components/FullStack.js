import React from 'react'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function FullStack()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <div style={{ backgroundColor: "#3E4E88" }}>
            <section className="margin-total padding-total rounded-layout"
                style={{
                    backgroundColor: "white",
                }}>
                <div className="headline-sm text-center">All in one Developer ♛</div>
                <div className="text-container text-center">
                    <div className="text-collapsed">
                        The entire process goes through my hands.
                    </div>
                </div>
                <div className={isPhoneSize ? "contact-block" : "container-fullstack"}>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/1.gif"
                            alt="fullstack-1-img"
                        />
                        <div className="headline-xs">UI Design</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                The UI design sketch.
                                Layout, Colors, Spacing, Style, Purpose.
                            </div>
                        </div>
                    </section>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/2.gif"
                            alt="fullstack-2-img"
                        />
                        <div className="headline-xs">Icons and Assets</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                Web assets and the entire brand.
                                Icons, images, fonts.
                            </div>
                        </div>
                    </section>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/3.gif"
                            alt="fullstack-3-img"
                        />
                        <div className="headline-xs">Copywriting</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                Written content that influences the vistior.
                            </div>
                        </div>
                    </section>
                </div>

                <div className={isPhoneSize ? "contact-block" : "container-fullstack"}>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/4.gif"
                            alt="fullstack-4-img"
                        />
                        <div className="headline-xs">Client Development</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                Fully working client structure.
                                The tool used by the user.
                            </div>
                        </div>
                    </section>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/5.gif"
                            alt="fullstack-5-img"
                        />
                        <div className="headline-xs">Server Development</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                Fully working server logic. Manages the user interaction.
                            </div>
                        </div>
                    </section>
                    <section className="full-stack-container">
                        <img className="fullstack-img"
                            src="/images/pages/fullstack/6.gif"
                            alt="fullstack-6-img"
                        />
                        <div className="headline-xs">Security</div>
                        <div className="text-container">
                            <div className="text-collapsed-xs">
                                The base security to keep any application protected.
                            </div>
                        </div>
                    </section>
                </div>
            </section >
        </div>
    )
}

export default FullStack