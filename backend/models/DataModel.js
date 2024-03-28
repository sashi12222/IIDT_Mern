// backend/models/DataModel.js

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  position: String,
  office: String,
  startDate: Date,
  salary: Number,
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
