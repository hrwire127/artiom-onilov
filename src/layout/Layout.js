import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop'
import "../css/Layout.css"
import "../css/ScrollTop.css"

function Layout(props)
{
    return (<main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Header />
        <div className="content padding-total" style={{ flex: 1 }}>{props.children}</div>
        <Footer />
        <ScrollTop />
    </main>)
}

export default Layout