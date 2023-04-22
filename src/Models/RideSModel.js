const mongoose = require('mongoose');

const RidesSchema = new mongoose.Schema({
      user_id: String,
      destination: String,
});

const RidesModel = mongoose.model('RideModel', RidesSchema);

module.exports = RidesModel;

