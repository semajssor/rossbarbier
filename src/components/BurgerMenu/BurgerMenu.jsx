// src/components/BurgerMenu/BurgerMenu.jsx
import "./BurgerMenu.scss";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
	return (
		<button
			onClick={toggleMenu}
			className={`burger ${isOpen ? "open" : ""}`}
			aria-label="Toggle menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default BurgerMenu;
