/*
 * @Date: 2024-01-12 10:08:43
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/components/pagination/pagination.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Custom Imports - Style
import styles from "./pagination.module.css"

interface PageProps {
	count: number
}

export default function Pagination({ count }: PageProps) {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const params = new URLSearchParams(searchParams)
	const page = searchParams.get("page") || "1"

	const ITEM_PAGE_SIZE = 1 

	const hasPrev = ITEM_PAGE_SIZE * (parseInt(page) - 1) > 0
	const hasNext = ITEM_PAGE_SIZE * (parseInt(page) - 1) + ITEM_PAGE_SIZE < count

	const handleChangePage = (type: string) => {
		console.log("type: ", type)
		type === "prev" 
			? params.set("page", (parseInt(page) - 1).toString())
			: params.set("page", (parseInt(page) + 1).toString()) 
		replace(`${pathname}?${params}`)
	}

	return (
		<div className={styles.container}>
			<button 
				className={styles.button} 
				disabled={!hasPrev}
				onClick={() => handleChangePage("prev")}
			>Previous</button>
			<button 
				className={styles.button} 
				disabled={!hasNext}
				onClick={() => handleChangePage("next")}
			>Next</button>
		</div>
	)
}