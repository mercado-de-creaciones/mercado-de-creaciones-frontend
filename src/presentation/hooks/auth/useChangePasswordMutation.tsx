import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCase from "../../../core/use-cases/auth/change-password.use-case";

import { useMutation } from "@tanstack/react-query";

export const useChangePasswordMutation = (token: string) => {
  const mutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCase.changePasswordUseCase(apiFetcher, body, token);
    },
  });

  return mutation;
};
