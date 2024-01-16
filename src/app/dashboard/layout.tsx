/*
 * @Date: 2024-01-11 09:45:41
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/app/dashboard/layout.tsx

// Custom Imports - Layout
import DashboardLayout from "@/layouts/dashboard/layout"

interface Props {
	children: React.ReactNode
}

export default function Layout({children}: Props) {
	return (
		<DashboardLayout>{children}</DashboardLayout>
	)
}