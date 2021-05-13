import api from './api';

const deleteMyLibraryItem = async (id,token) => {

  let response = null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    response = await api.delete('/myLibrary/'+id,config);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default deleteMyLibraryItem;
