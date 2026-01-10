require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const registerRouter = require("./routes/registerRoute");
const loginRouter = require("./routes/loginRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", registerRouter);
app.use("/api/auth", loginRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error starting server:", err.message);
  }
};

start();
