import api from './api';

const getChat = async (token) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    response = await api.get('/chats',config);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getChat;
