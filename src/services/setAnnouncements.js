import api from './api';

const setAnnouncements = async (token, body) => {
	let response = null;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		name: body.name,
		book_cover: body.book_cover,
		author: body.author,
		announceType: body.announceType,
		cep: body.cep,
		price: body.price,
		contact_type: body.type,
		district: body.district,
		city: body.city,
		description: body.description,
		publishing_company: body.publishing_company,
		synopsis: body.synopsi,
		pages: body.pages,
		year: body.year,
	};
	try {
		response = await api.POST("/announcement", config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
export default setAnnouncements;
