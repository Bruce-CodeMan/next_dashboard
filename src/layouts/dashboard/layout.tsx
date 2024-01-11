/*
 * @Date: 2024-01-11 10:02:23
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/layouts/dashboard/layout.tsx

// Custom Imports
import Header from "./navbar/navbar"
import Sidebar from "./siderbar/sidebar"

// Custom Imports
import styles from "./dashboard.module.css"

interface Props {
	children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<Sidebar />
			</div>
			<div className={styles.content}>
				<Header />
				{children}
			</div>
		</div>
	)
}