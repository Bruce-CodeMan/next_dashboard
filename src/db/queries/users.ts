/*
 * @Date: 2024-01-13 15:09:05
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/db/queries/users.ts
import db from "@/db/index"
import type { User } from "@prisma/client"

export async function fetchUsers(q: string): Promise<User[]> {
	try {
		const whereCondition = q ? {
			username: {
				contains: q
			}
		} : {}
		const users = await db.user.findMany({
			where: whereCondition
		});
		console.log("users: ", users)
		return users;
	}catch(err: unknown) {
		if(err instanceof Error) {
			throw new Error(err.message)
		}else {
			throw new Error("Something went wrong")
		}
	}
}