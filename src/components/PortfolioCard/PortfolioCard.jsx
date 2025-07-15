import "./PortfolioCard.scss";

const PortfolioCard = ({ before, after, altBefore, altAfter }) => {
	return (
		<div className="portfolio-card">
			<div className="image-wrapper">
				<img src={before} alt={altBefore} />
			</div>
			<div className="image-wrapper">
				<img src={after} alt={altAfter} />
			</div>
		</div>
	);
}

export default PortfolioCard;