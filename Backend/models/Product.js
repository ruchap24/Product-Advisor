const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  skinType: { type: [String], required: true },
  concerns: { type: [String], required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);