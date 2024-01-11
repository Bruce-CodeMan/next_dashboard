export default async function Item() {

	await new Promise(resolve => setTimeout(resolve, 2500))

	return (
		<div>Item</div>
	)
}