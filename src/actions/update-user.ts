/*
 * @Date: 2024-01-14 16:39:03
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/actions/update-user.ts
"use server";

// Custom Imports - Db
import db from "@/db"
import paths from "@/routes/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUser(formData: FormData) {


	const id = formData.get("id") as string
	const username = formData.get("username") as string
	const desc = formData.get("desc") as string

	try {

		const updatePayload: Record<string, any> = {}

		if (username !== "" && username !== undefined) updatePayload.username = username
		if(desc !== "" && username !== undefined) updatePayload.desc = desc

		if(Object.keys(updatePayload).length === 0){
			throw new Error("No valid fields to update")
		}

		await db.user.update({
			where: {
				id: parseInt(id)
			},
			data: updatePayload
		})
	}catch(err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message)
		}else{
			throw new Error("Something went wrong")
		}
	}
	revalidatePath(paths.user.root)
	redirect(paths.user.root)	
}