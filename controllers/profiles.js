import { User } from "../models/user.js"

const show = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate("templates")
		return res.status(200).json(user)
	} catch (error) {
		return res.status(500).send(error.message, "Could not locate this user")
	}
}

export { show }
