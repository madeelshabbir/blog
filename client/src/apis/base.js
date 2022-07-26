import axios from 'axios';

export const baseApi = (route, data = {}, method = 'get') => {
  return axios(
    {
      method: method,
      url: process.env.REACT_APP_BASE_URL + route,
      data
    }
  );
};
