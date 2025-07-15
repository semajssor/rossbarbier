import "./Button.scss";

const Button = ({ children, onClick, href, type = "button", variant = "primary" }) => {
	if (href) {
		return (
			<a href={href} className={`btn ${variant}`} target="_blank">
				{children}
			</a>
		);
	}

	return (
		<button type={type} onClick={onClick} className={`btn ${variant}`}>
			{children}
		</button>
	);
}

export default Button;