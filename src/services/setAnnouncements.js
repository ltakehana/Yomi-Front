import api from "./api";

const setAnnouncements = async (token, body) => {
	let response = null;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		name: body.name,
		book_cover: body.book_cover,
		author: body.author,
		cep: body.cep,
		price: body.price,
		announceType: body.type,
		district: body.district,
		city: body.city,
		description: body.description,
		publishing_company: body.publishing_company,
		synopsis: body.synopsi,
		pages: body.pages,
		year: body.year,
		contact_type: body.contactType,
		categories: body.categoria,
	};
	try {
		response = await api.post("/announcement", config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
export default setAnnouncements;
