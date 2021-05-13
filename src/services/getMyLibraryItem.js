import api from "./api";

const getMyLibraryItem = async (token, announcement_id) => {
	let response = null;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		response = await api.get("/myLibrary/" + announcement_id, config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default getMyLibraryItem;
