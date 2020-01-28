const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema({
  ide: {
    type: Number,
    required: true,
    unique: true
  },
  employee_id: {
    type: Number,
    required: true
  },
  carmodel_id: {
    type: Number,
    required: true
  }
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
