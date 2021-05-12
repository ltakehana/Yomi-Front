import api from './api';

const getMessage = async (token,user_id) => {

  let response = null;

  const config ={
    headers: {
        Authorization: `Bearer ${token}`,
      }


}

  try {
    response = await api.post('/message/'+ user_id,config);

   
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getMessage;
