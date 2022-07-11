import React from 'react'

function PortofolioBanner()
{
    return (
        <section className="margin-total">
            <div className="headline-center">Need Evidence? 📚</div>
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
                    <p className="name">And More...</p>
                </div>
            </div>
        </section>
    )
}

export default PortofolioBanner