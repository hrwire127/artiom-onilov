import React from 'react'
import Header from '../components/Header'
import "../css/Layout.css"

function Layout(props)
{
    return (<main>
        <Header />
        <div className="content padding-total">{props.children}</div>
    </main>)
}

export default Layout