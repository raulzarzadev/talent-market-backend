const { Schema, model } = require('mongoose')

const userSquema = new Schema({
  name: String,
  assignedTo: String,
  rol: Array,
  image: String,
  location: Array,
})

module.exports = model('User', userSquema)
