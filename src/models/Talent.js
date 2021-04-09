const { Schema, model } = require('mongoose')

const talentSquema = new Schema({
  name: String,
  assignedTo: String,
  rol: Array,
  image: String,
  location: Array,
  assignments: Array,
  recruitedBy: String,
})

module.exports = model('Talent', talentSquema)
