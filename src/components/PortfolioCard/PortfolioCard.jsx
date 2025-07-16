import { useRef, useEffect } from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({ videoSrc, ariaLabel }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return; // Ensure the video element exists

		// Define options for the Intersection Observer
		const options = {
			root: null, // Use the viewport as the root
			rootMargin: "0px",
			threshold: 0.8, // Trigger when 80% of the video is visible
		};

		// Callback function for the observer
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				// Check if the video is currently intersecting and if it's a mobile device
				// We'll define a simple mobile detection or rely on CSS media queries
				const isMobile = window.innerWidth < 768; // Or use a more robust detection if needed

				if (entry.isIntersecting && isMobile) {
					videoElement.play().catch((error) => {
						// Catch potential autoplay policy errors (e.g., if muted is not enough)
						console.log("Autoplay prevented:", error);
					});
				} else {
					videoElement.pause();
					videoElement.currentTime = 0; // Reset video when it goes out of view
				}
			});
		};

		// Create a new Intersection Observer
		const observer = new IntersectionObserver(handleIntersection, options);

		// Start observing the video element
		observer.observe(videoElement);

		// Clean up the observer when the component unmounts
		return () => {
			if (videoElement) {
				observer.unobserve(videoElement);
			}
		};
	}, []); // Empty dependency array means this effect runs once after initial render

	return (
		<div className="portfolio-card">
			<div className="video-wrapper">
				<video
					ref={videoRef} 
					src={videoSrc}
					muted 
					preload="metadata"
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