import { useMutation } from "@tanstack/react-query";
import * as UseCases from "../../../core/use-cases";
import { apiFetcher } from "@/config/adapters/api.adapter";

export const useLoginMutation = () => {
  const loginMutation = useMutation({
    mutationFn: (body: Record<string,string>) => UseCases.loginUserUseCase(apiFetcher, body),
  });

  return {
    loginMutation,
  };

}
