import { AxiosAdapter } from "./http/axios.adapter";

export const apiFetcher = new AxiosAdapter({
  baseURL: import.meta.env.VITE_MOVIE_DB_URL ?? "http://localhost:8888/.netlify/functions",
});