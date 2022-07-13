import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'

function Intro()
{
    const [hightlight, setHighlight] = useState()
    const [contactText, setContactText] = useState("Contact Me")

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


    return (
        <section className="container margin-total">
            <div className="paragraph">
                <div className="headline">Artiom Onilov</div>
                <div className="text-collapsed ">
                    <p className="text no-bottom">Your favorite</p>
                    <div className="grow-anim text">💙</div>
                </div>
                {hightlight
                    ? (<p
                        className="blue text opacity-anim"
                        style={{ color: types[hightlight].color }}>
                        {types[hightlight].name}
                    </p>)
                    : (<p
                        className="blue text"
                        style={{ opacity: 0 }}
                    >
                        {"."}
                    </p>)
                }
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
            <div className="profile shadow opacity-anim" />
        </section >
    )
}

export default Intro