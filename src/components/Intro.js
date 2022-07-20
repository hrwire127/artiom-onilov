import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function Intro()
{
    const [hightlight, setHighlight] = useState()
    const [contactText, setContactText] = useState("Contact Me")
    const [isPhoneSize] = useWindowSize(664, 0)

    const types = [
        { name: "", color: "red" },
        { name: "Web Designer", color: "red" },
        { name: "Engineer", color: "green" },
        { name: "Freelancer", color: "purple" },
        { name: "Web Developer", color: "#1363df" }
    ]

    const timeout = (delay) =>
    {
        return new Promise(async (resolve, reject) =>
        {
            setTimeout(() =>
            {
                resolve()
            }, delay)
        })
    }

    useEffect(() =>
    {
        (async function i()
        {
            setHighlight(0)
            await timeout(400)
            setHighlight(null)
            await timeout(100)
            setHighlight(1)
            await timeout(600)
            setHighlight(null)
            await timeout(100)
            setHighlight(2)
            await timeout(600)
            setHighlight(null)
            await timeout(100)
            setHighlight(3)
            await timeout(600)
            setHighlight(null)
            await timeout(100)
            setHighlight(4)
        })()
    }, [])


    const Highlight = () => hightlight
        ? (<p
            className={`blue text ${hightlight < types.length - 1 ? "opacity-anim" : ""}`}
            style={{ color: types[hightlight].color }}>
            {types[hightlight].name}
        </p>)
        : (<p
            className="blue text"
            style={{ opacity: 0 }}
        >
            {"."}
        </p>)

    return !isPhoneSize
        ? (<section className="container margin-total" >
            <div className="paragraph">
                <div className="headline">Artiom Onilov</div>
                <div className="text-collapsed ">
                    <p className="text no-bottom">Your favorite</p>
                    <Animate animation="grow-anim">
                        <div className="text">
                            💙
                        </div>
                    </Animate>
                </div>
                <Highlight />
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
                            className="action-btn shadow"
                            onMouseEnter={() => { setContactText("Contact Me >") }}
                            onMouseLeave={() => { setContactText("Contact Me") }}
                        >
                            {contactText}
                        </button>
                    </Link>
                </div>
            </div>
            <Animate animation="opacity-anim">
                <div className="profile shadow" />
            </Animate>
        </section >)
        : (<section className="margin-total" >
            <div className="headline-center">Artiom Onilov</div>
            <Animate animation="opacity-anim">
                <div className="profile shadow" />
            </Animate>
            <div className="paragraph">
                <div className="text-collapsed ">
                    <p className="text no-bottom">Your favorite</p>
                    <Animate animation="grow-anim">
                        <div className="text">
                            💙
                        </div>
                    </Animate>
                </div>
                <Highlight />
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
                        className="action-btn shadow"
                        onMouseEnter={() => { setContactText("Contact Me >") }}
                        onMouseLeave={() => { setContactText("Contact Me") }}
                    >
                        {contactText}
                    </button>
                </Link>
            </div>
        </section>)
}

export default Intro