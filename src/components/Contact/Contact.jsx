import "./Contact.scss";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="contact__container">
				<div className="contact__info">
					<h2>Heures d'ouverture</h2>
					<br />
					<ul>
						<li>Lundi : Fermé</li>
						<li>Mardi : 12h - 21h</li>
						<li>Mercredi : 12h - 21h</li>
						<li>Jeudi : 12h - 21h</li>
						<li>Vendredi : 10h - 18h</li>
						<li>Samedi : 10h - 18h</li>
						<li>Dimanche : Fermé</li>
					</ul>
				</div>

				<div className="contact__details">
					<h2>Adresse</h2>
					<p>
						Salon: Zone M
						<br />
						308, boul. De La Marine
						<br />
						Varennes, Québec, J3X 2E6
					</p>

					<div className="contact__map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d697.1786061077294!2d-73.423703!3d45.6565564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e3a6d0dfb44b%3A0xd93bc8af086d2b54!2sRoss%20Barbier!5e0!3m2!1sen!2spl!4v1755695763827!5m2!1sen!2spl"
							// width="400"
							// height="300"
							style={{border: 0}}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;