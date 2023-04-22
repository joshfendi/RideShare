const mongoose = require("mongoose");

const RidesSchema = new mongoose.Schema({
  ride_id: String,
  users: [],
  date: Date,
  origin: String,
  destination: String,
  uber: Boolean,
  price: Number,
  payment_type: Boolean,
});

const RidesModel = mongoose.model("RideModel", RidesSchema);

module.exports = RidesModel;
