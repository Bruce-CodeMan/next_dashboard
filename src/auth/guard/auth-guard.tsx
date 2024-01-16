/*
 * @Date: 2024-01-15 15:46:14
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/auth/guard/auth-guard.tsx
"use client"

import { useRouter } from "next/navigation"
import { useAuthContext } from "../hooks/use-auth-context"
import { useCallback, useEffect } from "react"
import paths from "@/routes/path"

interface IProps {
	children: React.ReactNode
}

export default function AuthGuard({ children }: IProps) {

	const router = useRouter()

	const { authenticated } = useAuthContext()

	const check = useCallback(() => {
		if(!authenticated) {
			const searchParams = new URLSearchParams({
				returnTo: window.location.pathname
			}).toString()
			const loginPath = paths.login

			const href = `${loginPath}?${searchParams}`
			router.replace(href)
		}
	}, [authenticated])

	useEffect(() => {
		check()
	}, [])

	return <>{children}</>
}