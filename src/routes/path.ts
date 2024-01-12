/*
 * @Date: 2024-01-12 15:36:19
 * @Author: Bruce Hsu
 * @Description: 
 */
const ROOTS = {
	DASHBOARD: "/dashboard"
}

const paths = {
	dashboard: ROOTS.DASHBOARD,
	user: {
		root: `${ROOTS.DASHBOARD}/users`,
		new: `${ROOTS.DASHBOARD}/users/add`,
		view: (id: string) => `${ROOTS.DASHBOARD}/users/${id}`
	}
}

export default paths