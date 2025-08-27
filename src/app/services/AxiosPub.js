import axios from "axios";
import i18n from "../../i18n/i18n";
import Cookies from "js-cookie";
import { BASE_URL } from "./constants";

const axiosApi = axios.create({
  baseURL: `${BASE_URL}${i18n.language}/api/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use((config) => {
  const lang = i18n.language;
  config.baseURL = `${BASE_URL}${lang}/api/`;
  return config;
});

const axiosProfile = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export { axiosApi, axiosProfile };
