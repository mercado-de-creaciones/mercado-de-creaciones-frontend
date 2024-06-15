import { apiFetcher } from "@/config/adapters/api.adapter";
import * as UseCase from "../../../core/use-cases/auth/reset-password.use-case";

import { useMutation } from "@tanstack/react-query";

export const useResetPasswordMutation = () => {
  const mutation = useMutation({
    mutationFn: (body: Record<string, string>) => {
      return UseCase.resetPasswordUseCase(apiFetcher, body);
    },
  });

  return mutation;
};
