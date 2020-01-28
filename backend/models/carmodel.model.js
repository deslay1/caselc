const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carmodelSchema = new Schema({
  ide: {
    type: Number,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Carmodel = mongoose.model("Carmodel", carmodelSchema);

module.exports = Carmodel;
