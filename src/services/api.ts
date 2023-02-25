import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;

export const laravelURL =
  "http://graciosareports-env.eba-3pqxjvxs.us-east-1.elasticbeanstalk.com/api/";

export const api = axios.create({ baseURL });

export default api;
