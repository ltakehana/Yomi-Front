import api from './api';

const updateUser = async (token,body) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    name: body.name,
    email: body.email,
    telephone: body.telephone,
    birth_date: body.birth_date,
    profile_image: body.profile_image
  };

  try {
    response = await api.put('/user',config);
    sessionStorage.setItem('userName',body.name);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default updateUser;
