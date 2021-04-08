const { Schema, model } = require('mongoose')

const candidateSquema = new Schema({
  name: String,
  assignedTo: String,
  image: String,
  location: Array,
})

module.exports = model('Candidate', candidateSquema)
