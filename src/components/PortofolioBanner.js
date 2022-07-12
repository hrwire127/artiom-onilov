import React from 'react'
import { Link, Element } from 'react-scroll'

function PortofolioBanner()
{
    return (
        <section className="margin-total">
            <div className="headline-center">Not Convinced? 📚</div>
            <div className="portofolio-container">
                <div className="portofolio-block shadow">
                    <div className="portofolio-img" />
                    <p className="name">Ctice</p>
                </div>
                <div className="portofolio-block shadow">
                    <div className="portofolio-img" />
                    <p className="name">Color Palette</p>
                </div>
                <div className="portofolio-block shadow">
                    <div className="portofolio-img" />
                    <p className="name">Opal</p>
                </div>
                <div className="portofolio-block shadow">
                    <Link to="portofolio">See More</Link>
                </div>
            </div>
        </section>
    )
}

export default PortofolioBanner