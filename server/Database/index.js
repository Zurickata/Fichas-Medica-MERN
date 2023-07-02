const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://zurickata:zurickata647@ZuriCluster.hrkbvj6.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
    try {
      const conn = await mongoose.connect(MONGO_URL);
      console.log("DB is connected", conn.connection.host);
    } catch (error) {
      console.log(error);
    }
  };

module.exports = db;