const mongoose = require("mongoose");
const PickerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String, required: true },
  servicesOffered: { type: [String], required: true },
  available: { type: Boolean, default: true },
  verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
});
module.exports = mongoose.model("Picker", PickerSchema);
