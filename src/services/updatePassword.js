import api from './api';

const updatePassword = async (token,body) => {
    let response = null;

    let config = {
      headers: {
        authorization: `Bearer ${token}`
      },
    };
    try {
      response = await api.put('/user',body,config);
      sessionStorage.setItem('userName',body.name);
      return response.data;
    } catch (error) {
      console.log(error);
      return (null);
    }

};

export default updatePassword;
