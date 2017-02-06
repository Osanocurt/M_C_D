const mongoose = require('mongoose');

const dealsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  expiryDate: { type: Date, required: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Deal', dealsSchema);
