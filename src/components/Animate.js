import React, { useState, useEffect, useRef } from 'react'
import { useInView } from "react-intersection-observer";

function Animate(props)
{
    const { children, animation, style, start } = props;

    const [started, hasStarted] = useState(!start)
    const [trigger, setTrigger] = useState(false)
    const [ref, inView] = useInView()

    useEffect(() =>
    {
        if (inView)
        {
            setTrigger(true)
            setTimeout(() =>
            {
                hasStarted(true)
            }, 400) //anim duration
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={trigger ? animation : ""}
            style={!started ? { opacity: 0, ...style } : { opacity: 1, ...style }}
        >
            {children}
        </div >
    )
}

export default Animate