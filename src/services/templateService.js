import * as tokenService from "./tokenService"

const BASE_URL = "/api/template"

export const createTemplate = async (template) => {
	try {
		const res = await fetch(
			`${BASE_URL}/create`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${tokenService.getToken()}`,
				},
				body: JSON.stringify(template),
			},
			{ mode: "cors" }
		)
		const data = await res.json()
		return data
	} catch (err) {
		throw err
	}
}
export const getTemplateById = async (id) => {
	try {
			const res = await fetch(`${BASE_URL}/details/${id}`, { mode: 'cors' })
			const data = await res.json()
			return data
	} catch (error) {
			throw error
	}
}