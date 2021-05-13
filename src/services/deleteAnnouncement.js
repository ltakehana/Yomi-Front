import api from "./api";

const deleteAnnouncement = async (id, token) => {
	let response = null;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		response = await api.delete("/announcement/" + id, config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default deleteAnnouncement;
