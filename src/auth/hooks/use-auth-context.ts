/*
 * @Date: 2024-01-15 16:04:27
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/auth/hooks/use-auth-context.ts
"use client";

import { useContext } from "react";

import { AuthContext } from "../context/auth-context";

export function useAuthContext() {
	const context = useContext(AuthContext)

	console.log("context: ", context)

	if(!context) throw new Error("useAuthContext context must be use inside AuthProvider.")

	return context
}