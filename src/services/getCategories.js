import api from './api';

const getCategories = async () => {

  let response = null;


  try {
    response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getCategories;
