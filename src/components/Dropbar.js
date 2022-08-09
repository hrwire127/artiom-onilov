import React, { useState, useEffect } from 'react'
import Spinner from "./Spinner"
import useWindowSize from "../hooks/useWindowSize"
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import "../css/Dropbar.css"

function Dropbar(props)
{
    const { values, onChange, defaultValue, timeout = 1000 } = props;

    const [isPhoneSize] = useWindowSize(664, 0)

    const [value, setValue] = useState(defaultValue)
    const [isChanging, setChangeState] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() =>
    {
        window.addEventListener('scroll', blurOpen);

        return () =>
        {
            window.removeEventListener('scroll', blurOpen);
        };
    })

    const onClick = (value) =>
    {
        setValue(values.indexOf(value));
        onChange(values.indexOf(value));
        setChangeState(true);
        toggleOpen()
        setTimeout(() =>
        {
            setChangeState(false);
        }, timeout);
    }

    const toggleOpen = () => 
    {
        if (isPhoneSize)
        {
            setOpened(!opened)
        }
    }
    const blurOpen = () => 
    {
        setOpened(false)
    }

    const containerClass = isPhoneSize ? (opened && "dropbar-container-opened") : "dropbar-container-static"


    return (
        <div
            onClick={toggleOpen}
            onBlur={blurOpen}
            tabIndex={0}
            className={`dropbar-container shadow-top ${containerClass}`}
        >
            {!isChanging
                ? (<>
                    {values.map(v => v !== values[value] && (
                        <div
                            onClick={() => onClick(v)}
                            key={v}
                            className="dropbar-btn"
                        >
                            {v}
                        </div>)
                    )}

                    <div className="dropbar-btn dropbar-btn-active">{values[value]}</div>
                </>)
                : (<Spinner style={{ width: "20px", height: "20px", borderWidth: "1px" }} />)}
        </div>
    )
}

export default Dropbar