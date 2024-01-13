/*
 * @Date: 2024-01-12 09:39:30
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/components/search/search.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { MdSearch } from "react-icons/md"
import { useDebouncedCallback } from "use-debounce"

// Custom Imports - Style
import styles from "./search.module.css"


interface SearchProps {
	placeholder: string;
}

export default function Search({placeholder}: SearchProps) {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const params = new URLSearchParams(searchParams)
		if(e.target.value){
			e.target.value.length > 2 && params.set("q", e.target.value)
		}else{
			params.delete("q")
		}
		
		replace(`${pathname}?${params}`)
	}, 500)

	return (
		<div className={styles.container}>
			<MdSearch />
			<input type="text" placeholder={placeholder} className={styles.input} onChange={handleChange}/>
		</div>
	)
}