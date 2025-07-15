import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
	return (
		<section className="portfolio" id="portfolio">
			<h2 className="portfolio-title">Portfolio</h2>
			<div className="portfolio-grid">
				<PortfolioCard
					before="/images/before1.jpg"
					after="/images/after1.jpg"
					altBefore="Avant coupe 1"
					altAfter="Après coupe 1"
				/>
				<PortfolioCard
					before="/images/before2.jpg"
					after="/images/after2.jpg"
					altBefore="Avant coupe 2"
					altAfter="Après coupe 2"
				/>
				{/* Ajoute d'autres cartes ici */}
				
			</div>
		</section>
	);
}

export default Portfolio;