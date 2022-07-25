import React from 'react'
import "../css/About.css"
import Animate from '../components/Animate'
import useWindowSize from "../hooks/useWindowSize"

function About()
{
    const [Stack] = useWindowSize(1230, 0)
    const [Small] = useWindowSize(881, 0)

    const AboutContainer = () => (
        <section className={!Stack ? "container" : ""} style={Stack ? { width: "fit-content" } : {}}>
            <Animate animation="step-anim" start>
                <div className="paragraph" >
                    <div className="headline-sm">About Me 👋</div>
                    <div className="text-container">
                        <div className="text-collapsed text-about">
                            <div>I am a web developer based in Moldova.</div>
                            <div>Throughout my journey, I have worked for</div>
                            <div>some customers localy, in multiple fields.</div>
                        </div>
                        <div className="text-collapsed text-about" style={{ marginTop: 40 }}>
                            <div>I like to serve people and help out my</div>
                            <div>customers as much as possible.</div>
                        </div>
                        <div className="text-collapsed text-about" style={{ marginTop: 40 }}>
                            <div>I do care about the my clients and look</div>
                            <div>further into contributing to this world.</div>
                        </div>
                    </div>
                </div>
                {!Stack && (<Animate animation="opacity-anim">
                    <img src="/images/github.png" alt="profile-intro-img" className="profile" />
                </Animate>)}
            </Animate>
        </section>)

    const SkillContainer = () => (
        <section
            className="margin-total-sm margin-total-about"
            style={{ width: "100%", width: "fit-content" }}
        >
            <Animate animation="step-anim" start>
                <div className="headline-sm">Relevant Skills</div>
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
                    {/* <div className="skill-container">
                        <img
                            className="skill-img"
                            src="/images/skills/csharp.png"
                            alt="csharp-skill"
                        />
                    </div> */}
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
                            src="/images/github.png"
                            alt="github-skill"
                        />
                    </a>
                </div>
                <div className="skill-row">
                    <a className="skill-container" href="https://www.adobe.com/products/photoshop.html">
                        <img
                            className="skill-img"
                            src="/images/skills/photoshop.png"
                            alt="photoshop-skill"
                        />
                    </a>
                    <a className="skill-container" href="https://www.blender.org/">
                        <img
                            className="skill-img"
                            src="/images/skills/blender.png"
                            alt="blender-skill"
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
                        <div style={{ width: "100%" }} className="center-container">
                            <AboutContainer />
                            <SkillContainer />
                        </div>)
                    : (
                        <>
                            <div style={{ width: "100%" }} className="center-container">
                                <AboutContainer />
                            </div>
                            <SkillContainer />
                        </>)}
            </div>
        </div>
    )
}

export default About