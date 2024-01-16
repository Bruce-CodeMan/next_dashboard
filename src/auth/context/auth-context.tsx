/*
 * @Date: 2024-01-15 15:07:23
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/auth/context/auth-context.tsx
'use client';

import { createContext } from "react"

// Custom Imports - Type
import { JWTContextType } from "@/types/login";

export const AuthContext = createContext({} as JWTContextType)