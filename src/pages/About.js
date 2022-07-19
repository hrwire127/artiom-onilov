import React from 'react'
import "../css/About.css"
import Animate from '../components/Animate'
import useWindowSize from "../hooks/useWindowSize"

function About()
{
    const [Stack] = useWindowSize(1230, 0)
    const [Small] = useWindowSize(881, 0)

    console.log(Small)

    const AboutContainer = () => (
        <section className={!Stack ? "container" : ""} style={Stack ? { width: "fit-content" } : {}}>
            <div className="paragraph" >
                <div className="headline">About Me 👋</div>
                <div className=" ">
                    <section className="text info-text text-about" style={{}}>
                        <div>I am a web developer based in Moldova.</div>
                        <div>Throughout my journey 🗺️, I have worked for</div>
                        <div>some customers localy 🏠, in multiple fields.</div>
                    </section>
                    <section className="text info-text text-about" style={{ marginTop: "20px" }}>
                        <div>I like to serve people 💖 and help out my</div>
                        <div>customers as much as possible 🌟.</div>
                    </section>
                    <section className="text info-text text-about" style={{ marginTop: "20px" }}>
                        <div>I do care about the people who I work with and </div>
                        <div>look further into contributing to this world 🌎.</div>
                    </section>
                </div>
            </div>
            {!Stack && (<Animate animation="opacity-anim">
                <div className="profile shadow" />
            </Animate>)}
        </section>)

    const SkillContainer = () => (
        <section
            className="margin-total-sm"
            style={{ width: "100%", width: "fit-content" }}
        >
            <div className="headline">Relevant Skills</div>
            <div className="sub-headline">highly mastered and heavly used</div>
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
                        src="/images/skills/github.png"
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
        </section>
    )

    return (<div className="full-container">
        {!Stack || Small
            ? (<div className="center-container">
                <AboutContainer />
                <SkillContainer />
            </div>)
            : (<>
                <div className="center-container">
                    <AboutContainer />
                </div>
                <SkillContainer />
            </>)}

    </div>
    )
}

export default About