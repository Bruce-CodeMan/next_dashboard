/*
 * @Date: 2024-01-11 11:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
export default async function Item() {

	await new Promise(resolve => setTimeout(resolve, 2500))

	return (
		<div>Users</div>
	)
}