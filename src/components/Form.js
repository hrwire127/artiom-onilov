import React from 'react'

function Form()
{
    return (
        <form>
            <div className="input-container">
                <input required placeholder='Name' id="name" className="" />
                <input placeholder='Email' id="email" className="" />
            </div>
            <input placeholder='Subject' id="subject" className="" />
            <textarea placeholder='Message' id="message" className="" />
            <div className="btn-container-center">
                <button className="action-btn">SEND ❤</button>
            </div>
        </form>
    )
}

export default Form