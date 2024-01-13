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

// Custom Imports - Path
import paths from "@/routes/path"

// Custom Imports - FetchData
import { fetchUsers } from "@/db/queries/users"

// Custom Imports - Type
import { User } from "@prisma/client"

interface SearchParams {
	q?: string;
	page: string;
}

interface ItemProps {
	searchParams: SearchParams
}

export default async function Item({ searchParams }: ItemProps) {

	const q = searchParams?.q || ""
	const page = searchParams?.page || "1"

	const { count, users } = await fetchUsers(q, page)

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder="Please input the user"/>
				<Link href={`${paths.user.new}`}>
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Created At</td>
						<td>Role</td>
						<td>Status</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{users.map((user: User) => (
						<tr key={user.id}>
							<td>
								<div className={styles.user}>
									<Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
									{user.username}
								</div>
							</td>
							<td>{user.createTime.toString().slice(4, 16)}</td>
							<td>{user.isAdmin ? "Admin" : "Client"}</td>
							<td>{user.isActive ? "Active" : "Passive"}</td>
							<td>
								<div className={styles.buttons}>
									<Link href={`${paths.user.view(user.id.toString())}`}>
										<button className={`${styles.button} ${styles.view}`}>View</button>
									</Link>
									<button className={`${styles.button} ${styles.delete}`}>Delete</button>
								</div>
							</td>
						</tr>
					))}
					
				</tbody>
			</table>
			<Pagination count={count}/>
		</div>
	)
}
