import { useEffect } from "react";
import "./GoogleReviews.scss";

const GoogleReviews = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://elfsightcdn.com/platform.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="google-reviews-container">
			<div
				className="elfsight-app-e9330e06-27b8-4e4c-9eb4-e52c524bd34c"
				data-elfsight-app-lazy></div>
		</div>
	);
};

export default GoogleReviews;
