var mongoose = require('mongoose');

var PetPerfilSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  pet_name: String,
  pet_age: Number,
  pet_breed: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PetPerfil', ProductSchema);