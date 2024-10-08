const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shop')
const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  poster: String,
  rating: String,
  introduction: String,
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

const Movie = module.exports = mongoose.model('Movie', movieSchema)
