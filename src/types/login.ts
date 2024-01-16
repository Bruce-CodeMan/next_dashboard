/*
 * @Date: 2024-01-15 15:02:38
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/types/login.ts
export type AuthUserType = null | Record<string, any>

export type JWTContextType = {
	user: AuthUserType;
	method: string;
	loading: boolean;
	authenticated: boolean;
	unauthenticated: boolean;
	login: (username: string, password: string) => Promise<void>;
}

export type ActionMapType<M extends { [index: string]: any}> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
			type: Key;
		}
		: {
			type: Key;
			payload: M[Key];
		}
}

export type AuthStateType = {
	state?: string;
	loading: boolean;
	user: AuthUserType;
}