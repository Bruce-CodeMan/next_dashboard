/*
 * @Date: 2024-01-11 16:20:39
 * @Author: Bruce Hsu
 * @Description: 
 */

// src/components/card/card.tsx
import { MdSupervisedUserCircle } from "react-icons/md"

// Custom Imports - Style
import styles from "./card.module.css" 

export default function Card() {
	return (
		<div className={styles.container}>
			<MdSupervisedUserCircle size={24}/>
			<div className={styles.texts}>
				<span className={styles.title}>Total Users</span>
				<span className={styles.number}>10.24</span>
				<span className={styles.detail}>
					<span className={styles.positive}>12%</span> more than previous
				</span>
			</div>
		</div>
	)
}