/*
 * @Date: 2024-01-12 10:25:12
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/app/dashboard/users/add/page.tsx


// Custom Imports - Style
import styles from "@/layouts/dashboard/users/addUser/addUser.module.css"
// Custom Imports - Actions
import { addUser } from "@/actions/users"

export default function AddUser() {

	

	return (
		<div className={styles.container}> 
			<form action={addUser} className={styles.form}>
				<input type="text" placeholder="name" name="username" required/>
				<input type="text" placeholder="password" name="password" required/>
				<select name="isAdmin">
					<option value="admin">Yes</option>
					<option value="client">No</option>
				</select>
				<textarea name="desc" rows={8} placeholder="desc"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}