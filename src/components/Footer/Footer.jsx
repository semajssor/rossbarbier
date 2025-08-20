import "./Footer.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
	return (
		<footer className="footer">
			<p className="phone">
				<a href="tel:+14383793451">(438)379-3451</a>
			</p>

			<div className="socials">
				<SocialIcons />
				<p className="footer-text">&copy; {new Date().getFullYear()} Ross Barbier</p>
			</div>

			<address className="address">
				308, boul. De La Marine
				<br />
				Varennes, Québec, J3X 2E6
			</address>
		</footer>
	);
};

export default Footer;
