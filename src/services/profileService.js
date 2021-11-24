const BASE_URL = "/api/profiles/"

export const getProfileById = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}${id}`, { mode: "cors" })
		const data = await res.json()
		return data
	} catch (error) {
		throw error
	}
}
