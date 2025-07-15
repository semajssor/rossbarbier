import "./Contact.scss";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="contact__container">
				<div className="contact__info">
					<h2>Heures d'ouverture</h2>
					<ul>
						<li>Lundi : 12h - 21h</li>
						<li>Mardi : 12h - 21h</li>
						<li>Mercredi : 12h - 21h</li>
						<li>Jeudi : 12h - 21h</li>
						<li>Vendredi : 9h - 17h</li>
						<li>Samedi : 9h - 17h</li>
						<li>Dimanche : Fermé</li>
					</ul>
				</div>

				<div className="contact__details">
					<h2>Adresse</h2>
					<p>
						308, boul. De La Marine
						<br />
						Varennes, Québec, J3X 2E6
					</p>

					<div className="contact__map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.7144244309175!2d-73.42305929999999!3d45.6565564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e32508134ee7%3A0x12b77f91e4da0098!2s308%20Bd%20de%20la%20Marine%2C%20Varennes%2C%20QC%20J3X%202E6%2C%20Canada!5e0!3m2!1sen!2spl!4v1752615734990!5m2!1sen!2spl"
							width="400"
							height="300"
							style={{ border: 0 }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;