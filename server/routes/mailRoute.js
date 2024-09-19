const express = require("express");
const logger = require("../utils/logger");
const sendEmail = require("../Services/sendEmailer.js");

const router = express.Router();

router.post("/api/sendemail", async (req, res) => {
  const values = req.body;
  console.log(values);
  try {
    await sendEmail(values);
    res.status(200).json({ success: true, message: "Email Sent" });
    logger.info("Email Sent Successfuly");
  } catch (error) {
    res.status(500).json(error.message);
    logger.error(error.message);
  }
});

module.exports = router;
