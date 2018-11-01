const mongoose = require( 'mongoose');
const handmadeSchema = mongoose.Schema({
  name: String,
  tools: [String],
  materials: [String],
  image: String,
  concept: String,
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [
    {
      user: { type: mongoose.Schema.ObjectId, ref: 'User' },
      comment: String,
      score: Number,
      commentDate: { type: Date, default: Date.now }
    }
  ]
});

const handmadeModel = mongoose.model('Handmade', handmadeSchema);
module.exports = handmadeModel;
