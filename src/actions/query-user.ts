/*
 * @Date: 2024-01-14 15:51:07
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/actions/query-user.ts

// Custom Imports - Db
import db from "@/db"
// Custom Imports - Type
import { User } from "@prisma/client"

export async function queryUser(id: string): Promise<User | null> {
	try{
		const user = await db.user.findFirst({
			where: {
				id: parseInt(id)
			}
		})
		if (!user) {
			throw new Error("User not found")
		}
		return user;
	}catch(err: unknown) {
		if(err instanceof Error) {
			throw new Error(err.message)
		}else{
			throw new Error("Something went wrong")
		}
	}
}