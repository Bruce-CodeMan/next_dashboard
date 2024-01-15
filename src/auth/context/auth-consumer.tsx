/*
 * @Date: 2024-01-15 15:35:55
 * @Author: Bruce Hsu
 * @Description: 
 */
"use client";

import { AuthContext } from "./auth-context";


interface IProps {
	children: React.ReactNode
}

export function AuthConsumer({ children }: IProps) {
	return (
		<AuthContext.Consumer>
			{(auth) => ( auth.loading? <div>Loading</div> : children)}
		</AuthContext.Consumer>
	)
}