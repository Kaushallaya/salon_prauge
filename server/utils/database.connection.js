const mongoose = require("mongoose");
const logger = require("./logger");

let database;

const connect = async () => {
  const MONGODB_URL = process.env.CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      logger.info("Database Synced");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

module.exports = connect;
