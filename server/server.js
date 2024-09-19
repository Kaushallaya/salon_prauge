const express = require("express");
const sendEmail = require("./Services/sendEmailer.js");
const bodyParser = require("body-parser");
const connect = require("./utils/database.connection");
require("dotenv").config();

connect();
const bookingRoutes = require("./routes/dbRoute");
const maileRoutes = require("./routes/mailRoute");
const paymentRoutes = require("./routes/paymentRoute");

var cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Stripe settup
app.use(paymentRoutes);

//Node Mail Routes
app.use(maileRoutes);

//Mongo DB Routes
app.use(bookingRoutes);

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Your server is running on port 5000");
});
