import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NativeReviews from "./components/NativeReviews/NativeReviews.jsx";

const App = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch("/api/get-reviews");

				if (!response.ok) {
					throw new Error("Erreur réseau lors de la récupération des avis");
				}

				const data = await response.json();

				if (data.reviews) {
					setReviews(data.reviews);
				}
			} catch (error) {
				console.error("Erreur lors de la récupération des avis:", error);
			}
		};

		fetchReviews();
	}, []);

	// // TEST AVIS POUR LE DESIGN, À SUPPRIMER QUAND L'API SERA FONCTIONNELLE
	// useEffect(() => {
	// 	// Données de test pour voir si ton design NativeReviews.scss est beau
	// 	const fakeReviews = [
	// 		{
	// 			author_name: "Client Satisfait",
	// 			rating: 5,
	// 			text: "Super service !",
	// 			relative_time_description: "il y a 2 jours",
	// 		},
	// 		{
	// 			author_name: "Jean Dupont",
	// 			rating: 4,
	// 			text: "Très pro, je recommande.",
	// 			relative_time_description: "il y a 1 semaine",
	// 		},
	// 	];
	// 	setReviews(fakeReviews);
	// }, []);

	return (
		<div className="app">
			<Navbar />
			<Hero />
			<Portfolio />
			<Contact />
			<NativeReviews reviews={reviews} />
			<Footer />
		</div>
	);
};
export default App;
