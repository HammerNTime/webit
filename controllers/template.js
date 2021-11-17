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

const getTemplateById = async (req, res) => {
  try {
      const template = await Template.findById(req.params.id)
          .populate('added_by')
      return res.status(200).json(template)
  } catch (error) {
      return res.status(500).send(error.message, 'Sorry, we are having trouble finding that templat. Please try again later')
  }
}


const getTemplatesByUserId = async (req, res) => {
  try {
      const templates = await Template.find({ added_by: { $eq: req.params.id } })
          .populate('added_by')
      return res.status(200).json(templates)
  } catch (error) {
      return res.status(500).send(error.message, 'No Posts were found')
  }
}

const deleteTemplate = async (req, res) => {
  try {
      const removedTemplate = await Template.findByIdAndDelete(req.params.id)
      const user = await User.findById(req.user._id)
      user.templates.remove({ _id: req.params.id })
      await user.save()
      return res.status(200).json(removedTemplate)
  } catch (error) {
      throw error
  }
}

const getAllTemplates = async (req, res) => {
  try {
      const templates = await Template.find()
          .sort({ createdAt: -1 })
      return res.status(200).json(templates)

  } catch (error) {
      return res.status(500).send(error.message, 'Could not find users')
  }
}

export {
  create,
  getTemplateById,
  getTemplatesByUserId,
  deleteTemplate,
  getAllTemplates,

}