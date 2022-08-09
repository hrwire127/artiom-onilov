import React, { useContext } from 'react'
import "../css/About.css"
import Animate from '../components/Animate'
import useWindowSize from "../hooks/useWindowSize"
import { langCtx, Paragraphs } from '../context/langCtx'
import Image from '../components/Image'

function About()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.About.part_0[langValue];
    const About_0 = Paragraphs.About.part_1[langValue];
    const About_1 = Paragraphs.About.part_2[langValue];
    const About_2 = Paragraphs.About.part_3[langValue];
    const About_3 = Paragraphs.About.part_4[langValue];
    const About_4 = Paragraphs.About.part_5[langValue];
    const About_5 = Paragraphs.About.part_6[langValue];
    const About_6 = Paragraphs.About.part_7[langValue];
    const About_7 = Paragraphs.About.part_8[langValue];

    const [Stack] = useWindowSize(1230, 0)
    const [Small] = useWindowSize(881, 0)

    const AboutContainer = () => (
        <section className={!Stack ? "container" : ""} style={Stack ? { width: "fit-content" } : {}}>
            <Animate animation="step-anim" start>
                <div className="paragraph" >
                    <div className="headline-sm">{Headline}</div>
                    <div className="text-container">
                        <div className="text-collapsed text-about">
                            <div>{About_0}</div>
                            <div>{About_1}</div>
                            <div>{About_2}</div>
                        </div>
                        <div className="text-collapsed text-about" style={{ marginTop: 40 }}>
                            <div>{About_3}</div>
                            <div>{About_4}</div>
                        </div>
                        <div className="text-collapsed text-about" style={{ marginTop: 40 }}>
                            <div>{About_5}</div>
                            <div>{About_6}</div>
                        </div>
                    </div>
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                {!Stack && (
                    <Image
                        src="/images/profile/about.png"
                        alt="profile-about-img"
                        className="profile-about"
                    />)}
            </Animate>
        </section>)

    const SkillContainer = () => (
        <section
            className="margin-total-sm margin-total-about"
            style={{ //width: "100%",
                width: "fit-content"
            }}
        >
            <Animate animation="step-anim" start>
                <div className="headline-sm">{About_7}</div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="skill-row" >
                    <div className="skill-container">
                        <img
                            className="skill-img"
                            src="/images/skills/html.png"
                            alt="html-skill"
                        />
                    </div>
                    <div className="skill-container">
                        <img
                            className="skill-img"
                            src="/images/skills/css.png"
                            alt="css-skill"
                        />
                    </div>
                    <div className="skill-container">
                        <img
                            className="skill-img"
                            src="/images/skills/js.png"
                            alt="js-skill"
                        />
                    </div>
                    <a className="skill-container" href="https://www.mongodb.com/">
                        <img
                            className="skill-img"
                            src="/images/skills/mongodb.png"
                            alt="mongodb-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://nodejs.org/">
                        <img
                            className="skill-img"
                            src="/images/skills/nodejs.png"
                            alt="nodejs-skill"
                        />
                    </a>
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="skill-row">
                    <a className="skill-container" href="https://reactjs.org/">
                        <img
                            className="skill-img"
                            src="/images/skills/react.png"
                            alt="react-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://nextjs.org/">
                        <img
                            className="skill-img"
                            src="/images/skills/nextjs.png"
                            alt="nextjs-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://mui.com/">
                        <img
                            className="skill-img"
                            src="/images/skills/mui.png"
                            alt="mui-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://expressjs.com/">
                        <img
                            style={{ height: 23 }}
                            className="skill-img"
                            src="/images/skills/express.png"
                            alt="express-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://git-scm.com/">
                        <img
                            className="skill-img"
                            src="/images/skills/git.png"
                            alt="git-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://github.com/">
                        <img
                            className="skill-img"
                            src="/images/skills/github-dark.png"
                            alt="github-skill"
                        />
                    </a>
                </div>
            </Animate>
            <Animate animation="step-anim" start>
                <div className="skill-row">
                    <a className="skill-container" href="https://www.adobe.com/products/photoshop.html">
                        <img
                            className="skill-img"
                            src="/images/skills/photoshop.png"
                            alt="photoshop-skill"
                        />
                    </a>
                </div>
            </Animate>
        </section>
    )

    return (
        <div className="content"
            style={{
                flex: 1,
                backgroundColor: "#1A2C5B"
            }}
        >
            <div className="margin-total 
                    padding-total 
                    padding-total-intro 
                    rounded-layout 
                    full-container"
                style={{
                    backgroundColor: "#f2f2f2"
                }}
            >
                {!Stack || Small
                    ? (
                        <div style={{ width: "100%" }} className={Small ? "center-container" : "left-container"}>
                            <AboutContainer />
                            <SkillContainer />
                        </div>)
                    : (<>
                        <div style={{ width: "100%" }} className="">
                            <AboutContainer />
                        </div>
                        <SkillContainer />
                    </>)}
            </div>
        </div>
    )
}

export default About