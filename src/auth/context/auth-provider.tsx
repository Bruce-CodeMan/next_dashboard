/*
 * @Date: 2024-01-15 15:08:54
 * @Author: Bruce Hsu
 * @Description: 
 */
"use client";

// Custom Imports
import { AuthContext } from "./auth-context";

interface IProps {
	children: React.ReactNode
}

export function AuthProvider({ children }: IProps) {

	const login = async (username: string, password: string) => {

	}

	let userInfo: Record<string, any> = {
		username: "Bruce",
		password: "123"
	} 

	const value = {
		user: userInfo,
		method: "",
		loading: false,
		authenticated: false,
		unauthenticated: false,
		login
	}

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}