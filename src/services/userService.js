const BASE_URL = "/api/users"

const getAllUsers = async () => {
	try {
		const res = await fetch(`${BASE_URL}/all-users`, { mode: "cors" })
		const data = await res.json()
		return data
	} catch (error) {
		// throw error
		console.log(error)
	}
}

export { getAllUsers }
