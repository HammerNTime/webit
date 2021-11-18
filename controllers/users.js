import { User } from "../models/user.js"

const getTemplateUsers = async (req, res) => {
	try {
		const users = await User.find()
		return res.status(200).json(users)
	} catch (error) {
		return res.status(500).send(error.message, "Could not find users")
	}
}

const getAllUsers = async (req, res) => {
	try {
		User.find({}, function (err, users) {
			const userList = {}
			users.forEach(function (user) {
				userList[user._id] = user
			})
		})
	} catch (error) {
		console.error(error)
	}
}

export { getTemplateUsers, getAllUsers }
