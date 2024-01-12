/*
 * @Date: 2024-01-12 10:08:43
 * @Author: Bruce Hsu
 * @Description: 
 */
// Custom Imports - Style
import styles from "./pagination.module.css"

export default function Pagination() {
	return (
		<div className={styles.container}>
			<button className={styles.button} disabled>Previous</button>
			<button className={styles.button}>Next</button>
		</div>
	)
}