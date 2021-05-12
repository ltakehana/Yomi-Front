import api from './api';

const updateUser = async (token,body) => {

  let response = null;

  const config = {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
  if(body.name)
    config.name = body.name;
  if(body.email)
    config.email = body.email;
  if(body.telephone)
    config.telephone = body.telephone;
  if(body.birth_date)
    config.birth_date = body.birth_date;
  if(body.profile_image)
    config.profile_image = body.profile_image;
  if(body.password)
    config.password = body.password;


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
