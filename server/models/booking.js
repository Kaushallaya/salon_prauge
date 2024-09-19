const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  serviceId: { type: String, required: true },
  bookingDate: { type: String, required: true },
  bookingTime: { type: String, required: true },
});

module.exports = mongoose.model("booking", userSchema);
