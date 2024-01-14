/*
 * @Date: 2024-01-13 17:18:51
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/actions/users.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import bcrypt from "bcrypt"

// Custom Imports - Db
import db from "@/db/index"
// Custom Imports - route
import paths from "@/routes/path";


export async function addUser(formData: FormData) {
	
	// 第一种写法
	const username = formData.get("username") as string
	const password = formData.get("password") as string
	const isAdmin = formData.get("isAdmin") === "admin"
	const desc = formData.get("desc") as string
	// 第二种写法
	// const { username, password, isAdmin, desc } = Object.fromEntries(formData)

	if (username === null || password === null || desc === null) {
		throw new Error("Required fields are missing")
	}

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	try{
		await db.user.create({
			data: {
				username,
				password: hashedPassword,
				isAdmin,
				desc,
				img: "1.png"
			}
		})
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message)
		}else{
			throw new Error("Something went wrong")
		}
	}

	revalidatePath(paths.user.root)
	redirect(paths.user.root)
}