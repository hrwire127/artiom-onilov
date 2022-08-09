import React, { useContext, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"
import { langCtx, Paragraphs } from '../context/langCtx'
import Spinner from "./Spinner"
import Image from './Image'

function Intro()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.Intro.part_0[langValue];
    const ContactText = Paragraphs.Intro.part_3[langValue];
    const Subheadline_1 = Paragraphs.Intro.part_1[langValue];
    const Subheadline_2 = Paragraphs.Intro.part_2[langValue];

    const [hoverText, setHoverText] = useState("")
    const [isPhoneSize] = useWindowSize(664, 0)


    return !isPhoneSize
        ? (<section
            className="container margin-total padding-total padding-total-intro rounded-layout"
            style={{
                backgroundColor: "#f2f2f2"
            }}
        >
            <Animate animation="step-anim" start>
                <div className="paragraph">
                    <div className="headline">{Headline}</div>
                    <div className="text-container">
                        <div className="text-collapsed ">
                            {Subheadline_1}
                        </div>
                        <div className="text-collapsed ">
                            {Subheadline_2}
                        </div>
                        {/* Freelancer, Engineer ... , move left slash (fade)*/}
                    </div>
                    <div className="btn-container-left">
                        <Link
                            activeClass="active"
                            to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <button
                                className="action-btn-m intro-btn"
                                onMouseEnter={() => setHoverText(">")}
                                onMouseLeave={() => setHoverText()}
                            >
                                <span>{ContactText} {hoverText || ""}</span>
                            </button> 
                        </Link>
                    </div>
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                <Image
                    src="/images/profile/intro.jpg"
                    alt="profile-intro-img"
                    className="profile"
                    placeholder={<Spinner />}
                />
            </Animate>
        </section >)
        : (<section
            className="margin-total padding-total padding-total-intro rounded-layout"
            style={{
                backgroundColor: "#f2f2f2"
            }}
        >
            <Animate animation="step-anim" start>
                <div className="headline">{Headline}</div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="container-center">
                    <Image
                        src="/images/profile/intro.jpg"
                        alt="profile-intro-img"
                        className="profile"
                        placeholder={<Spinner />}
                    />
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="paragraph">
                    <div className="text-container">
                        <div className="text-collapsed ">
                            {Subheadline_1}
                        </div>
                        <div className="text-collapsed ">
                            {Subheadline_2}
                        </div>
                        {/* Freelancer, Engineer ... , move left slash (fade)*/}
                    </div>
                    <div className="btn-container-left btn-intro">
                        <Link
                            activeClass="active"
                            to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                        <button
                            className="action-btn-m intro-btn"
                            onMouseEnter={() => setHoverText(">")}
                            onMouseLeave={() => setHoverText()}
                        >
                            <span>{ContactText} {hoverText || ""}</span>
                        </button> 
                        </Link>
                    </div>
                </div>
            </Animate>
        </section >)
}

export default Intro