/*
 * @Date: 2024-01-12 09:39:30
 * @Author: Bruce Hsu
 * @Description: 
 */

import { MdSearch } from "react-icons/md"

// Custom Imports - Style
import styles from "./search.module.css"

interface SearchProps {
	placeholder: string;
}

export default function Search({placeholder}: SearchProps) {
	return (
		<div className={styles.container}>
			<MdSearch />
			<input type="text" placeholder={placeholder} className={styles.input}/>
		</div>
	)
}