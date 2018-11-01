const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});


userSchema.virtual('comments', {
  ref: 'Handmade',
  localField: '_id',
  foreignField: 'comments.user'
});


userSchema.virtual('addedHandmades', {
  ref: 'Handmade',
  localField: '_id',
  foreignField: 'addedBy'
});



const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
