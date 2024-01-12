/*
 * @Date: 2024-01-11 09:27:42
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/app/login/page.tsx

// Custom Imports - Style
import styles from "@/layouts/dashboard/login/login.module.css"

export default function LoginPage() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Bruce Login Dashboard</h2>
			<form action="" className={styles.form}>
				<input type="text" name="username" placeholder="username"/>
				<input type="text" name="password" placeholder="password"/>
				<button>Login</button>
			</form>
		</div>
	)
}