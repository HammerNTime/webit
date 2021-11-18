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
		const res = await fetch(`${BASE_URL}/${id}`, { mode: "cors" })
		const data = await res.json()
		return data
	} catch (error) {
		throw error
	}
}
export const getTemplateByUser = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}/user/${id}`, { mode: "cors" })
		const data = await res.json()
		return data
	} catch (error) {
		throw error
	}
}
export const deleteTemplate = async (templateId, userId) => {
	try {
		await fetch(
			`${BASE_URL}/${templateId}/${userId}`,
			{
				method: "DELETE",
				headers: { Authorization: "Bearer " + tokenService.getToken() },
			},
			{ mode: "cors" }
		)
	} catch (error) {
		throw error
	}
}

export const getAllTemplates = async () => {
	try {
		const res = await fetch(`${BASE_URL}/all`, { mode: "cors" })
		const data = await res.json()
		return data
	} catch (error) {
		throw error
	}
}
