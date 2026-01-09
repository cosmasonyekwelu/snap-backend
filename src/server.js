const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database  connected");

    app.listen(port, () => {
      console.log(`server is running on PORT ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
