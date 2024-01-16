/*
 * @Date: 2024-01-15 15:08:54
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/auth/context/auth-provider.tsx
"use client";

import { ActionMapType, AuthUserType, AuthStateType } from "@/types/login";
// Custom Imports
import { AuthContext } from "./auth-context";
import { useReducer, useCallback, useEffect } from "react";
import { verifyJWT, queryUser } from "@/actions";

interface IProps {
	children: React.ReactNode
}

enum Types {
	INITIAL = "INITIAL",
	LOGIN = "LOGIN",
	REGISTER = "REGISTER",
	LOGOUT = "LOGOUT"
}

type Payload = {
	[Types.INITIAL]: {
		user: AuthUserType
	},
	[Types.LOGIN]: {
		user: AuthUserType
	},
	[Types.REGISTER]: {
		user: AuthUserType
	},
	[Types.LOGOUT]: undefined
}

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: AuthStateType = {
	user: null,
	loading: true
}

const reducer = (state: AuthStateType, action: ActionsType) => {
	if(action.type === Types.INITIAL) {
		return {
			loading: false,
			user: action.payload.user
		}
	}
	if(action.type === Types.LOGIN) {
		return {
			...state,
			user: action.payload.user
		}
	}
	if(action.type === Types.REGISTER) {
		return {
			...state,
			user: action.payload.user
		}
	}
	if(action.type === Types.LOGOUT) {
		return {
			...state,
			user: null
		}
	}
	return state
}

const STORAGE_KEY = "accessToken"

export function AuthProvider({ children }: IProps) {

	const [state, dispatch] = useReducer(reducer, initialState)

	const initialize = useCallback(async () => {
		try{
			const accessToken = localStorage.getItem(STORAGE_KEY)

			if(accessToken) {
				const token = await verifyJWT(accessToken)
				if(token.userId) {
					const user = queryUser(token.userId.toString())
					dispatch({
						type: Types.INITIAL,
						payload: {
							user: {
								...user,
								accessToken
							}
						}
					})
				} else {
					dispatch({
						type: Types.INITIAL,
						payload: {
							user: null
						}
					})
				}
			}
		}catch(err: unknown) {
			if(err instanceof Error) {
				throw new Error(err.message)
			}else{
				throw new Error("Something went wrong")
			}
		}
	}, [])

	useEffect(() => {
		initialize()
	}, [initialize])

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
		authenticated: true,
		unauthenticated: false,
		login
	}

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}