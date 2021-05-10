import api from './api';

const userInfo = async (token) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    response = await api.get('/user',config);
    sessionStorage.setItem('userName',response.data.name);
    sessionStorage.setItem('userPic',response.data.picture);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default userInfo;
