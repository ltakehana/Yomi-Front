import api from './api';

const Auth = async (username, password) => {
  let response = null;
  try {
    response = await api.get("/login",
      { auth: { username, password } });
    if (response.data.token) {
      const accessToken= response.data.token;
      sessionStorage.setItem('userToken', accessToken);
    }

    return response.data;
  } catch (error) {
    return (error);
  }
};

export default Auth;
