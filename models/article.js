const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
  text: { type: String, required: true, trim: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Article', articlesSchema);
