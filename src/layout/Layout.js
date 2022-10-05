import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import Dropbar from '../components/Dropbar';
import { langCtx, Paragraphs } from '../context/langCtx'
import "../css/Layout.css"
import "../css/ScrollTop.css"

function Layout(props)
{
    const [Lang, setLang] = useState(1)

    return (<main style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}>
        <langCtx.Provider value={Lang}>
            <Header />
            {props.children}
            <Footer />
            <ScrollTop />
            <Dropbar defaultValue={Lang} values={["EN", "RO", "RU"]} onChange={(value) => setLang(value)} />
        </langCtx.Provider>
    </main>)
}

export default Layout