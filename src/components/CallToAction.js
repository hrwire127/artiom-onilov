import React, { useContext } from 'react'
import { Element } from 'react-scroll'
import Form from './Form';
import Animate from './Animate'
import { langCtx, Paragraphs } from '../context/langCtx'
import useWindowSize from "../hooks/useWindowSize"

function CallToAction()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.CallToAction.part_0[langValue];
    const Subheadline = Paragraphs.CallToAction.part_1[langValue];

    return (
        <section className="margin-total padding-total"
            style={{
                backgroundColor: "#1A2C5B",
            }}>
            <Animate animation="step-anim-delay" start>
                <Element name="test1" className="element">
                    <div
                        className="headline-center blue"
                        style={{ marginBottom: "30px", color: "#B8DFF0" }}
                    >
                        {Headline}
                    </div>
                    <div className="text-container text-center">
                        <div className="text-collapsed"
                            style={{ color: "rgb(176 199 209)", fontSize: "1.5rem" }}
                        >
                            {Subheadline}
                        </div>
                    </div>
                    <Form />
                    <div className="sub-headline text-center text-disabled"
                        style={{ fontSize: "1.2rem", marginTop: "20px" }}
                    >
                        contact.artiomonilov@gmail.com
                    </div>

                </Element>
            </Animate>
        </section>
    )
}

export default CallToAction