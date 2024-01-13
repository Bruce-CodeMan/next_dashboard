/*
 * @Date: 2024-01-12 09:39:30
 * @Author: Bruce Hsu
 * @Description: 
 */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { MdSearch } from "react-icons/md"

// Custom Imports - Style
import styles from "./search.module.css"


interface SearchProps {
	placeholder: string;
}

export default function Search({placeholder}: SearchProps) {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const params = new URLSearchParams(searchParams)
		params.set("q", e.target.value)
		replace(`${pathname}?${params}`)
	}

	return (
		<div className={styles.container}>
			<MdSearch />
			<input type="text" placeholder={placeholder} className={styles.input} onChange={handleChange}/>
		</div>
	)
}