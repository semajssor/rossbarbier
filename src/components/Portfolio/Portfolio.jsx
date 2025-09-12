import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
	return (
		<section className="portfolio" id="portfolio">
			<h2 className="portfolio-title">Portfolio</h2>
			<div className="portfolio-grid">
				<PortfolioCard
					videoSrc="/video/tchass5.mp4"
					ariaLabel="Video coupe 5"
					posterSrc="/poster/tchass5_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass6.mp4"
					ariaLabel="Video coupe 6"
					posterSrc="/poster/tchass6_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass7.mp4"
					ariaLabel="Video coupe 7"
					posterSrc="/poster/tchass7_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass8.mp4"
					ariaLabel="Video coupe 8"
					posterSrc="/poster/tchass8_poster.png"
				/>
				<PortfolioCard
					videoSrc="/video/tchass9.mp4"
					ariaLabel="Video coupe 9"
					posterSrc="/poster/tchass9_poster.png"
				/>
				{/* Add more video cards as needed */}
			</div>
		</section>
	);
};

export default Portfolio;
