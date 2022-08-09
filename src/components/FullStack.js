import React, { useContext } from 'react'
import Animate from './Animate'
import { langCtx, Paragraphs } from '../context/langCtx'
import useWindowSize from "../hooks/useWindowSize"

function FullStack()
{
    const langValue = useContext(langCtx)

    const Headline_0 = Paragraphs.Fullstack.part_0[langValue];
    const Headline_1 = Paragraphs.Fullstack.part_1[langValue];
    const Subheadline_0 = Paragraphs.Fullstack.part_2[langValue];
    const Subheadline_1 = Paragraphs.Fullstack.part_3[langValue];
    const Stack_0 = Paragraphs.Fullstack.part_4[langValue];
    const Stack_1 = Paragraphs.Fullstack.part_5[langValue];
    const Stack_2 = Paragraphs.Fullstack.part_6[langValue];
    const Stack_3 = Paragraphs.Fullstack.part_7[langValue];
    const Stack_4 = Paragraphs.Fullstack.part_8[langValue];
    const Stack_5 = Paragraphs.Fullstack.part_9[langValue];
    const Stack_6 = Paragraphs.Fullstack.part_10[langValue];
    const Stack_7 = Paragraphs.Fullstack.part_11[langValue];
    const Stack_8 = Paragraphs.Fullstack.part_12[langValue];
    const Stack_9 = Paragraphs.Fullstack.part_13[langValue];
    const Stack_10 = Paragraphs.Fullstack.part_14[langValue];
    const Stack_11 = Paragraphs.Fullstack.part_15[langValue];

    const [isPhoneSize] = useWindowSize(664, 0)
    const [NoText] = useWindowSize(775, 0)
    const [WrapTitle] = useWindowSize(491, 0)

    return (
        <div style={{ backgroundColor: "#3E4E88" }}>
            <section className="margin-total padding-total rounded-layout"
                style={{
                    backgroundColor: "white",
                }}
            >
                <Animate animation="step-anim-delay" start>
                    <div className="headline-sm text-center">{Headline_0}
                        {WrapTitle && (<br />)} {Headline_1}</div>
                    <div className="text-container text-center">
                        <div className="text-collapsed normal-subheadline">
                            {Subheadline_0} {isPhoneSize && (<br />)}
                            {Subheadline_1}
                        </div>
                    </div>
                </Animate>

                <Animate animation="step-anim-delay" start>
                    <div className="container-fullstack">
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/1.gif"
                                alt="fullstack-1-img"
                            />
                            <div className="headline-xs">{Stack_0}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_1}
                                </div>
                            </div>)}
                        </section>
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/2.gif"
                                alt="fullstack-2-img"
                            />
                            <div className="headline-xs">{Stack_2}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_3}
                                </div>
                            </div>)}
                        </section>
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/3.gif"
                                alt="fullstack-3-img"
                            />
                            <div className="headline-xs">{Stack_4}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_5}
                                </div>
                            </div>)}
                        </section>
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/4.gif"
                                alt="fullstack-4-img"
                            />
                            <div className="headline-xs">{Stack_6}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_7}
                                </div>
                            </div>)}
                        </section>
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/5.gif"
                                alt="fullstack-5-img"
                            />
                            <div className="headline-xs">{Stack_8}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_9}
                                </div>
                            </div>)}
                        </section>
                        <section className="full-stack-container">
                            <img className="fullstack-img"
                                src="/images/pages/fullstack/6.gif"
                                alt="fullstack-6-img"
                            />
                            <div className="headline-xs">{Stack_10}</div>
                            {!NoText && (<div className="text-container">
                                <div className="text-collapsed-xs">
                                    {Stack_11}
                                </div>
                            </div>)}
                        </section>
                    </div>
                </Animate>
            </section>
        </div>
    )
}

export default FullStack