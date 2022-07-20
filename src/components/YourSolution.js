import React, { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import Animate from './Animate'
import useWindowSize from "../hooks/useWindowSize"

function YourSolution()
{
    const [stage, setStage] = useState()
    const [ref, inView] = useInView()
    const [isPhoneSize] = useWindowSize(664, 0)

    useEffect(() =>
    {
        if (inView && !stage)
        {
            (async () =>
            {
                setStage(-1)
                await timeout(400)
                setStage(0)
                await timeout(800)
                setStage(1)
                await timeout(800)
                setStage(2)
            })()
        }
    }, [inView]);

    const timeout = (delay) =>
    {
        return new Promise(async (resolve, reject) =>
        {
            setTimeout(() =>
            {
                resolve()
            }, delay)
        })
    }


    return (
        <section
            className="margin-total"
        >
            <div className="headline-center container-center">
                <div className="container-center" style={{ gap: 10, flexWrap: "wrap" }}>
                    <div><span className="blue">Unique </span> and</div>
                    <div className="container-left">
                        Personalized
                        <Animate animation="glow-anim">
                            <span>🌟</span>
                        </Animate>
                    </div>
                </div>
            </div>
            <div className={isPhoneSize ? "content-block" : "container"}>
                <div className="profile shadow" />
                <div className="paragraph">
                    <div className={isPhoneSize ? "headline-center" : "headline"}>No copying 📝</div>
                    {stage >= 0 ? (
                        <div className="text opacity-anim">Your <span className="blue">ideea</span></div>
                    ) : <div className="text" style={{ opacity: 0 }}>{"."}</div>}

                    {stage >= 1 ? (
                        <div className="text opacity-anim" >Your <span className="blue">solution</span></div>
                    ) : <div className="text" style={{ opacity: 0 }}>{"."}</div>}

                    {stage >= 2 ? (
                        <div className="text opacity-anim" >Your <span className="black">own</span> <span className="blue">website</span></div>
                    ) : <div
                        ref={ref}
                        className="text"
                        style={{ opacity: 0 }}
                    >
                        {"."}
                    </div>}

                </div>
            </div>
        </section>
    )
}

export default YourSolution