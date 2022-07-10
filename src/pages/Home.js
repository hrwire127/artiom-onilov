import React from 'react'
import AnyWebsite from '../components/AnyWebsite'
import FullStack from '../components/FullStack'
import Intro from '../components/Intro'
import WebsiteIdeea from '../components/WebsiteIdeea'
import "../css/Home.css"
import "../css/AnyWebsite.css"
import "../css/FullStack.css"
import "../css/WebsiteIdeea.css"
import "../css/Intro.css"

function Home()
{
    return (
        <div>
            <Intro />
            <WebsiteIdeea />
            <FullStack />
            <AnyWebsite />
        </div>
    )
}

export default Home