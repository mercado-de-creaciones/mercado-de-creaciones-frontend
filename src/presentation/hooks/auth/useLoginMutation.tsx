import { useEffect } from "react";

import * as UseCases from "../../../core/use-cases";
import { apiFetcher } from "@/config/adapters/api.adapter";

import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const navitation = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (body: Record<string, string>) =>
      UseCases.loginUserUseCase(apiFetcher, body),
  });

  const [token, saveToken] = useLocalStorage<string | null>("token", null);

  useEffect(() => {
    if (loginMutation.data && !token) {
      saveToken(loginMutation.data as string);
    }

    if (token) {
      navitation("/");
    }
  }, [loginMutation.data, token, saveToken, navitation]);

  return { loginMutation, token };
};
