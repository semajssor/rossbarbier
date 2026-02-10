import { useRef, useEffect, useState } from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({ videoSrc, ariaLabel, posterSrc }) => {
	const videoRef = useRef(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		if (videoElement.readyState >= 3) {
			setIsLoaded(true);
		}

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				const isMobile = window.innerWidth < 768;
				if (entry.isIntersecting && isMobile) {
					videoElement.play().catch(() => {});
				} else if (isMobile) {
					videoElement.pause();
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
		observer.observe(videoElement);

		return () => observer.disconnect();
	}, []);

	return (
		<div className="portfolio-card">
			<div
				className="video-wrapper"
				style={{ backgroundImage: `url(${posterSrc})` }} 
			>
				<video
					ref={videoRef}
					src={videoSrc}
					muted
					loop
					preload="auto"
					playsInline
					aria-label={ariaLabel}
					onMouseEnter={(e) => e.currentTarget.play()}
					onMouseLeave={(e) => e.currentTarget.pause()}
					onPlaying={() => setIsLoaded(true)}
					style={{
						opacity: isLoaded ? 1 : 0,
						transition: "opacity 0.6s ease-in-out",
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	);
};

export default PortfolioCard;
