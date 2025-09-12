import "./Footer.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="contact-info">
				<p className="phone">
					<a href="tel:+14383793451" aria-label="Call Ross Barbier Salon">
						<FaPhoneAlt className="phone-icon" /> (438) 379-3451
					</a>
				</p>
				<address className="address" aria-label="Business address">
					308, boul. De La Marine
					<br />
					Varennes, Québec, J3X 2E6
				</address>
			</div>

			<div className="socials">
				<SocialIcons />
				<p className="footer-text">&copy; {new Date().getFullYear()} Ross Barbier</p>
			</div>
		</footer>
	);
};

export default Footer;