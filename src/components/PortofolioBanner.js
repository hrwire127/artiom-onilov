import React from 'react'
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize"

function PortofolioBanner()
{
    const [isPhoneSize] = useWindowSize(664, 0)

    return (
        <section className="margin-total" style={isPhoneSize ? { textAlign: "center" } : {}}>
            <div className="headline-center">Not Convinced? 📚</div>
            <div className="sub-headline text-center" style={{ marginBottom: 30 }}>CHECK OUT MY PORTOFOLIO</div>

            {isPhoneSize
                ? (<Link to="portofolio" >{"BROWSE PORTOFOLIO"}</Link>)
                : (<>
                    <div className="portofolio-container">
                        <div className="portofolio-block shadow">
                            {/* <p className="name">Ctice</p> */}
                        </div>
                        <div className="portofolio-block shadow">
                            {/* <p className="name">Color Palette</p> */}
                        </div>
                        <div className="portofolio-block shadow">
                            {/* <p className="name">Opal</p> */}
                        </div>
                        <div className="portofolio-palceholder">
                            <Link to="portofolio" >{"SEE MORE >"}</Link>
                        </div>
                    </div >
                </>)
            }
        </section >
    )
}

export default PortofolioBanner