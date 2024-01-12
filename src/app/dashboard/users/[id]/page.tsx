/*
 * @Date: 2024-01-12 13:11:37
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/app/dashboard/users/[id]/page.tsx
import Image from "next/image"

// Custom Imports - Style
import styles from "@/layouts/dashboard/users/singleUser/singleUser.module.css"

export default function SingleUserPage() {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image src="/noavatar.png" alt="" fill/>
				</div>
				Bruce Hsu
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<label>UserName</label>
					<input type="text" name="username" placeholder="username"/>
					<label>Password</label>
					<input type="text" name="password" placeholder="password"/>
					<label>desc</label>
					<textarea name="desc" placeholder="desc"/>
					<button>Update</button>
				</form>
			</div>
		</div>
	)
}