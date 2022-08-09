import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portofolio from "./pages/Portofolio";
import Layout from './layout/Layout'
import About from "./pages/About";
import ScrollListen from "./components/ScrollListen";

function App()
{
	const [loading, setLoading] = useState(true)

	useEffect(() =>
	{
		// demoAsyncCall().then(() => setLoading(false))
		setLoading(false)
	}, [])

	if (loading)
	{
		return null;
	}

	return (
		<Layout>
			<ScrollListen />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="portofolio" element={<Portofolio />} />
				<Route path="about" element={<About />} />
			</Routes>
		</Layout>
	);
}

function demoAsyncCall()
{
	return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;