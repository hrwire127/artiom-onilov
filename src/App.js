import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portofolio from "./pages/Portofolio";
import Skills from "./pages/Skills";
import Layout from './layout/Layout'
import About from "./pages/About";

function App()
{
	return (
		<Layout>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="portofolio" element={<Portofolio />} />
				<Route path="skills" element={<Skills />} />
				<Route path="about" element={<About />} />
			</Routes>
		</Layout>
	);
}

export default App;