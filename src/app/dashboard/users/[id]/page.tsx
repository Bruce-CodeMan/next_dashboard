/*
 * @Date: 2024-01-12 13:11:37
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/app/dashboard/users/[id]/page.tsx
import Image from "next/image"

// Custom Imports - Style
import styles from "@/layouts/dashboard/users/singleUser/singleUser.module.css"

// Custom Imports - Db
import * as actions from "@/actions"

interface UserProps {
	params: {
		id: string
	}
}

export default async function SingleUserPage({ params }: UserProps) {

	const { id } = params
	const user = await actions.queryUser(id)


	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image src="/noavatar.png" alt="" fill/>
				</div>
				{user?.username}
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<label>UserName</label>
					<input type="text" name="username" placeholder={user?.username}/>
					<label>desc</label>
					<textarea name="desc" placeholder={user?.desc}/>
					<button>Update</button>
				</form>
			</div>
		</div>
	)
}