import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
	return (
		<section className="portfolio" id="portfolio">
			<h2 className="portfolio-title">Portfolio</h2>
			<div className="portfolio-grid">
				<PortfolioCard
					videoSrc="/video/tchass1.MP4"
					ariaLabel="Video coupe 1"
					posterSrc="/poster/tchass1_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass2.MP4"
					ariaLabel="Video coupe 2"
					posterSrc="/poster/tchass2_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass3.MP4"
					ariaLabel="Video coupe 3"
					posterSrc="/poster/tchass3_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass4.MP4"
					ariaLabel="Video coupe 4"
					posterSrc="/poster/tchass4_poster.png"
				/>
				{/* Add more video cards as needed */}
			</div>
		</section>
	);
};

export default Portfolio;
