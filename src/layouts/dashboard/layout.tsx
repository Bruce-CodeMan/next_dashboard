/*
 * @Date: 2024-01-11 10:02:23
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import Header from "./header"
import Sidebar from "./sidebar"

interface Props {
	children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
	return (
		<div>
			<Header />
			<Sidebar />
			{children}
		</div>
	)
}