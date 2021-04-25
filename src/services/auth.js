import api from './api';

const Auth = async (username, password) => {
  let response = null;
  try {
    response = await api.get("/login",
      { auth: { username, password } });
    if (response.data.token) {
      const accessToken= response.data.token;
      const expiration= response.data.expiration;
      sessionStorage.setItem('userToken', accessToken);
      sessionStorage.setItem('userExpiration', expiration);
    }

    return response.data;
  } catch (error) {
    return (error);
  }
};

export default Auth;
