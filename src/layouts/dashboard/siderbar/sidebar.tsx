/*
 * @Date: 2024-01-11 13:24:22
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/layouts/dashboard/sidebar/sidebar.tsx
import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdShoppingBag,
	MdWork,
	MdLogout
} from "react-icons/md"

// Custom Imports - Style
import styles from "./sidebar.module.css"
// Custom Imports - Type
import { MenuGroup, MenuItem } from "@/types/dashboard"
// Custom Imports - Component
import MenuLink from "./menuLink/menuLink"
import Image from "next/image"

const menuItems: MenuGroup[] = [
	{
		title: "Pages",
		list: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: <MdDashboard />
			},
			{
				title: "Users",
				path: "/dashboard/users",
				icon: <MdSupervisedUserCircle/>
			},
			{
				title: "Products",
				path: "/dashboard/products",
				icon: <MdShoppingBag />
			}
		]
	},
	{
		title: "Analytics",
		list: [
			{
				title: "Revenue",
				path: "/dashboard/revenue",
				icon: <MdWork />
			}
		]
	}
]

export default function Sidebar() {
	return (
		<div className={styles.conatiner}>
			<div className={styles.user}>
				<Image className={styles.userImage} src="/noavatar.png" alt="" height="50" width="50"/>
				<div className={styles.userDetail}>
					<span className={styles.userName}>Bruce Hsu</span>
					<span className={styles.userTitle}>Engineer</span>
				</div>
			</div>
			<ul className={styles.list}>
				{menuItems.map(category => (
					<li key={category.title}>
						<span className={styles.category}>{category.title}</span>
						{category.list.map((item: MenuItem) =>(
							<MenuLink item={item} key={item.title}></MenuLink>
						))}
					</li>
				))}
			</ul>

			<button className={styles.logout}><MdLogout /> Logout</button>
		</div>
	)
}