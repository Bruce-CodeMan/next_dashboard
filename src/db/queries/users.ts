/*
 * @Date: 2024-01-13 15:09:05
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/db/queries/users.ts
import db from "@/db/index"
import type { User } from "@prisma/client"

interface FetchUsersProps {
	users: User[];
	count: number;
}

export async function fetchUsers(q: string, page: string, pageSize=1): Promise<FetchUsersProps> {

	// Convert the page into the number type
	const pageNumber = parseInt(page)
	if(isNaN(pageNumber) || pageNumber < 1){
		throw new Error("PageNumber must be a positive number.")
	}

	try {
		const whereCondition = q ? {
			username: {
				contains: q
			}
		} : {}
		const users = await db.user.findMany({
			where: whereCondition,
			skip: (pageNumber - 1) * pageSize,
			take: pageSize
		});
		const count = await db.user.count({
			where: whereCondition
		})
		return { count, users };
	}catch(err: unknown) {
		if(err instanceof Error) {
			throw new Error(err.message)
		}else {
			throw new Error("Something went wrong")
		}
	}
}