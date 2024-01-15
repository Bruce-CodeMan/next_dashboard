/*
 * @Date: 2024-01-15 15:46:14
 * @Author: Bruce Hsu
 * @Description: 
 */

"use client"

import { useAuthContext } from "../hooks/use-auth-context"

interface IProps {
	children: React.ReactNode
}


export default function AuthGuard({ children }: IProps) {

	const { user } = useAuthContext()
	console.log("user: ", user)

	return <>{children}</>
}