const mongoose = require("mongoose");
const databaseUrl = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/argentBankDB";

module.exports = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(databaseUrl);
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
