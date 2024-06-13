import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { AuthResponse } from "@/infrastructure/interfaces/user.response";
import { AuthMapper } from "@/infrastructure/mappers/auth.mapper";

export const registerUserUseCase = async (fetcher: HttpAdapter, body: Record<string,string>): Promise<string> => {
	const register = await fetcher.post<AuthResponse>("/auth/register", body);

	return AuthMapper.fromAuthResponseToToken(register);
}