import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Hero />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}
export default App;