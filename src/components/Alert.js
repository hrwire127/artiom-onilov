import React from 'react'
import "../css/Alert.css"

function Alert(props)
{
    const { message, type = "info" } = props;

    const presetTypes = [
        { type: "error", icon: "⛔", color: "red" },
        { type: "info", icon: "ℹ️", color: "blue" },
        { type: "success", icon: "✔️", color: "green" }
    ]

    const myType = presetTypes.filter(t => t.type === type)

    return message && (
        <div className="alert-container shadow-top" style={{ backgroundColor: myType[0].color }}>
            {myType[0].icon} {message}
        </div>
    )
}

export default Alert