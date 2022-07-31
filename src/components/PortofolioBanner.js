import React, { useState } from 'react'
import Animate from './Animate'
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize"
import PortofolioItem from './PortofolioItem'

function PortofolioBanner()
{
    const [isPhoneSize] = useWindowSize(664, 0)
    const [NoSubheadline] = useWindowSize(883, 0)
    const [contactText, setContactText] = useState("See All")

    return (<div style={{ backgroundColor: "#1A2C5B" }}>
        <section className="margin-total padding-total  rounded-layout"
            style={{
                backgroundColor: "#3E4E88",
            }}
        >
            <Animate animation="step-anim-delay" start>
                <div className="portofolio-text-container">
                    <div className="headline-sm text-center"
                        style={{ color: "#B8DFF0" }}
                    >
                        Latest Projects
                    </div>
                    {!NoSubheadline && (
                        <div className="text-collapsed portofolio-text">
                            Here are some of my recent projects ☁
                        </div>
                    )}
                </div>
            </Animate>

            <Animate animation="step-anim-delay" start>
                {!isPhoneSize
                    ? (<>
                        <div className="portofolio-container">
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/ctice.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Ctice 📚
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/yahtzee.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Yahtzee 🎲
                                </div>
                            </div>
                        </div>
                        <div className="portofolio-container" style={{ marginTop: 40 }}>
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/palettegenerator.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Palette Generator 🎨
                                </div>

                            </div>
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/opal.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Opal ♦
                                </div>

                            </div>
                        </div>
                    </>)
                    : (<>
                        <div className="portofolio-container">
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/ctice.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Ctice 📚
                                </div>
                            </div>
                        </div>
                        <div className="portofolio-container" style={{ marginTop: 40 }}>
                            <div
                                style={{
                                    backgroundImage: `url("/images/portofolio/yahtzee.png")`
                                }}
                                alt="portofolio-img"
                                className="portofolio-block"
                            >
                                <div className="portofolio-title">
                                    Yahtzee 🎲
                                </div>
                            </div>
                        </div>
                    </>)}
                <Link to="portofolio" style={{ textDecoration: "none" }}>
                    <div className="portofolio-btn-container">
                        <button
                            className="action-btn-m"
                            onMouseEnter={() => setContactText("See All >")}
                            onMouseLeave={() => setContactText("See All")}
                        >
                            <span>{contactText}</span>
                        </button>
                    </div>
                </Link>
            </Animate>
        </section>
    </ div>
    )
}

export default PortofolioBanner