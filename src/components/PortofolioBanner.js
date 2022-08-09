import React, { useState, useContext } from 'react'
import Animate from './Animate'
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize"
import { langCtx, Paragraphs } from '../context/langCtx'
import PortofolioItem from './PortofolioItem'

function PortofolioBanner()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.PortofolioBanner.part_0[langValue];
    const Subheadline = Paragraphs.PortofolioBanner.part_1[langValue];
    const BtnText = Paragraphs.PortofolioBanner.part_2[langValue];

    const [isPhoneSize] = useWindowSize(664, 0)
    const [NoSubheadline] = useWindowSize(883, 0)
    const [hoverText, setHoverText] = useState("")

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
                        {Headline}
                    </div>
                    {!NoSubheadline && (
                        <div className="portofolio-text">
                            {Subheadline}
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
                            onMouseEnter={() => setHoverText(">")}
                            onMouseLeave={() => setHoverText("")}
                        >
                            <span>{BtnText} {hoverText || ""}</span>
                        </button>
                    </div>
                </Link>
            </Animate>
        </section>
    </ div>
    )
}

export default PortofolioBanner