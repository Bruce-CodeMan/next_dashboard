/*
 * @Date: 2024-01-11 11:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/app/dashboard/users/page.tsx
import Image from "next/image"
import Link from "next/link"

// Custom Imports - Style
import styles from "@/layouts/dashboard/users/dashboard.module.css"
// Custom Imports - Component
import Search from "@/components/search/search"
import Pagination from "@/components/pagination/pagination"

export default async function Item() {

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder="Please input the user"/>
				<Link href="/dashboard/users/add">
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Created At</td>
						<td>Role</td>
						<td>Status</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
								Bruce Hsu
							</div>
						</td>
						<td>xxx@qq.com</td>
						<td>13.01.2022</td>
						<td>Admin</td>
						<td>Active</td>
						<td>
							<div className={styles.buttons}>
								<Link href="/">
									<button className={`${styles.button} ${styles.view}`}>View</button>
								</Link>
								<button className={`${styles.button} ${styles.delete}`}>Delete</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	)
}