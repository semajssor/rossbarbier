import { useRef, useEffect } from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({ videoSrc, ariaLabel, posterSrc }) => {
	
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.8,
		};

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				const isMobile = window.innerWidth < 768;

				if (entry.isIntersecting && isMobile) {
					videoElement.play().catch((error) => {
						console.log("Autoplay prevented:", error);
					});
				} else {
					videoElement.pause();
					videoElement.currentTime = 0;
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, options);
		observer.observe(videoElement);

		return () => {
			if (videoElement) {
				observer.unobserve(videoElement);
			}
		};
	}, []);

	return (
		<div className="portfolio-card">
			<div className="video-wrapper">
				<video
					ref={videoRef}
					src={videoSrc}
					poster={posterSrc} 
					muted
					loop
					preload="auto"
					playsInline
					aria-label={ariaLabel}
					onMouseEnter={(e) => e.currentTarget.play()}
					onMouseLeave={(e) => {
						e.currentTarget.pause();
						e.currentTarget.currentTime = 0;
					}}
				/>
			</div>
		</div>
	);
};

export default PortfolioCard;