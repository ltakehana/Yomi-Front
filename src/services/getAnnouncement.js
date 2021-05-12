import api from './api';

const getAnnouncement = async (id) => {

  let response = null;


  try {
    response = await api.get('/announcement/'+id);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getAnnouncement;
