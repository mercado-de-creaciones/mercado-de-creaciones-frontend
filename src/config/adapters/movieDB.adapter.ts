import { AxiosAdapter } from "./http/axios.adapter";

export const moviDBFetcher = new AxiosAdapter({
  baseURL: import.meta.env.VITE_MOVIE_DB_URL ?? 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY ?? 'd354094447d776754aeb33980f2d3282',
    language: 'es'
  }
})