/*
 * @Date: 2024-01-11 10:48:53
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/layouts/dashboard/navbar/navbar.tsx
"use client";

import { usePathname } from "next/navigation"

import {
	MdNotifications,
	MdOutlineChat,
	MdPublic,
	MdSearch
} from "react-icons/md"

// Custom Imports - Style
import styles from "./navbar.module.css"
// Custom Imports - Component
import Search from "@/components/search/search";

export default function Header() {

	const pathname = usePathname()

	return (
		<div className={styles.container}>
			<div className={styles.title}>{pathname.split("/").pop()}</div>
			<div className={styles.menu}>
				<Search placeholder="Search..."/>
				<div className={styles.icons}>
					<MdOutlineChat size={20}/>
					<MdNotifications size={20}/>
					<MdPublic size={20}/>
				</div>
			</div>
		</div>
	)
}