/*
 * @Date: 2024-01-14 15:29:55
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/actions/delete-user.ts
"use server";

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Custom Imports - Db
import db from "@/db"
// Custom Imports - route
import paths from "@/routes/path"

export async function deleteUser(formData: FormData) {

	const id = formData.get("id") as string

	try{
		await db.user.delete({
			where: {
				id: parseInt(id)
			}
		})
	}catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message)
		}else {
			throw new Error("Something went wrong")
		}
	}

	revalidatePath(paths.user.root)
	redirect(paths.user.root)
}