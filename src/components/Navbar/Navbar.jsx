import { useState, useEffect } from "react";
import Button from "../Button/Button.jsx";
import "./Navbar.scss";
import SocialIcons from "../SocialIcons/SocialIcons.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	// Detect system theme on mount
	useEffect(() => {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setIsDarkMode(prefersDark);
	}, []);

	// Apply theme to <body>
	useEffect(() => {
		document.body.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	return (
		<header className={isDarkMode ? "navbar dark" : "navbar"}>
			<div className="navbar-container">
				<div className="logo">
					<img
						src={isDarkMode ? "/logo_blanc-removebg.png" : "/logo_noir-removebg.png"}
						alt="Logo Ross Barbier"
					/>
				</div>

				<nav className={isOpen ? "nav-links open" : "nav-links"}>
					<a href="#home" onClick={() => setIsOpen(false)}>
						Accueil
					</a>
					<a href="#portfolio" onClick={() => setIsOpen(false)}>
						Portfolio
					</a>
					<a href="#contact" onClick={() => setIsOpen(false)}>
						Contact
					</a>
				</nav>

				<SocialIcons isDarkMode={isDarkMode} />

				<div className="nav-icons">
					<Button href={"https://rossthebarber.setmore.com/"}>Réserver</Button>
					<ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
					<button
						onClick={toggleMenu}
						className={`icon-btn burger ${isOpen ? "open" : ""}`}
						aria-label="Toggle menu">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
