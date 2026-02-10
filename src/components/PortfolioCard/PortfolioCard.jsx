import { useRef, useEffect } from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({ videoSrc, ariaLabel, posterSrc }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		// FIX : Si la vidéo est déjà prête (cache), on affiche l'opacité tout de suite
		if (videoElement.readyState >= 3) {
			videoElement.style.opacity = 1;
		}

		videoElement.load();

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

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});
		observer.observe(videoElement);

		return () => observer.disconnect();
	}, [videoSrc]); 

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
					onMouseLeave={(e) => e.currentTarget.pause()}
					onCanPlay={(e) => (e.currentTarget.style.opacity = 1)}
					style={{
						opacity: 0,
						transition: "opacity 0.5s ease",
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	);
};

export default PortfolioCard;
