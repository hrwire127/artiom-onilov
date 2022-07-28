import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"
import useIsMounted from "../hooks/useIsMounted"
import Spinner from "./Spinner"
import Image from './Image'

function Intro()
{
    const [hightlight, setHighlight] = useState()
    const [contactText, setContactText] = useState("Contact Me")
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
                    <div className="headline">Artiom Onilov</div>
                    <div className="text-container">
                        <div className="text-collapsed ">
                            All your web experiences in one place.
                        </div>
                        <div className="text-collapsed ">
                            Your favorite Web Developer 🤍
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
                                onMouseEnter={() => setContactText("Contact Me >")}
                                onMouseLeave={() => setContactText("Contact Me")}
                            >
                                <span>{contactText}</span>
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
                <div className="headline">Artiom Onilov</div>
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
                            All your web experiences in one place.
                        </div>
                        <div className="text-collapsed ">
                            Your favorite Web Developer 🤍
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
                                onMouseEnter={() => setContactText("Contact Me >")}
                                onMouseLeave={() => setContactText("Contact Me")}
                            >
                                <span>{contactText}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Animate>
        </section >)
}

export default Intro