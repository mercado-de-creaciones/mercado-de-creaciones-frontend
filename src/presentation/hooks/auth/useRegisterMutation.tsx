import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation } from '@tanstack/react-query';
import * as UseCases from '@/core/use-cases';

export const useRegisterMutation = () => {
	const registerMutation = useMutation({
		mutationFn: (body: Record<string, string>) =>
			UseCases.registerUserUseCase(apiFetcher, body),
	});

	return {
		registerMutation,
	};
};
