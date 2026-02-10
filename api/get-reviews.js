export default async function handler(req, res) {
	const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
	const placeId = "ChIJS7Tf0KbjyEwRVCttCK_IO9k"; // Ton ID

	// NOUVELLE URL de Google
	const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&languageCode=fr&reviewsCount=10`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-Goog-Api-Key": apiKey,
				"X-Goog-FieldMask": "reviews", // On précise qu'on veut uniquement les avis
			},
		});

		const data = await response.json();

		return res.status(200).json(data);
	} catch (error) {
		console.error("Erreur API New:", error);
		return res.status(500).json({ error: "Impossible de récupérer les avis" });
	}
}
