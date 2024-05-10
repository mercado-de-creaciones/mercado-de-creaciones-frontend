import { useQuery } from "@tanstack/react-query";

import * as UseCases from "../../../core/use-cases";
import { moviDBFetcher } from "@/config/adapters/movieDB.adapter";

export const useNowPlaying = () => {
  const queryNowPlaying = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => UseCases.moviesNowPlayingUseCase(moviDBFetcher),
  });


  return {
    queryNowPlaying,
  };
};
