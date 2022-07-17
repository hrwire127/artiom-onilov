import React, { useState, useEffect, useRef } from 'react'
import { useInView } from "react-intersection-observer";

function Animate(props)
{
    const { children, animation, style } = props;

    const [trigger, setTrigger] = useState(false)
    const [ref, inView] = useInView()

    useEffect(() =>
    {
        if (inView)
        {
            setTrigger(true)
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={trigger ? animation : ""}
            style={style}
        >
            {children}
        </div>
    )
}

export default Animate