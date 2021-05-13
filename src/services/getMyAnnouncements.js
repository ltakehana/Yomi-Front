import api from './api';

const getMyAnnouncements = async (token) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    response = await api.get('/myAnnouncements',config);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getMyAnnouncements;
