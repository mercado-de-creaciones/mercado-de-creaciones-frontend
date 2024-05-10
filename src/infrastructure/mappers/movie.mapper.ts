import { Movie } from "@/core/entities/movie.entity";
import { Result } from "../interfaces/api.responses";

export class MovieMapper{
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: result.poster_path,
      backdrop: result.backdrop_path,
    };
  }
}