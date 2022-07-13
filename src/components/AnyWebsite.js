import React from 'react'

function AnyWebsite()
{
    return (
        <section className="margin-total">
            <div className="headline-center">Any type of website You <span className="blue">Want</span> 💖</div>
            <section className="anywebsite-container">
                <div className="anywebsite-block shadow">
                    <div className="anywebsite-content" />
                    <p className="name">ECommerce</p>
                </div>
                <div className="anywebsite-block shadow">
                    <div className="anywebsite-content" />
                    <p className="name">Personal</p>
                </div>
                <div className="anywebsite-block shadow">
                    <div className="anywebsite-content" />
                    <p className="name">Bussiness</p>
                </div>
                <div className="anywebsite-block shadow">
                    <div className="anywebsite-content" />
                    <p className="name">Social</p>
                </div>
            </section>
            <div className="and-more opacity-anim">And More ...</div>
        </section>
    )
}

export default AnyWebsite