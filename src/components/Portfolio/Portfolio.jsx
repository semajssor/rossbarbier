import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
	return (
		<section className="portfolio" id="portfolio">
			<h2 className="portfolio-title">Portfolio</h2>
			<div className="portfolio-grid">
				<PortfolioCard videoSrc="/video/tchass1.MP4" ariaLabel="Video of a haircut style 1" />
				<PortfolioCard videoSrc="/video/tchass2.MP4" ariaLabel="Video of a haircut style 2" />
				<PortfolioCard videoSrc="/video/tchass3.MP4" ariaLabel="Video of a haircut style 3" />
				<PortfolioCard videoSrc="/video/tchass4.MP4" ariaLabel="Video of a haircut style 4" />
				{/* Add more video cards as needed */}
			</div>
		</section>
	);
};

export default Portfolio;
