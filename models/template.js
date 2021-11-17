import mongoose from 'mongoose'

const Schema = mongoose.Schema

const templateSchema = new Schema({
  template_title: {
    type: String,
  },
  code_block_html: {
    type: String,
  },
  code_block_css: {
    type: String,
  },
  colors: {
    type: Array
  },
}, { timestamps: true })

const Template= mongoose.model("Template", templateSchema)

export {
  Template
}