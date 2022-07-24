import React, { useState } from 'react'
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize"

function PortofolioBanner()
{
    const [isPhoneSize] = useWindowSize(664, 0)
    const [contactText, setContactText] = useState("See All")

    return (<div style={{ backgroundColor: "#1A2C5B" }} >
        <section className="margin-total padding-total"
            style={{
                backgroundColor: "#3E4E88",
                position: "relative",
                borderBottomLeftRadius: "120px",
                borderBottomRightRadius: "120px",
            }}
        // style={isPhoneSize ? { textAlign: "center" } : {}}
        >
            <div className="portofolio-text-container">
                <div className="headline-sm text-center"
                    style={{ color: "#B8DFF0" }}
                >
                    Latest Projects
                </div>
                <div className="text-collapsed portofolio-text">
                    Here are some of my recent projects ☁
                </div>
            </div>
            {/* <div className="text-container text-center">
                <div className="text-collapsed ">
                    Check Out My Portofolio
                </div>
            </div> */}
            <div className="portofolio-container">
                <div className="portofolio-block">
                    {/* <p className="name">Ctice</p> */}
                </div>
                <div className="portofolio-block">
                    {/* <p className="name">Color Palette</p> */}
                </div>
            </div>
            <div className="portofolio-container" style={{ marginTop: 40 }}>
                <div className="portofolio-block">
                </div>
                <div className="portofolio-block">
                </div>
            </div>
            <div className="portofolio-btn-container">
                <button
                    className="action-btn-m"
                    onMouseEnter={() => setContactText("See All >")}
                    onMouseLeave={() => setContactText("See All")}
                >
                    <span>{contactText}</span>
                </button>
            </div>
            {
                // isPhoneSize
                //     ? (<Link to="portofolio" >{"BROWSE PORTOFOLIO"}</Link>)
                //     : (<>
                //         <div className="portofolio-container">
                //             <div className="portofolio-block shadow">
                //                 {/* <p className="name">Ctice</p> */}
                //             </div>
                //             <div className="portofolio-block shadow">
                //                 {/* <p className="name">Color Palette</p> */}
                //             </div>
                //             <div className="portofolio-block shadow">
                //                 {/* <p className="name">Opal</p> */}
                //             </div>
                //             <div className="portofolio-palceholder">
                //                 <Link to="portofolio" >{"SEE MORE >"}</Link>
                //             </div>
                //         </div >
                //     </>)
            }
        </section>
    </ div>
    )
}

export default PortofolioBanner