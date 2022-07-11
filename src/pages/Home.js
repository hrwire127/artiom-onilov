import React from 'react'
import AnyWebsite from '../components/AnyWebsite'
import FullStack from '../components/FullStack'
import Intro from '../components/Intro'
import WebsiteIdeea from '../components/WebsiteIdeea'
import Workflow from '../components/Workflow'
import PortofolioBanner from '../components/PortofolioBanner'
import CallToAction from '../components/CallToAction'
import "../css/Home.css"
import "../css/AnyWebsite.css"
import "../css/FullStack.css"
import "../css/WebsiteIdeea.css"
import "../css/Intro.css"
import "../css/Workflow.css"
import "../css/PortofolioBanner.css"
import "../css/Contact.css"
import YourSolution from '../components/YourSolution'

function Home()
{
    return (
        <div>
            <Intro />
            <WebsiteIdeea />
            <FullStack />
            <AnyWebsite />
            <YourSolution />
            {/* <Workflow /> */}
            <PortofolioBanner />
            <CallToAction />
        </div>
    )
}

export default Home