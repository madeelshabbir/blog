import { apiUrls } from "./../helpers/apiUrls";
import { baseApi } from "./base";

export const postIndexApi = () => {
  return baseApi(apiUrls.posts.index);
};

export const postCreateApi = (payload) => {
  return baseApi(apiUrls.posts.create, payload, 'post');
};

export const postWithCommentsIndexApi = () => {
  return baseApi(apiUrls.posts.index);
};
