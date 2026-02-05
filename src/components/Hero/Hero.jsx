import "./Hero.scss";
import Button from "../Button/Button.jsx";

const Hero = () => {
	return (
		<section id="home" className="hero">
			<div className="hero-content">
				<h2>Bienvenue chez Ross Barbier</h2>
				<p>
					Salut,
					<br />
					<br />
					Moi c’est Hugo, ton barbier à Varennes. Je suis un jeune passionné en route vers le
					succès, prêt à te donner la meilleure vibe possible. Si t’as besoin d’une coupe de cheveux homme stylée ou d’une nouvelle tchass bien fraîche sur la Rive-Sud de Montréal, je suis clairement ton gars. Passe au salon pour un dégradé propre ou une taille de barbe impeccable.
				</p>
				<Button href={"https://rossbarbier.setmore.com"} variant="secondary">
					Réserver maintenant
				</Button>
			</div>
		</section>
	);
}

export default Hero;