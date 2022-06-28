import axios from 'axios';

export const baseApi = (base_url, route, data, method = 'get') => {
  axios(
    {
      method: method,
      url: base_url + route,
      data
    }
  );
};
