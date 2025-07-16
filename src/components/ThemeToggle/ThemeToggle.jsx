import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
	return (
		<button onClick={toggleDarkMode} className="icon-btn" aria-label="Toggle dark mode">
			{isDarkMode ? <MdLightMode /> : <MdDarkMode />}
		</button>
	);
};

export default ThemeToggle;
