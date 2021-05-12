import api from "./api";

const ResetPassword = async (email) => {
	let response = null;

	const config = {
		email: email
	};
	try {
		response = await api.post("/reset_password", config);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
export default ResetPassword;
