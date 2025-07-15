import "./Footer.scss";
import SocialIcons from "../SocialIcons/SocialIcons";


const Footer = () => {
	return (
		<footer className="footer">
			<SocialIcons />
			<p className="footer-text">
				&copy; {new Date().getFullYear()} Ross Barbier. Tous droits réservés.
			</p>
		</footer>
	);
}

export default Footer;