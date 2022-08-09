import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import Dropbar from '../components/Dropbar';
import "../css/Layout.css"
import "../css/ScrollTop.css"

function Layout(props)
{
    return (<main style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}>
        <Header />
        {props.children}
        <Footer />
        <ScrollTop />
        <Dropbar defaultValue={0} values={["EN", "RO", "RU"]} onChange={(value) => {}} />
    </main>)
}

export default Layout