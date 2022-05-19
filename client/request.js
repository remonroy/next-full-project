import axios from "axios";
import { baseUrl } from "./config";

export const postRequest = async (payload) => {
  try {
    const { data } = await axios.post(baseUrl + `/signup`, payload);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
