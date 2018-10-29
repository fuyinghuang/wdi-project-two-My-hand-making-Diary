
const mongoose = require( 'mongoose');
const handmadeSchema = mongoose.Schema({
  name: String,
  tools: [String],
  materials: [String],
  image: String,
  concept: String
});

const handmadeModel = mongoose.model('Handmade', handmadeSchema);
module.exports = handmadeModel;
