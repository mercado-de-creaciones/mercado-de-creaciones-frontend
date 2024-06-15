import { AxiosAdapter } from "./http/axios.adapter";

export const apiFetcher = new AxiosAdapter({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});