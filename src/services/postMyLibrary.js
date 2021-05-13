import api from "./api";

const postMyLibrary = async (token, announcement_id) => {
	let response = null;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		announcement_id: announcement_id,
	};

	try {
		response = await api.post("/myLibrary", config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default postMyLibrary;
