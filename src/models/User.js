const { Schema, model } = require('mongoose')

const userSquema = new Schema({
  name: String,
  rol: Array,
})

module.exports = model('User', userSquema)
