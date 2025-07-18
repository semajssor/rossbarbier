import "./SocialIcons.scss"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialIcons = () => {
	return (
		<div className="social-icons">
			<a
				href="https://www.facebook.com/hugo.denis.984786"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook">
				<FaFacebook />
			</a>
			<a
				href="https://www.instagram.com/ross_the_barber_05"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram">
				<FaInstagram />
			</a>
			{/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok />
               </a> */}
		</div>
	);
};

export default SocialIcons;