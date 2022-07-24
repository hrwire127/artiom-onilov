import React, { useState, useEffect, useCallback } from 'react'
import { animateScroll as scroll } from 'react-scroll'

function ScrollTop()
{
    const [toggled, setToggled] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [y, setY] = useState(window.scrollY);

    const maxTopDistance = -1000
    const minTopDistance = -4000
    const scrollDuration = 1000

    const handleNavigation = useCallback(e =>
    {
        const window = e.currentTarget;

        const header = document.querySelector('header');
        const distanceToTop = header.getBoundingClientRect().top;

        if (y > window.scrollY)
        {
            if (distanceToTop < maxTopDistance && !blocked)
            {
                setToggled(true)
            }
            else
            {
                setToggled(false)
            }
        }
        else if(distanceToTop < minTopDistance && !blocked)
        {
            setToggled(true)
        }
        else if (!blocked)
        {
            setToggled(false)
        }
        setY(window.scrollY);
    }, [y]
    );

    const scrollToTop = () =>
    {
        scroll.scrollToTop({ duration: scrollDuration })
        setBlocked(true)
        setTimeout(() =>
        {
            setBlocked(false)
        }, scrollDuration)
    }

    useEffect(() =>
    {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () =>
        {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div onClick={scrollToTop} className={`scroll-top shadow-top ${!toggled && "scroll-disappear"}`} >
            <div className="icon-top">&#10148;</div>
        </div>
    )
}

export default ScrollTop