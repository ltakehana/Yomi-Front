import api from './api';

const register = async (name,email,password) => {

  let response = null;

  const body = {
    "username": email,
    "name": name,
    "email": email,
    "password": password
  };

  try {
    response = await api.post('/user',body);

    if (response.data.token) {
        const accessToken= response.data.token;
        const expiration= response.data.expiration;
        sessionStorage.setItem('userToken', accessToken);
        sessionStorage.setItem('userExpiration', expiration);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default register;
