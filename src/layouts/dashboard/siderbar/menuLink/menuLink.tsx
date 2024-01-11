/*
 * @Date: 2024-01-11 14:57:01
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/layouts/dashboard/sidebar/menuLink/menuLink.tsx
"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

// Custom Imports - Type
import { MenuItem } from "@/types/dashboard"
// Custom Imports - Style
import styles from "./menuLink.module.css"

interface MenuLinkProps {
	item: MenuItem
}

export default function MenuLink({ item }: MenuLinkProps) {

	// Check the pathname
	const pathname = usePathname();
	console.log("pathname: ", pathname)


	return (
		<Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
			{item.icon} {item.title}
		</Link>
	)
}