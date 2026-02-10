export default async function handler(req, res) {
	const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
	const placeId = "ChIJS7Tf0KbjyEwRVCttCK_IO9k";

	const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Détails de l'erreur:", error);
		return res.status(500).json({ error: "Impossible de récupérer les avis" });
	}
}
