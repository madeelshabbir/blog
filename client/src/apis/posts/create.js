import { apiUrls } from "../../helpers/apiUrls";
import { baseApi } from "../base";

export const postCreateApi = (payload) => {
  baseApi(process.env.REACT_APP_POST_SERVICE_BASE_URL, apiUrls.posts.create, payload, 'post');
};
