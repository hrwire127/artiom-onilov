import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function Intro()
{
    const [hightlight, setHighlight] = useState()
    const [contactText, setContactText] = useState("Contact Me")
    const [isPhoneSize] = useWindowSize(664, 0)


    return (<section className="container margin-total padding-total"
        style={{
            backgroundColor: "#f2f2f2",
            position: "relative",
            borderBottomLeftRadius: "120px",
            borderBottomRightRadius: "120px",
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
                        className="action-btn-m"
                        onMouseEnter={() => setContactText("Contact Me >")}
                        onMouseLeave={() => setContactText("Contact Me")}
                    >
                        <span>{contactText}</span>
                    </button>
                </Link>
            </div>
        </div>
        <Animate animation="opacity-anim">
            <div className="profile" />
        </Animate>

        {/* <img src="/images/1-enter.png" alt="1-enter-img"
            style={{ position: "absolute", bottom: 0, right: 0, width: 200 }}
        />
        <img src="/images/1-enter.png" alt="1-enter-img"
            style={{ position: "absolute", bottom: 0, left: 0, width: 200, transform: "scaleX(-1)" }}
        /> */}
    </section >)


    //!isPhoneSize
    //     ? ()
    //     : (<section className="margin-total" >
    //         <div className="headline-center">Artiom Onilov</div>
    //         <Animate animation="opacity-anim">
    //             <div className="profile shadow" />
    //         </Animate>
    //         <div className="paragraph">
    //             <div className="text-collapsed ">
    //                 <p className="text no-bottom">Your favorite</p>
    //                 <Animate animation="grow-anim">
    //                     <div className="text">
    //                         💙
    //                     </div>
    //                 </Animate>
    //             </div>
    //             <Highlight />
    //         </div>
    //         <div className="btn-container-left">
    //             <Link
    //                 activeClass="active"
    //                 to="test1"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={50}
    //                 duration={500}
    //             >
    //                 <button
    //                     className="action-btn shadow"
    //                     onMouseEnter={() => { setContactText("Contact Me >") }}
    //                     onMouseLeave={() => { setContactText("Contact Me") }}
    //                 >
    //                     {contactText}
    //                 </button>
    //             </Link>
    //         </div>
    //     </section>)
}

export default Intro