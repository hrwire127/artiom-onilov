import React, { useEffect } from 'react'
import AnyWebsite from '../components/AnyWebsite'
import FullStack from '../components/FullStack'
import Intro from '../components/Intro'
import WebsiteIdeea from '../components/WebsiteIdeea'
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
import "../css/Form.css"
import "../css/YourSolution.css"
import YourSolution from '../components/YourSolution'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

function Home()
{
    useEffect(() =>
    {
        Events.scrollEvent.register('begin', function (to, element)
        {
        }, [])

        Events.scrollEvent.register('end', function (to, element)
        {
        });

        scrollSpy.update();
        return () =>
        {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    })


    return (
        <div className="content" style={{ flex: 1 }}>
            <Intro />
            <WebsiteIdeea />
            <FullStack />
            {/* <AnyWebsite /> */}
            {/* <YourSolution /> */}
            {/* <Workflow /> */}
            <PortofolioBanner />
            <CallToAction />
        </div>
    )
}

export default Home