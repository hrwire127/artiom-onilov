import React, { useState, useEffect, useCallback } from 'react'
import { animateScroll as scroll } from 'react-scroll'

function ScrollTop()
{
    const [toggled, setToggled] = useState(false)
    const [y, setY] = useState(window.scrollY);

    const maxTopDistance = -1000

    const handleNavigation = useCallback(
        e =>
        {
            const window = e.currentTarget;
            if (y > window.scrollY)
            {
                const header = document.querySelector('header');
                const distanceToTop = header.getBoundingClientRect().top;

                if (distanceToTop < maxTopDistance)
                {
                    setToggled(true)
                }
                else
                {
                    setToggled(false)
                }
            }
            setY(window.scrollY);
        }, [y]
    );

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
        <div onClick={() => scroll.scrollToTop()} className={`scroll-top shadow-top ${!toggled && "scroll-disappear" }`} >
            <div className="icon-top">&#10148;</div>
        </div >
    )
}

export default ScrollTop