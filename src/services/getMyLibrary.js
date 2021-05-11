import api from './api';

const getMyLibrary = async (token) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    response = await api.get('/myLibrary',config);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getMyLibrary;
