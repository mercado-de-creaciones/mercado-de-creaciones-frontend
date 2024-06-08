export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
  email: string;
  emailValidated: boolean;
  id: string;
  name: string;
  role: string[];
  img: string | null;
}
