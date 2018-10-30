const mongoose = require( 'mongoose');
const handmadeSchema = mongoose.Schema({
  name: String,
  tools: [String],
  materials: [String],
  image: String,
  concept: String,
  commments: [
    {
      user: String,
      comment: String,
      score: Number,
      commentDate: { type: Date, default: Date.now }
    }
  ]
});

const handmadeModel = mongoose.model('Handmade', handmadeSchema);
module.exports = handmadeModel;
