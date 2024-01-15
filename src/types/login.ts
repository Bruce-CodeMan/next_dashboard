/*
 * @Date: 2024-01-15 15:02:38
 * @Author: Bruce Hsu
 * @Description: 
 */
export type AuthUserType = null | Record<string, any>

export type JWTContextType = {
	user: AuthUserType;
	method: string;
	loading: boolean;
	authenticated: boolean;
	unauthenticated: boolean;
	login: (username: string, password: string) => Promise<void>;
}