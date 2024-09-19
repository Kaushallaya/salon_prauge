const express = require("express");
const Users = require("../models/users");
const Booking = require("../models/booking");

const router = express.Router();

router.post("/booking/save", (req, res) => {
  let newBooking = new Booking(req.body);

  newBooking.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Booking saved successfully",
    });
  });
});

router.post("/users/save", (req, res) => {
  let newUser = new Users(req.body);

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "User saved successfully",
    });
  });
});

module.exports = router;
