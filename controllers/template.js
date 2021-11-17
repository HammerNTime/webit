import { User } from "../models/user.js"
import { Template } from "../models/template.js"

const create = async (req, res) => {
  const template = await new Template(req.body)
	try {
		await template.save()
		await User.updateOne(
			{ _id: "619493061d20a4ac3e5aa223" },
      // { _id: req.user._id },
			{ $push: { templates: template } }
		)
    return res.status(201).json(template)
	} catch (err) {
		return res.status(500).json({ err: err.message })
	}
}



export {
  create,
}