import api from './api';

const postMessages = async (token,user_id,message) => {

  let response = null;

  const config ={
    headers: {
        Authorization: `Bearer ${token}`,
      },
    

}
const body = {
   message: message,
   user_id: parseInt(user_id)
}

  try {
    response = await api.post('/message',body,config);

    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default postMessages;
