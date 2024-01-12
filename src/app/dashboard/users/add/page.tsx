/*
 * @Date: 2024-01-12 10:25:12
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/app/dashboard/users/add/page.tsx

// Custom Imports - Style
import styles from "@/layouts/dashboard/users/addUser/addUser.module.css"

export default function AddUser() {
	return (
		<div className={styles.container}> 
			<form action="" className={styles.form}>
				<input type="text" placeholder="name" name="username" required/>
				<input type="text" placeholder="password" name="password" required/>
				<select name="isAdmin" id="isAdmin">
					<option value="noAdmin" selected>Is Admin</option>
					<option value="admin">Yes</option>
					<option value="noAdmin">No</option>
				</select>
				<textarea name="desc" id="desc" rows={8} placeholder="desc"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}