import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portofolio from "./pages/Portofolio";
import Layout from './layout/Layout'
import About from "./pages/About";
import ScrollListen from "./components/ScrollListen";

function App()
{
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

export default App;