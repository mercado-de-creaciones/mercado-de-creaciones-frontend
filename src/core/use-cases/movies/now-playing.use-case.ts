import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { Movie } from "@/core/entities/movie.entity";
import { NowPlayingResponse } from "@/infrastructure/interfaces/api.responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>("/now_playing");

    return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching now playing movies");
  }
}