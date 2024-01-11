/*
 * @Date: 2024-01-11 09:27:31
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports - Style
import styles from "@/layouts/dashboard/dashboard.module.css"
// Custom Imports - Component
import Card from "@/components/card/card"
import RightBar from "@/components/rightbar/rightbar"
import Chart from "@/components/chart/chart"
import Transactions from "@/components/transactions/transactions"

export default function DashboardPage() {

  return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.cards}>
					<Card />
					<Card />
					<Card />
				</div>
				<Chart />
				<Transactions />
			</div>
			<div className={styles.side}>
				<RightBar />
			</div>
		</div>
	)
}