import "./Footer.scss";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="social-icons">
				<a
					href="https://facebook.com"
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
			<p className="footer-text">
				&copy; {new Date().getFullYear()} Ross the Barber. Tous droits réservés.
			</p>
		</footer>
	);
}

export default Footer;