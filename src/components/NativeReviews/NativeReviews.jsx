import { useRef } from 'react';
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./NativeReviews.scss";

const NativeReviews = ({ reviews }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
		<section className="reviews-section">
			<div className="carousel-container">
				<button className="nav-btn left" onClick={() => scroll("left")}>
					<FaChevronLeft />
				</button>

				<div className="reviews-grid" ref={scrollRef}>
					{reviews?.map((rev, i) => (
						<div key={i} className="review-card">
							<div className="review-header">
								<div className="author-info">
									<strong>{rev.authorAttribution.displayName}</strong>
									<div className="review-stars">
										{[...Array(5)].map((_, index) => (
											<FaStar
												key={index}
												className={index < rev.rating ? "star-filled" : "star-empty"}
											/>
										))}
									</div>
								</div>
								<FaGoogle className="google-icon" />
							</div>
							<p className="review-text">{rev.text?.text || rev.text}</p>
							<span className="review-date">{rev.relativePublishTimeDescription}</span>
						</div>
					))}
				</div>

				<button className="nav-btn right" onClick={() => scroll("right")}>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
};

export default NativeReviews;