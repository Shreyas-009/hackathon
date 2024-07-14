const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  pickerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Picker",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  scheduledTime: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
