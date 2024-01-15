/*
 * @Date: 2024-01-11 09:45:41
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports - Layout
import DashboardLayout from "@/layouts/dashboard/layout"
// Custom Imports - Guard
import { AuthGuard } from "@/auth/guard"

interface Props {
	children: React.ReactNode
}

export default function Layout({children}: Props) {
	return (
		<AuthGuard>
			<DashboardLayout>{children}</DashboardLayout>
		</AuthGuard>
	)
}