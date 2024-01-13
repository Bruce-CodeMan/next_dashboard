/*
 * @Date: 2024-01-13 15:09:05
 * @Author: Bruce Hsu
 * @Description: 
 */
import db from "@/db/index"
import type { User } from "@prisma/client"

export async function fetchUsers(): Promise<User[]> {
	try {
		const users = await db.user.findMany();
		return users;
	}catch(err: unknown) {
		if(err instanceof Error) {
			throw new Error(err.message)
		}else {
			throw new Error("Something went wrong")
		}
	}
}