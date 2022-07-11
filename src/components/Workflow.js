import React from 'react'

function Workflow()
{
    return (
        <section className="margin-total">
            <section className="workflow-container">
                <div className="workflow-block">
                    <p className="headline" style={{ color: "red" }}>🥇Faster</p>
                    <p className="text">Produced at an <span className="blue">elite</span> level</p>
                </div>
                <div className="workflow-block">
                    <p className="headline" style={{ color: "purple" }}>🎁Better</p>
                    <p className="text">Carefully <span className="blue">prepared</span></p>
                </div>
                <div className="workflow-block">
                    <p className="headline" style={{ color: "green" }}>💸Cheaper</p>
                    <p className="text">Your poket's <span className="blue">favorite</span></p>
                </div>
            </section>
        </section>
    )
}

export default Workflow