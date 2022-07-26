import { apiUrls } from "./../helpers/apiUrls";
import { baseApi } from "./base";

export const commentIndexApi = (id) => {
  return baseApi(apiUrls.comments.index(id));
};

export const commentCreateApi = (id, payload) => {
  return baseApi(apiUrls.comments.create(id), payload, 'post');
};
