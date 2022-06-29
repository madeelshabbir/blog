import { apiUrls } from "./../helpers/apiUrls";
import { baseApi } from "./base";

export const postIndexApi = () => {
  return baseApi(process.env.REACT_APP_POST_SERVICE_BASE_URL, apiUrls.posts.index);
};

export const postCreateApi = (payload) => {
  return baseApi(process.env.REACT_APP_POST_SERVICE_BASE_URL, apiUrls.posts.create, payload, 'post');
};
