import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

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
            <div className="paragraph">
                <div className="headline">Artiom Onilov</div>
                <div className="text-container">
                    <div className="text-collapsed ">
                        All your web experiences in one place.
                    </div>
                    <div className="text-collapsed ">
                        Your favorite Web Developer ❤
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
            <Animate animation="opacity-anim">
                <img src="/images/github.png" alt="profile-intro-img" className="profile" />
            </Animate>
        </section >)
        : (<section
            className="margin-total padding-total padding-total-intro rounded-layout"
            style={{
                backgroundColor: "#f2f2f2"
            }}
        >
            <div className="headline">Artiom Onilov</div>
            <Animate animation="opacity-anim">
                <div className="container-center">
                    <img src="/images/github.png" alt="profile-intro-img" className="profile" />
                </div>
            </Animate>
            <div className="paragraph">
                <div className="text-container">
                    <div className="text-collapsed ">
                        All your web experiences in one place.
                    </div>
                    <div className="text-collapsed ">
                        Your favorite Web Developer ❤
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
        </section >)
}

export default Intro