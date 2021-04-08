const { Schema, model } = require('mongoose')

const candidateSquema = new Schema({
  name: String,
  assignedTo: String,
  rol: Array,
  image: String,
  location: Array,
})

module.exports = model('Candidate', candidateSquema)
