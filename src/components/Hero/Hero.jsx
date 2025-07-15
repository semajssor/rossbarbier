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
               Moi c’est Hugo, jeune barbier en route vers le succès — prêt à te donner la meilleure vibe possible. Si t’as besoin d’une nouvelle tchass bien fraîche, je suis clairement ton gars.
				</p>
				<Button href={"https://rossthebarber.setmore.com/"} variant="secondary">
					Réserver maintenant
				</Button>
			</div>
		</section>
	);
}

export default Hero;