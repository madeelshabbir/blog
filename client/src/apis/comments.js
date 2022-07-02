import { apiUrls } from "./../helpers/apiUrls";
import { baseApi } from "./base";

export const commentIndexApi = (id) => {
  return baseApi(process.env.REACT_APP_COMMENT_SERVICE_BASE_URL, apiUrls.comments.index(id));
};

export const commentCreateApi = (id, payload) => {
  return baseApi(process.env.REACT_APP_COMMENT_SERVICE_BASE_URL, apiUrls.comments.create(id), payload, 'post');
};
