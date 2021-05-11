import api from './api';

const getAnnouncements = async (body) => {

  let response = null;

  let config = {headers:{}};

  if(body.orderBy){
      config.headers.orderBy=body.orderBy;
  }
  if(body.limit){
      config.headers.orderBy=body.limit;
  }
  if(body.announceType){
      config.headers.announceType=body.announceType;
  }



  try {
    response = await api.get('/announcements',config);
    return response.data;
  } catch (error) {
    console.log(error);
    return (null);
  }
};

export default getAnnouncements;
