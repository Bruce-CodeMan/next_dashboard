/*
 * @Date: 2024-01-11 16:31:47
 * @Author: Bruce Hsu
 * @Description: 
 */
import Image from "next/image"

// Custom Imports - Style
import styles from "./transactions.module.css"

export default function Transactions() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Latest Transactions</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>Pending</span>
						</td>
						<td>06.02</td>
						<td>78</td>
					</tr>
					<tr>
						<td>
							<Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
						</td>
						<td>
							<span className={`${styles.status} ${styles.cancel}`}>cancel</span>
						</td>
						<td>06.02</td>
						<td>78</td>
					</tr>
					<tr>
						<td>
							<Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
						</td>
						<td>
							<span className={`${styles.status} ${styles.success}`}>success</span>
						</td>
						<td>06.02</td>
						<td>78</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}